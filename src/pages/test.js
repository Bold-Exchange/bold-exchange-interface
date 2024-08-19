import React, { useState, useEffect } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const App = () => {
  const [solanaAccount, setSolanaAccount] = useState(null);
  const [solanaProvider, setSolanaProvider] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        setSolanaProvider(provider);
      }
    } else {
      window.open("https://phantom.app/", "_blank");
    }
  }, []);

  const connectPhantom = async () => {
    try {
      if (solanaProvider) {
        const response = await solanaProvider.connect();
        setSolanaAccount(response.publicKey.toString());

        // 创建一个新的连接到 Solana 集群
        const connection = new Connection(
          clusterApiUrl("mainnet-beta"),
          "confirmed"
        );
        try {
          const version = await connection.getVersion();
          console.log("Connected to Solana cluster:", version);
        } catch (error) {
          console.error("Failed to connect to Solana cluster:", error);
        }
        // 获取账户余额
        const publicKey = new PublicKey(response.publicKey.toString());
        const balance = await connection.getBalance(publicKey);
        debugger;
        setBalance(balance / 1e9); // 将 lamports 转换为 SOL
      } else {
        alert("Phantom 钱包未安装");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnectPhantom = async () => {
    try {
      if (solanaProvider) {
        await solanaProvider.disconnect();
        setSolanaAccount(null);
        setBalance(null);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <h1>Connect to Phantom Wallet</h1>
      <button onClick={connectPhantom}>Connect Phantom</button>
      {solanaAccount ? (
        <div>
          <p>Solana Account: {solanaAccount}</p>
          <p>Balance: {balance} SOL</p>
          <button onClick={disconnectPhantom}>Disconnect</button>
        </div>
      ) : (
        <p>Not connected to Solana</p>
      )}
    </div>
  );
};

export default App;
