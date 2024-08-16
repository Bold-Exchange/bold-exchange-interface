import { createContext } from "react";

interface WalletContextType {
  currentChain: number;
  switchChain: (chainId: number) => void;
}

const ModalContext = createContext<WalletContextType | null>(null);

export default ModalContext;
