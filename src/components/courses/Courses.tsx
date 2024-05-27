import { useMemo } from "react";
import { useStore } from "../../hooks/useStore";
import { BASE_TAG } from "../../constants";
import { CourseItem } from "./courseItem/CourseItem";
import styles from "./courses.module.scss";

export const Courses = () => {
  const { courses, activeTag } = useStore((state) => state);

  const filterCourses = useMemo(
    () =>
      activeTag === BASE_TAG
        ? courses
        : courses.filter((course) =>
            course.tags.some((tag) => activeTag === tag)
          ),
    [activeTag, courses]
  );

  return (
    <div className={styles.container}>
      {filterCourses.map((course) => (
        <CourseItem key={course.id} {...course} />
      ))}
    </div>
  );
};
