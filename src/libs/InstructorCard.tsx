
import { TInstructor } from "../types/types";
import Styles from "../styles/InstructorCard.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

interface IInstructorProps {
  instructor: TInstructor;
}

const InstructorCard: React.FC<IInstructorProps> = ({ instructor }) => {
  return (
    <div className=" relative">
      <div className=" relative">
        <img
          className="w-full h-[350px] object-cover rounded-lg"
          src={instructor.image}
          alt=""
        />
        <div className={Styles.ISocialIcon}>
          <div className="flex flex-col bg-[#FC4F4F] rounded-bl-md">
            <a
              className={Styles.SclAnchor}
              target="_blank"
              href="https://www.facebook.com/foysal7788"
            >
              <FaFacebookF />
            </a>
            <a
              className={Styles.SclAnchor}
              target="_blank"
              href="https://www.linkedin.com/in/foysal-ahammed-235ba6203/"
            >
              {" "}
              <FaLinkedinIn />
            </a>
            <a
              className={Styles.SclAnchor}
              target="_blank"
              href="https://github.com/FoysalAhammed"
            >
              {" "}
              <FaGithub />
            </a>
            <a className={Styles.SclAnchor} href="##">
              {" "}
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <h1 className="text-xl poppins-extrabold text-[#001D25]">
          {instructor.instructorName}
        </h1>
        <p className="text-md poppins-medium text-[#FC4F4F]">
          {instructor.designation}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
