import { Mail, MapPinned, PhoneCall } from "lucide-react";
import SCShare from "../SingleCourse/SCShare";

const ContactUsInfo = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl lg:text-3xl poppins-semibold text-[#001D25]">
        We're Always Eager to Hear From You!
      </h1>
      <div className="mt-5">
        <div className="flex items-center">
          <MapPinned size={18} color="#001D25" />
          <h1 className="text-lg poppins-regular ml-1 text-[#001D25]">
            Address
          </h1>
        </div>
        <p className="text-lg poppins-light hover:text-[#FC4F4F] cursor-pointer">
          Gulshan,Dhaka,Bangladesh
        </p>
      </div>
      <div className="my-4">
        <div className="flex items-center">
          <Mail size={18} color="#001D25" />
          <h1 className="text-lg poppins-regular ml-1 text-[#001D25]">Email</h1>
        </div>
        <a
          className="text-lg poppins-light hover:text-[#FC4F4F] cursor-pointer"
          href="mailto:hanif.mia2233@gmail.com"
        >
          hanif.mia2233@gmail.com
        </a>
      </div>
      <div>
        <div className="flex items-center">
          <PhoneCall size={18} color="#001D25" />
          <h1 className="text-lg poppins-regular ml-1 text-[#001D25]">Phone</h1>
        </div>
        <a className="text-lg poppins-light hover:text-[#FC4F4F] cursor-pointer" href="tel:+8801778821588">
          (+880) 1778821588
        </a>
      </div>
      <div className="flex items-start justify-start">
        <SCShare title="Follow on:" />
      </div>
    </div>
  );
};

export default ContactUsInfo;
