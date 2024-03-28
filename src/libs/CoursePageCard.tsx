import { Bookmark, FileInput, Layers3, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Styles from "../styles/CourseCard.module.css";
import { convertRatingToIcons } from "../utils/RatingConverter";
import { TCourse } from "../types/types";

interface ICourseProps {
  course: TCourse;
}

const CoursePageCard: React.FC<ICourseProps> = ({ course }) => {
  const ratingIcons = convertRatingToIcons(course.rating);

  return (
    <Link to={`/courses/${course.id}`}>
      <div
        className={`${Styles.CCContainer} flex items-center flex-col lg:flex-row bg-white p-6 rounded-lg shadow cursor-pointer relative`}
      >
        <div className=" relative shrink-0">
          <img
            className={`${Styles.CCImage}  w-[280px] h-[200px] lg:w-[220px] lg:h-[160px] object-cover rounded-lg relative`}
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
          <div className="flex items-center justify-between mt-5 mb-2" >
            <div>
              <p
                className={`text-xl poppins-semibold text-[#fc4f4f] ${Styles.CCPrice}`}
              >
                ${course.price}
              </p>
            </div>
            <div className="flex items-center">
              {ratingIcons.map((icon, index) => (
                <span className="text-orange-400" key={index}>
                  {icon}
                </span>
              ))}
              <p className="text-md poppins-regular">
                ({`${course.rating}/ ${course.ratingCount} Rating`})
              </p>
            </div>
          </div>
          <div>
            <h1 className={`text-lg poppins-regular ${Styles.CCTitle}`}>
              {course.title}
            </h1>
            <p className="text-md poppins-light my-2">{`${course.description.slice(
              0,
              120
            )}....`}</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
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
          <div className={`${Styles.CCIcons} flex items-center flex-col lg:flex-row`}>
            <ShoppingCart
              size={25}
              color="#fc4f4f"
              className=" cursor-pointer"
            />
            <Link to={`/courses/${course.id}`}>
              <FileInput
                size={25}
                className="lg:ml-3 ml-0 mt-3 lg:mt-0 cursor-pointer"
                color="#ff7c02"
              />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoursePageCard;
