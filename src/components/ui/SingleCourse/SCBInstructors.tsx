import InstructorImg from "../../../assets/images/instructorImg.jpg";
import SCShare from "./SCShare";

const SCBInstructors = () => {
  return (
    <div className="my-12">
      <h1 className="text-2xl poppins-semibold text-[#001D25] mb-5">
        About Course <span className="text-[#FC4F4F]">Instructor.</span>
      </h1>
      <div className="border border-gray-200 p-3 flex flex-col lg:flex-row items-center rounded-lg">
        <div className=" shrink-0 mb-5 lg:mb-0">
          <img
            className="w-[150px] h-[150px] object-cover rounded-full border shadow-xl"
            src={InstructorImg}
            alt=""
          />
        </div>
        <div className="ml-0 lg:ml-4">
          <div className="flex items-center flex-col lg:flex-row justify-between">
            <h1 className="text-2xl poppins-semibold text-[#001D25]">
              Md Foysal Ahammed
            </h1>
            <p className="text-md poppins-regular text-[#FC4F4F]">
              MERN Stack Developer
            </p>
          </div>
          <p className="mt-2 text-md poppins-light text-justify">
            I have hands-on experience efficiently coding websites and
            applications using modern languages (HTML5, CSS3, JavaScript, React
            JS and Next JS). My Main Focus On Web Design And Developing: Mobile
            First Design, Easy To Use, Pixel Perfect Design, Search Engine
            Optimization, W3C Validation Code. In addition to my knowledge base,
            I actively seek out new technologies and stay up-to-date on industry
            trends and advancements.
          </p>
          <div>
            <SCShare  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCBInstructors;
