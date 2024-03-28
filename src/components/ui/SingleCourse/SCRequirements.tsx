import { Check } from "lucide-react";

const SCRData = [
  "Basic Computer Skills",
  "Internet Connection",
  "Willingness to Learn",
  "Dedication to Practice",
  "Entrepreneurial Mindset",
  "English Proficiency",
];

const SCRequirements = () => {
  return (
    <div>
      <h1 className="text-2xl poppins-semibold text-[#001D25]">
        Course <span className="text-[#FC4F4F]">Requirements.</span>
      </h1>
      <div className="mt-5">
        {SCRData.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <Check size={20} color="#FC4F4F" />
            <p className="text poppins-regular ml-2">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SCRequirements;
