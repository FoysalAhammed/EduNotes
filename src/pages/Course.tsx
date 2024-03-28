import CourseData from "../components/ui/Courses/CourseData";
import Container from "../utils/Container";
import CourseHeading from "../components/ui/Courses/CourseHeading";
import { useState } from "react";
import FilterByCategory from "../components/ui/Courses/FilterByCategory";
import FilterByInstructor from "../components/ui/Courses/FilterByInstructor";
import FilterByLevel from "../components/ui/Courses/FilterByLevel";
import FilterByLanguage from "../components/ui/Courses/FilterByLanguage";
import FilterReset from "../components/ui/Courses/FilterReset";
import CoursePagination from "../components/ui/Courses/CoursePagination";

const Course = () => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-11 mt-10">
            <div className="lg:col-span-3">
              <div>
                <FilterByCategory />
                <FilterByInstructor />
                <FilterByLevel />
                <FilterByLanguage />
                <FilterReset />
              </div>
            </div>
            <div className="lg:col-span-8 ">
              <div className="w-full lg:w-12/12 ">
                <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
                  <CourseHeading setToggleButton={setToggleButton} />
                  <CourseData toggleButton={toggleButton} />
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 flex items-end justify-end">
            <CoursePagination />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Course;
