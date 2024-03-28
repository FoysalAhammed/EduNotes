import { TCourse } from "../types/types";
import { convertRatingToIcons } from "../utils/RatingConverter";
import Styles from "../styles/CourseCard.module.css";
import { Bookmark, FileInput, Layers3, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ICourseProps {
  course: TCourse;
}
const CourseGridCard: React.FC<ICourseProps> = ({ course }) => {
  const ratingIcons = convertRatingToIcons(course.rating);

  return (
    <div>
      <div>
        <div
          className={`${Styles.CCContainer}  bg-white p-6 rounded-lg shadow cursor-pointer relative`}
        >
          <div className=" relative shrink-0">
            <img
              className={`${Styles.CCImage} h-[200px] w-full   object-cover rounded-lg relative`}
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
            <div className="flex items-center justify-between my-3">
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
                <p className="text-md poppins-regular ml-1">
                  ({`${course.rating} / ${course.ratingCount} Rating`})
                </p>
              </div>
            </div>
            <div>
              <h1 className={`text-lg poppins-regular ${Styles.CCTitle}`}>
                {course.title}
              </h1>
              <p className="text-[14px] poppins-regular my-2">{`${course.description.slice(
                0,
                120
              )}....`}</p>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <div>
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
                <div>
                  <div>
                    <Link to={`/courses/${course.id}`}>
                      <FileInput size={20} color="#001D25" />
                    </Link>
                  </div>
                  <div className="mt-1">
                    <ShoppingCart size={20} color="#FC4F4F" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGridCard;
