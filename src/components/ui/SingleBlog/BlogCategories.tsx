import { ChevronRight } from "lucide-react";

const CategoriesData = [
  "Cloud Computing",
  "Marketing",
  "Blockchain",
  "Cybersecurity",
  "Game Development",
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Programming",
];

const BlogCategories = () => {
  return (
    <div className=" shadow rounded-lg p-3">
      <h1 className="text-xl poppins-regular text-[#001D25] mb-5">
        Categories
      </h1>
      <div>
        {CategoriesData.map((category, index) => (
          <div key={index} className=" mb-2 poppins-regular flex items-center">
            <ChevronRight size={20} className="text-[#FC4F4F]" />
            <h1 className="text-[#001D25] hover:text-[#FC4F4F] cursor-pointer">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
