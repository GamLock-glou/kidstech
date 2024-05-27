import { FC, memo } from "react";
import styles from "./sideBarItem.module.scss";
import cn from "classnames";

export interface ISideBarItemProps {
  name: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export const SideBarItem: FC<ISideBarItemProps> = memo(
  ({ name, isActive, onClick }) => {
    const onTagClick = () => onClick(name);
    return (
      <div
        onClick={onTagClick}
        className={cn(styles.container, { [styles.active]: isActive })}
      >
        {name}
      </div>
    );
  }
);
