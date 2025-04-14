// src/api/axiosInstance.ts

import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { getToken } from "../utils/auth";

// Create two axios instances - one for public and one for private endpoints
const createAxiosInstance = (isPrivate: boolean = false) => {
  const instance = axios.create({
    baseURL: "", // Replace with your API base URL
    timeout: 10000,
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // Only add token for private endpoints
      if (isPrivate) {
        const token = getToken();
        if (token && config.headers) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      return response;  // Return the full response instead of just data
    },
    (error: AxiosError): Promise<AxiosError> => {
      if (error.response?.status === 401 && isPrivate) {
        // Handle unauthorized access for private endpoints
        console.error("Unauthorized, redirecting to login...");
        // Add your redirect logic here
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Create instances
const publicRequest = createAxiosInstance();
const privateRequest = createAxiosInstance(true);

// Export a unified request object with both instances
export default {
  public: publicRequest,
  private: privateRequest,
  // Helper methods
  get: publicRequest.get, // Default to public
  post: publicRequest.post,
  put: publicRequest.put,
  delete: publicRequest.delete,
};
