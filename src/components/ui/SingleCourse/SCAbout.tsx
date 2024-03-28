import { Check } from "lucide-react";

const WLData = [
  {
    id: "1",
    title:
      "Covering keyword research, on-page optimization, link building, analytics, and content strategy.",
  },
  {
    id: "2",
    title:
      "Learn from seasoned professionals offering insights, tips, and strategies for successful SEO endeavors.",
  },
  {
    id: "3",
    title:
      "Gain access to a wealth of tools, templates, and resources to enhance your SEO journey.",
  },
  {
    id: "4",
    title:
      "Connect with like-minded peers, share experiences, and receive feedback in a supportive online environment.",
  },
];

const SCAbout = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl poppins-semibold text-[#001D25]">
          About This <span className="text-[#FC4F4F]">Course. </span>
        </h1>
        <p className=" text-md poppins-regular mt-4 text-justify">
          This course offers a comprehensive introduction to Python, a versatile
          programming language used in a variety of applications. It covers
          fundamental concepts such as variables, data types, control flow, and
          functions. Students will also learn about more advanced topics like
          object-oriented programming and file handling. The course includes
          hands-on exercises and projects to reinforce learning. Whether you're
          new to programming or looking to expand your skills, this course
          provides a solid foundation in Python programming.
        </p>
      </div>
      <div className="my-8">
        <div className=" border border-gray-200 p-6 rounded">
          <h1 className="text-xl poppins-semibold text-[#001D25] mb-5">
            What You'll <span className="text-[#FC4F4F]">Learn?</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {WLData.map((item) => (
              <div key={item.id} className=" flex items-start ">
                <Check size={20} color="#FC4F4F" className=" shrink-0" />
                <p className="text-md poppins-light ml-3">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCAbout;
