export const getToken = (): string | null => {
  return localStorage.getItem("token"); // 或者从其他存储方式中获取 token
};

export const setToken = (token: string): void => {
  localStorage.setItem("token", token); // 或者使用其他存储方式
};

export const removeToken = (): void => {
  localStorage.removeItem("token"); // 或者使用其他存储方式
};
