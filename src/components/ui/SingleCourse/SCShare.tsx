import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Styles from "../../../styles/SCBInstructors.module.css";

interface ISCShareProps {
  title?: string;
}

const SCShare: React.FC<ISCShareProps> = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-end mt-4">
        <p className="text-xl poppins-regular mr-2">{title || ""}</p>

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
  );
};

export default SCShare;
