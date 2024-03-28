import { Mail, MapPin, PhoneCall } from "lucide-react";
import logoImg from "../../../assets/images/Logo.png";
const FooterInfo = () => {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] object-cover"
            src={logoImg}
            alt="Website Logo"
          />
          <h1 className="text-xl poppins-semibold ml-1">EduNotes</h1>
        </div>
        <p className="text-md poppins-extralight mt-3">
          Empowering education for all. Explore our platform for personalized
          learning, expert resources, and endless opportunities to grow and
          succeed.
        </p>
        <div className="mt-5">
          <div className="flex items-center">
            <MapPin size={18} />
            <p className=" text-md poppins-extralight ml-2">
            Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex items-center my-2">
            <PhoneCall size={18} />
            <a
              className=" text-md poppins-extralight ml-2 cursor-pointer"
              href="tell:+8801778821588"
            >
              +8801778821588
            </a>
          </div>
          <div className="flex items-center">
            <Mail size={18} />
            <a
              className=" text-md poppins-extralight ml-2 cursor-pointer"
              href="mailto:hanif.mia2233@gmail.com"
            >
              hanif.mia2233@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
