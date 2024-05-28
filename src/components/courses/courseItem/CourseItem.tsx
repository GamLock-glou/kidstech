import { FC, memo } from "react"
import { IData } from "../../../types"
import styles from "./courseItem.module.scss";

interface ICourseItemProps extends IData {}

export const CourseItem: FC<ICourseItemProps> = memo(({name, bgColor, image}) => {
  return (
    <div className={styles.container}>
      <div style={{background: bgColor}} className={styles.backgroundWrapper}>
        <img src={image} />
      </div>
      <div className={styles.text}>{name}</div>
    </div>
  )
})
