import { memo, useCallback, useMemo } from "react";
import { useStore } from "../../hooks/useStore";
import styles from "./sideBar.module.scss";
import { SideBarItem } from "./sideBarItem/SideBarItem";
import { BASE_TAG } from "../../constants";

export const SideBar = memo(() => {
  const { activeTag, setActiveTag, courses } = useStore((state) => state);

  const onClick = useCallback((name: string) => {
    setActiveTag((pr) => (pr === name ? BASE_TAG : name));
  }, [setActiveTag]);

  const filterTags = useMemo(
    () => new Set([BASE_TAG, ...courses.flatMap((v) => v.tags)]),
    [courses]
  );
  return (
    <div className={styles.container}>
      {[...filterTags].map((tag) => (
        <SideBarItem
          key={tag}
          isActive={activeTag === tag}
          onClick={onClick}
          name={tag}
        />
      ))}
    </div>
  );
});
