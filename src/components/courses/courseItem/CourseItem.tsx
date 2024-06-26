import { FC, memo } from "react"
import { IData } from "../../../types"
import styles from "./courseItem.module.scss";
import { useInView } from "react-intersection-observer";

interface ICourseItemProps extends IData {}

export const CourseItem: FC<ICourseItemProps> = memo(({name, bgColor, image}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  return (
    <div ref={ref} className={styles.container}>
      <div style={{background: bgColor}} className={styles.backgroundWrapper}>
        {inView && <img src={image} alt={name} />}
      </div>
      <p className={styles.text}>{name}</p>
    </div>
  )
})
