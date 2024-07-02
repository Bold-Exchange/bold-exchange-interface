import React, { useState, ReactElement, ReactNode, cloneElement } from "react";
import classNames from "classnames";
import styles from "./styles.less"; // 引入样式文件

interface ListProps {
  children: ReactNode;
}

interface ListItemProps {
  children: ReactNode;
  value: string;
  isSelected?: boolean;
  onSelect?: (value: string) => void;
}

const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <ul className={styles.nav}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ListItemProps>(child)) {
          return cloneElement(child, {
            isSelected: child.props.value === selectedValue,
            onSelect: handleSelect,
          });
        }
        return child;
      })}
    </ul>
  );
};

const ListItem: React.FC<ListItemProps> = ({
  children,
  value,
  isSelected,
  onSelect,
}) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(value);
    }
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
