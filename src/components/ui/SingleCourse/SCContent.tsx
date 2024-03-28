import { Accordion } from "@mantine/core";
import { BookmarkCheck, FileLock2, Folder } from "lucide-react";

const courseContent = [
  {
    module: "Introduction to SEO",
    lessons: [
      "Understanding Search Engines",
      "Importance of SEO in Online Business",
      "SEO Fundamentals and Terminology",
    ],
  },
  {
    module: "Keyword Research",
    lessons: [
      "Types of Keywords and Their Importance",
      "Tools and Techniques for Keyword Research",
      "Analyzing and Selecting Target Keywords",
    ],
  },
  {
    module: "On-Page Optimization",
    lessons: [
      "Website Structure and Navigation Optimization",
      "Meta Tags and Title Optimization",
      "Content Optimization Strategies",
    ],
  },
  {
    module: "Off-Page Optimization",
    lessons: [
      "Building Quality Backlinks",
      "Social Media Signals and Their Impact on SEO",
      "Reputation Management and Off-Page Factors",
    ],
  },
  {
    module: "Content Strategy",
    lessons: [
      "Creating SEO-Friendly Content",
      "Content Optimization Techniques",
      "Content Marketing Strategies for SEO",
    ],
  },
  {
    module: "Analytics and Tracking",
    lessons: [
      "Introduction to Web Analytics",
      "Setting Up and Using Google Analytics",
      "Analyzing Data and Iterating SEO Strategies",
    ],
  },
];

const SCContent = () => {
  const items = courseContent.map((item) => (
    <Accordion.Item key={item.module} value={item.module}>
      <Accordion.Control icon={<Folder size={18} />}>
        <p className=" poppins-regular text-md">{item.module}</p>
      </Accordion.Control>
      <div>
        {item?.lessons?.map((i, index) => (
          <Accordion.Panel>
            <div className="flex items-center justify-between">
              <div key={index} className="flex items-center cursor-pointer">
                <BookmarkCheck size={18} color="#FC4F4F" />
                <p className=" poppins-light ml-2 hover:text-[#FC4F4F]">{i}</p>
              </div>
              <div>
                <FileLock2 size={18} color="#001D25" />
              </div>
            </div>
          </Accordion.Panel>
        ))}
      </div>
    </Accordion.Item>
  ));

  return (
    <div>
      <h1 className="text-2xl poppins-semibold text-[#001D25] mb-5">
        Course <span className="text-[#FC4F4F]">Content</span>
      </h1>
      <div className=" border border-gray-200 rounded-lg">
        <Accordion transitionDuration={500} >
          {items}
        </Accordion>
      </div>
    </div>
  );
};

export default SCContent;
