import React, {
  useState,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useEffect,
} from "react";
import classNames from "classnames";
import styles from "./styles.less"; // 引入样式文件

interface ListProps {
  children: ReactNode;
  onSelect?: (value: string) => void;
  defaultValue?: string;
}

interface ListItemProps {
  children: ReactNode;
  value: string;
  isSelected?: boolean;
}

interface ListContextType {
  selectedValue: string | null;
  handleSelect: (value: string) => void;
}

const ListContext = createContext<ListContextType>({
  selectedValue: null,
  handleSelect: () => {},
});

const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  children,
  onSelect,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue || null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect && onSelect(value);
  };

  useEffect(() => {
    if (defaultValue && onSelect) {
      onSelect(defaultValue);
    }
  }, []);

  return (
    <ListContext.Provider value={{ selectedValue, handleSelect }}>
      <ul className={styles.nav}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<ListItemProps>(child)) {
            return cloneElement(child, {
              isSelected: child.props.value === selectedValue,
            });
          }
          return child;
        })}
      </ul>
    </ListContext.Provider>
  );
};

const ListItem: React.FC<ListItemProps> = ({ children, value, isSelected }) => {
  const { handleSelect } = useContext(ListContext);

  const handleClick = () => {
    handleSelect(value);
  };

  return (
    <li className={classNames(styles.navItem)} onClick={handleClick}>
      <a
        className={classNames(styles.navLink, {
          [styles.active]: isSelected,
        })}
      >
        {children}
      </a>
    </li>
  );
};

List.Item = ListItem;

export default List;
