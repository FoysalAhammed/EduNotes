import { Link } from "react-router-dom";
import getAllCourses from "../../data/Course";
import CourseCard from "../../libs/CourseCard";
import Container from "../../utils/Container";
import { TCourse } from "../../types/types";



const courses = getAllCourses();

const Course = () => {
  return (
    <div className="mt-16 lg:mt-24 bg-green-50 py-8">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-xl poppins-regular text-[#fc4f4f]">
            Popular Courses
          </h1>
          <p className="text-4xl poppins-semibold text-[#001D25]">
            Pick A <span className="text-[#fc4f4f]">Course</span> To Get Started
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
          {courses.slice(0, 4).map((course: TCourse) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            className="bg-[#001D25] px-5 py-3 poppins-regular text-lg text-white rounded-md hover:bg-[#fc4f4f]"
            to="/courses"
          >
            Explore More Courses
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Course;
