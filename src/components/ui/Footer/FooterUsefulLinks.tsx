import { Link } from "react-router-dom";

const FooterUsefulLinks = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl poppins-semibold">Useful Links</h1>
        <div className="mt-3">
          <Link
            className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
            to="/"
          >
            Courses
          </Link>
          <Link
            className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
            to="/"
          >
            Blogs
          </Link>
          <Link
            className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
            to="/"
          >
            Instructor
          </Link>
          <Link
            className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
            to="/"
          >
            Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterUsefulLinks;
