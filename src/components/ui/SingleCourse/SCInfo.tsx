import {
  Badge,
  BookUser,
  CalendarClock,
  DollarSign,
  Globe,
  MoveRight,
  User,
} from "lucide-react";
import toast from "react-hot-toast";

const SCInfoData = {
  price: "89.00",
  instructor: "Md Foysal Ahammed",
  duration: "3 weeks",
  lessons: "6",
  enrolled: "100 students",
  language: "English",
  certificate: "Yes",
};

const SCInfo = () => {
  const handleBtnClick = () => {
    toast.error("Info is Cooking!", {
      icon: "🥱",
      id: "sciId",
    });
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-2xl poppins-semibold">
          Course <span className="text-[#FC4F4F]">Includes</span>
        </h1>
        <hr className="w-[80%] mx-auto border-gray-200 border-dashed mb-5" />
        <div>
          <div className="flex items-center justify-between border-b pb-1">
            <div className="flex items-center">
              <DollarSign size={18} />
              <p className="text-lg poppins-regular ml-1">Price :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              ${SCInfoData.price}
            </p>
          </div>
          <div className="flex items-center justify-between border-b pb-1 mt-4">
            <div className="flex items-center">
              <User size={18} />
              <p className="text-lg poppins-regular ml-1">Instructor :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              {SCInfoData.instructor}
            </p>
          </div>
          <div className="flex items-center justify-between border-b pb-1 mt-4">
            <div className="flex items-center">
              <CalendarClock size={18} />
              <p className="text-lg poppins-regular ml-1">Duration :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              {SCInfoData.duration}
            </p>
          </div>
          <div className="flex items-center justify-between border-b pb-1 mt-4">
            <div className="flex items-center">
              <BookUser size={18} />
              <p className="text-lg poppins-regular ml-1">Enrolled :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              {SCInfoData.enrolled}
            </p>
          </div>
          <div className="flex items-center justify-between border-b pb-1 mt-4">
            <div className="flex items-center">
              <Globe size={18} />
              <p className="text-lg poppins-regular ml-1">Language :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              {SCInfoData.language}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <Badge size={18} />
              <p className="text-lg poppins-regular ml-1">Certificate :</p>
            </div>
            <p className="text-lg poppins-regular text-[#FC4F4F]">
              {" "}
              {SCInfoData.certificate}
            </p>
          </div>
        </div>
        <div className="bg-[#001D25] text-white rounded-lg">
          <div className="my-8 mx-auto flex items-center justify-center p-3">
            <button
              onClick={() => handleBtnClick()}
              className="text-lg  poppins-regular mr-2"
            >
              Enrolled Now
            </button>
            <MoveRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCInfo;
