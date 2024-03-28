import { Tags } from "lucide-react";

const tagsList = [
  "education",
  "course selection",
  "career development",
  "career",
  "skill development",
  "industry trends",
  "professional development",
  "career growth",
  "skill acquisition",
  "education",
  "personal development",
  "goal setting",
  "learning",
  "digital economy",
  "technological advancement",
  "opportunity",
  "personal growth",
  "success",
  "relevance",
  "career success",
  "informed decisions",
  "career planning",
];

const BlogsTagList = () => {
  return (
    <div className=" shadow rounded-lg p-3 mt-8">
      <h1 className="text-xl poppins-regular text-[#001D25] mb-5">Tags</h1>
      <div>
        {tagsList.map((tag) => (
          <div className="flex items-center mb-1">
            <Tags size={18} color="#FC4F4F" />
            <p className=" capitalize text-md poppins-light ml-1 text-[#001D25] hover:text-[#FC4F4F] cursor-pointer">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsTagList;
