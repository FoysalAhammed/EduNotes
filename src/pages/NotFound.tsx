import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/notFound.gif";
import { Home } from "lucide-react";
const NotFound = () => {
  return (
    <div>
      <div className=" max-w-lg mx-5 lg:mx-auto my-10">
        <img src={notFoundImg} alt="" />

        <div className="flex items-center justify-center mt-10">
          <Home size={20} color="#FC4F4F" />
          <Link className="text-xl poppins-regular text-[#FC4F4F] ml-1" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
