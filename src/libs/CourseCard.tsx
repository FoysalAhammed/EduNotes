import { Bookmark, FileInput, Layers3, ShoppingCart } from "lucide-react";
import Styles from "../styles/CourseCard.module.css";
import { Link } from "react-router-dom";
import { TCourse } from "../types/types";

interface ICourseProps {
  course: TCourse;
}

const CourseCard: React.FC<ICourseProps> = ({ course }) => {
  return (
    <div>
      <div
        className={`${Styles.CCContainer} flex items-center bg-white p-6 rounded-lg shadow cursor-pointer relative`}
      >
        <div className=" relative">
          <img
            className={`${Styles.CCImage} w-[180px] h-[120px] object-cover rounded-lg relative`}
            src={course.image}
            alt=""
          />
          <p
            className={`absolute top-2 bg-[#fc4f4f] left-2 text-md poppins-regular text-white px-3 py-1 rounded ${Styles.CCDuration}`}
          >
            {course.duration}
          </p>
        </div>
        <div className="ml-3">
          <p
            className={`text-xl poppins-semibold text-[#fc4f4f] ${Styles.CCPrice}`}
          >
            ${course.price}
          </p>
          <div>
            <h1 className={`text-lg poppins-regular ${Styles.CCTitle}`}>
              {course.title}
            </h1>
          </div>
          <div className="mt-1">
            <div className="flex items-center">
              <Layers3 size={18} color="#001D25" />
              <p className=" poppins-regular text-[#001D25] ml-2">
                {course.category}
              </p>
            </div>
            <div className="flex items-center">
              <Bookmark size={18} color="#001D25" />
              <p className=" poppins-regular text-[#001D25] ml-2">
                {course.level}
              </p>
            </div>
          </div>
        </div>
        <div className={`${Styles.CCIconsContainer} hidden`}>
          <div className={`${Styles.CCIcons} flex items-center`}>
            <ShoppingCart
              size={25}
              color="#fc4f4f"
              className=" cursor-pointer"
            />
            <Link to={`courses/${course.id}`}>
              <FileInput
                size={25}
                className="ml-3 cursor-pointer"
                color="#ff7c02"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
