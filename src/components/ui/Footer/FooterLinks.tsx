import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <h1 className="text-xl poppins-semibold">Links</h1>
      <div className="mt-3">
        <Link
          className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
          to="/"
        >
          About Us
        </Link>
        <Link
          className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
          to="/"
        >
          Contact Us
        </Link>
        <Link
          className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
          to="/"
        >
          Privacy Policy
        </Link>
        <Link
          className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
          to="/"
        >
          Terms & Conditions
        </Link>
        <Link
          className="block text-md poppins-extralight mb-4 hover:text-[#FC4F4F] cursor-pointer"
          to="/"
        >
          Disclaimer
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
