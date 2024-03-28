import AvatarImgOne from "../../../assets/images/instructorImg.jpg";
import AvatarImgTwo from "../../../assets/images/courseImgThree.jpg";
import AvatarImgThree from "../../../assets/images/courseImgOne.jpg";
import AvatarImgFour from "../../../assets/images/cybersecurity.jpg";
import SCReviewCard from "./SCReviewCard";
import { useState } from "react";
import SCRModal from "./SCRModal";

const courseComment = [
  {
    id: "1",
    name: "Grace Park",
    review:
      "Starting SEO as your Home Based Business truly demystifies the SEO world, guiding aspiring entrepreneurs step-by-step. It's a must for anyone aiming to harness the power of SEO for their home-based venture. Highly recommended and immensely valuable!",
    rating: 4.8,
    image: AvatarImgOne,
    time: "4 weeks",
  },
  {
    id: "2",
    name: "Ethan Reed",
    review:
      "This course is a goldmine for home-based business owners diving into the SEO realm. The insights and strategies offered are practical, empowering, and tailored for success in today's competitive digital landscape. I'm grateful for the invaluable knowledge gained!",
    rating: 4.5,
    image: AvatarImgTwo,
    time: "6 weeks",
  },
  {
    id: "3",
    name: "Olivia Lake",
    review:
      "I can't recommend Starting SEO as your Home Based Business enough! It's like having a personal SEO mentor guiding you towards business success from the comfort of your home. The content is rich, relevant, and incredibly valuable.",
    rating: 4,
    image: AvatarImgThree,
    time: "3 weeks",
  },
  {
    id: "4",
    name: "Luke Stone",
    review:
      "Enrolling in Starting SEO as your Home Based Business was the best decision I made for my entrepreneurial journey. The course is comprehensive, engaging, and tailored for those ready to thrive in the SEO-driven business world.",
    rating: 4.5,
    image: AvatarImgFour,
    time: "3 weeks",
  },
];

export type TComment = {
  id: string;
  name: string;
  review: string;
  rating: number;
  image: string;
  time: string;
};

const SCReviews = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl poppins-semibold text-[#001D25] mb-2">
          Course <span className="text-[#FC4F4F]">Reviews.</span>
        </h1>
        <button
          onClick={() => setOpened(true)}
          className="text-md poppins-regular bg-[#001D25] text-white p-3  rounded-md"
        >
          Share Thoughts
        </button>
      </div>
      <hr className=" border-gray-200 mt-2" />
      <div>
        {courseComment.map((comment: TComment) => (
          <SCReviewCard comment={comment} key={comment.id} />
        ))}
      </div>
      <SCRModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default SCReviews;
