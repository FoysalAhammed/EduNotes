import { Link } from "react-router-dom";
import Styles from "../../styles/CallOut.module.css";
import Container from "../../utils/Container";

const CallOut = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <div className={`${Styles.COBanner} py-28`}>
        <Container>
          <div className="flex items-center justify-center flex-col text-center">
            <h1 className="text-2xl lg:text-5xl poppins-semibold text-[#001D25] max-w-[30ch]">
              Get Your Quality Skills{" "}
              <span className="text-[#FC4F4F]">Certificate </span> Through{" "}
              <span className="text-[#FC4F4F]">EduNotes</span>{" "}
            </h1>
            <Link
              className="mt-5 bg-[#001D25] px-5 py-3 text-lg poppins-regular text-white rounded-md"
              to="/contact-us"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallOut;
