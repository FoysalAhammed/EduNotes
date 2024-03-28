import ImgOne from "../assets/images/courseImgOne.jpg";
import ImgTwo from "../assets/images/courseImgTwo.jpg";
import ImgThree from "../assets/images/courseImgThree.jpg";
import ImgFour from "../assets/images/courseImgFour.jpg";
import ImgFive from "../assets/images/courseImgFive.jpg";
import ImgSix from "../assets/images/courseImgSix.jpg";
import ImgSeven from "../assets/images/courseImgSeven.jpg";
import ImgEight from "../assets/images/courseImgEight.jpg";

const blogData = [
  {
    id: "1",
    title: "The Importance of Necessity in Course Selection",
    author: "John Doe",
    date: "2024-03-11",
    content:
      "In today's fast-paced world, selecting the right courses has become a necessity rather than a luxury. With rapidly evolving industries and job markets, individuals need to carefully consider their educational choices to stay competitive. This blog explores the significance of necessity in course selection and offers insights into making informed decisions.",
    tags: ["education", "course selection", "career development"],
    likes: 102,
    comments: 15,
    image: ImgOne,
  },
  {
    id: "2",
    title:
      "The Role of Necessity in Course Selection",
    author: "Jane Smith",
    date: "2024-03-10",
    content:
      "Industries are constantly evolving, driven by technological advancements and changing consumer demands. To thrive in such dynamic environments, individuals must embrace the necessity of updating their skill sets through relevant courses. This blog delves into the importance of necessity in course selection and provides strategies for staying ahead in rapidly changing industries.",
    tags: ["career", "skill development", "industry trends"],
    likes: 85,
    comments: 12,
    image: ImgTwo,
  },
  {
    id: "3",
    title: "A Necessity for Career Advancement",
    author: "Emily Johnson",
    date: "2024-03-09",
    content:
      "Career advancement often hinges on acquiring the right skills and knowledge. Recognizing the necessity of selecting appropriate courses is key to unlocking new opportunities and achieving professional growth. This blog discusses the essential role of necessity in course selection and offers practical advice for individuals seeking to advance their careers.",
    tags: ["professional development", "career growth", "skill acquisition"],
    likes: 93,
    comments: 18,
    image: ImgThree,
  },
  {
    id: "4",
    title: "Understanding the Necessity Factor",
    author: "Michael Brown",
    date: "2024-03-08",
    content:
      "With a myriad of educational options available, individuals often find themselves overwhelmed when it comes to selecting courses. However, by understanding the necessity factor and aligning educational choices with personal and professional goals, individuals can make more informed decisions. This blog explores the importance of necessity in course selection and provides guidance on navigating the educational landscape.",
    tags: ["education", "personal development", "goal setting"],
    likes: 76,
    comments: 10,
    image: ImgFour,
  },
  {
    id: "5",
    title: "Embracing Necessity in Course Selection",
    author: "Sophia Lee",
    date: "2024-03-07",
    content:
      "As we move towards an increasingly digital and knowledge-driven economy, the importance of selecting courses based on necessity becomes evident. Individuals must adapt to emerging trends and technologies to remain relevant in their fields. This blog examines the future of learning and emphasizes the crucial role of necessity in course selection for staying competitive in the job market.",
    tags: ["learning", "digital economy", "technological advancement"],
    likes: 64,
    comments: 8,
    image: ImgFive,
  },
  {
    id: "6",
    title: "Leveraging Necessity in Course Selection",
    author: "David Clark",
    date: "2024-03-06",
    content:
      "In today's knowledge-based society, the ability to identify and pursue necessary courses can open doors to new opportunities. Whether it's acquiring in-demand skills or gaining expertise in a specific domain, necessity-driven course selection is essential for personal and professional growth. This blog highlights the significance of leveraging necessity in course selection to unlock opportunities and achieve success.",
    tags: ["opportunity", "personal growth", "success"],
    likes: 79,
    comments: 14,
    image: ImgSix,
  },
  {
    id: "7",
    title: "The Relevance of Necessity in Course Selection",
    author: "Jessica White",
    date: "2024-03-05",
    content:
      "In a rapidly changing world, staying relevant is imperative for career success. One way to ensure relevance is by selecting courses that address current industry needs and future trends. This blog explores the concept of necessity in course selection and its role in helping individuals stay relevant and competitive in their respective fields.",
    tags: ["relevance", "career success", "industry trends"],
    likes: 88,
    comments: 11,
    image: ImgSeven,
  },
  {
    id: "8",
    title:
      "The Importance of Necessity in Course Selection",
    author: "Matthew Taylor",
    date: "2024-03-04",
    content:
      "Making informed decisions about course selection is crucial for achieving educational and career goals. By recognizing the necessity of certain courses and their relevance to personal aspirations, individuals can chart a path towards success. This blog sheds light on the significance of necessity in course selection and provides practical tips for making informed choices.",
    tags: ["informed decisions", "education", "career planning"],
    likes: 71,
    comments: 9,
    image: ImgEight,
  },
];

export const getAllBlogData = () => {
  return blogData;
};
