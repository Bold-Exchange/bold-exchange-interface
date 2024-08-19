// src/WalletProvider.js
import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

const WalletContextProvider = ({ children }) => {
  const endpoint = clusterApiUrl("devnet");
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(), // 使用已知的适配器
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
