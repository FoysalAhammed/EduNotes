import { useState } from "react";
import { TCategory } from "../components/ui/Categories";

interface ICategoryProps {
  category: TCategory;
  index: number;
}

const bgColor = [
  "bg-red-100",
  "bg-yellow-100",
  "bg-green-100",
  "bg-gray-100",
  "bg-orange-100",
  "bg-blue-100",
  "bg-teal-100",
  "bg-pink-100",
  "bg-purple-100",
];
const bgHoverColor = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-gray-500",
  "bg-orange-500",
  "bg-blue-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-purple-500",
];

const CategoryCard: React.FC<ICategoryProps> = ({ category, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        className={`flex items-center justify-between p-5 poppins-regular rounded-lg cursor-pointer ${
          hovered ? bgHoverColor[index] : bgColor[index]
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img className="w-[40px] h-[40px]" src={category.image} alt="" />
        <h1 className={`text-lg ${hovered ? "text-white" : "text-[#001D25]"}`}>
          {category.name}
        </h1>
      </div>
    </div>
  );
};

export default CategoryCard;
