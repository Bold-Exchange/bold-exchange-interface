import { Modal, Button } from "antd";
import { hooks } from "@/connectors/metaMask";
import ChainList from "@/layouts/Admin/Top/ChainList";
import CopyText from "@/components/CopyText";
import { useState } from "react";

const { useAccounts } = hooks;

const WalletModal: React.FC = () => {
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const accounts = useAccounts();

  const displayAddress = accounts?.[0] || "Connect";

  return (
    <div>
      {/*<Button type="default" onClick={() => setIsNetworkModalOpen(true)}>
        {accounts?.[0] ? <CopyText text={displayAddress} /> : displayAddress}
      </Button>*/}

      <Button type="default" onClick={() => setIsNetworkModalOpen(true)}>
        Connect
      </Button>

      <Modal
        title="Select Network"
        open={isNetworkModalOpen}
        onCancel={() => setIsNetworkModalOpen(false)}
        footer={null}
      >
        <ChainList />
      </Modal>
    </div>
  );
};

export default WalletModal;
