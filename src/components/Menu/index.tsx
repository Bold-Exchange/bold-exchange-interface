import { ListMenu as List } from "@/components";
import styles from "./styles.less";
import { Network } from "@/api/api_types";
import { useEffect, useState } from "react";

const Menu = ({
  networks,
  setNetwork,
}: {
  networks: Network[];
  setNetwork: (network: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNetworks, setFilteredNetworks] = useState<Network[]>([]);

  const handleSelect = (value: string) => {
    setNetwork(value);
  };

  useEffect(() => {
    if (networks.length > 0) {
      setNetwork(networks[0].id);
      setFilteredNetworks(networks);
    }
  }, [networks]);

  useEffect(() => {
    const filtered = networks.filter((network) =>
      network.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNetworks(filtered);
  }, [searchTerm, networks]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search a network"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      {filteredNetworks.length > 0 ? (
        <List onSelect={handleSelect} defaultValue={filteredNetworks[0].id}>
          {filteredNetworks.map((network) => (
            <List.Item key={network.id} value={network.id}>
              {network.attributes.name}
            </List.Item>
          ))}
        </List>
      ) : (
        <div className={styles.noResults}>No networks found</div>
      )}
    </div>
  );
};

export default Menu;
