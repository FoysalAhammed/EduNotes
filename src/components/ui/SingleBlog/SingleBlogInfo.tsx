import { CalendarDays, MessagesSquare, ThumbsUp, User } from "lucide-react";
import ImgOne from "../../../assets/images/courseImgOne.jpg";
import SCShare from "../SingleCourse/SCShare";
const singleData = {
  id: "1",
  title: "The Importance of Necessity in Course Selection",
  author: "Md Foysal Ahammed",
  date: "2024-03-11",
  content: [
    "In the grand tapestry of academia, the selection of courses can often feel like navigating a labyrinth of options. Each course presents itself as a gateway to knowledge, a path towards intellectual growth and career development. However, amidst this sea of choices, one guiding principle stands tall: necessity. The importance of necessity in course selection cannot be overstated, for it serves as the compass guiding students through the maze of academic offerings, ensuring they stay aligned with their goals, aspirations, and the demands of the world they are preparing to enter.",

    "First and foremost, necessity acts as a filter, helping students sift through the myriad of options to focus on those that are most relevant to their academic pursuits and future career paths. In an era where time is a precious commodity, and the academic workload can be overwhelming, it is essential to prioritize courses that directly contribute to one's goals. For example, a student majoring in computer science may find it necessary to prioritize programming courses over art history electives, as they align more closely with their career aspirations in software development.",

    "Moreover, necessity fosters a sense of purpose and motivation in students' academic journeys. When students enroll in courses that they deem necessary, whether due to their relevance to their major, personal interests, or career aspirations, they are more likely to be engaged and invested in their learning. This intrinsic motivation can drive students to excel academically, pushing themselves beyond their comfort zones and embracing challenges with enthusiasm.",

    "Furthermore, necessity serves as a bridge between academia and the real world, ensuring that students acquire the skills and knowledge needed to navigate the challenges of their chosen fields. In today's rapidly evolving job market, employers value practical skills and expertise over theoretical knowledge alone. By selecting courses that address current industry trends, emerging technologies, and professional standards, students can better position themselves for success upon graduation.",

    "In conclusion, the importance of necessity in course selection cannot be overstated. It serves as a guiding principle, helping students navigate the vast landscape of academic offerings with purpose and intentionality. By prioritizing courses that align with their goals, interests, and the demands of the world around them, students can maximize their academic potential, cultivate their passions, and make meaningful contributions to society. In the journey of education, necessity is not merely a choice but a compass, pointing the way towards a brighter and more fulfilling future.",
  ],
  tags: ["education", "course selection", "career development"],
  likes: 102,
  comments: 15,
  image: ImgOne,
};

const SingleBlogInfo = () => {
  return (
    <div>
      <div className="flex items-center">
        <User size={20} color="#001D25" />
        <h1 className="text-lg poppins-regular ml-1">{singleData.author}</h1>
      </div>
      <div className="my-2">
        <h1 className="text-3xl poppins-semibold text-[#FC4F4F]">
          {singleData.title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <CalendarDays size={20} color="#FC4F4F" />
          <p className="text-md poppins-regular ml-1">{singleData.date}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <MessagesSquare size={20} color="#FC4F4F" />
            <p className="text-md poppins-regular ml-1">
              {singleData.comments}
            </p>
          </div>
          <div className="flex items-center ml-5 cursor-pointer">
            <ThumbsUp size={20} color="#FC4F4F" />
            <p className="text-md poppins-regular ml-1">{singleData.likes}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img
          className=" w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-lg object-cover"
          src={singleData.image}
          alt=""
        />
      </div>
      <div className="mt-5">
        {singleData.content.map((item, index) => (
          <p key={index} className="text-md poppins-light text-justify mb-5">
            {item}
          </p>
        ))}
      </div>
      <div className=" bg-green-50 p-6 border-l-8 border-[#FC4F4F] rounded-lg mt-10">
        <h1 className="text-lg poppins-medium">
          Education is not the filling of a pail, but the lighting of a fire."
        </h1>
        <p className="text-md poppins-light">William Butler Yeats</p>
      </div>
      <div className="mt-12 flex flex-col items-start justify-start">
        <div className="flex items-center flex-wrap">
          <h1 className="text-xl poppins-medium mr-2">Tags:</h1>
          {singleData.tags.map((tag, index) => (
            <p
              className=" bg-[#001D25] mr-1 p-2 text-md poppins-light text-white rounded-md cursor-pointer hover:bg-[#FC4F4F] mt-2 lg:mt-0"
              key={index}
            >{`${tag}`}</p>
          ))}
        </div>
        <div>
          <SCShare title="Share On" />
        </div>
      </div>
      <hr className="my-10 border-gray-200" />
     
    </div>
  );
};

export default SingleBlogInfo;
