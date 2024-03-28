import getAllCourses from "../../../data/Course";
import CourseGridCard from "../../../libs/CourseGridCard";
import CoursePageCard from "../../../libs/CoursePageCard";
import { TCourse } from "../../../types/types";

interface CToggleProps {
  toggleButton: boolean;
}

const CourseData: React.FC<CToggleProps> = ({ toggleButton }) => {
  const courses = getAllCourses();
  return (
    <div>
      {toggleButton ? (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
          {courses.map((course: TCourse) => (
            <CourseGridCard course={course} key={course.id} />
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-1 gap-5">
          {courses.map((course: TCourse) => (
            <CoursePageCard course={course} key={course.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseData;
