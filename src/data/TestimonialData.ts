import imgOne from "../assets/images/instructorImg.jpg";
import imgTwo from "../assets/images/BImgOne.jpg";
import imgThree from "../assets/images/BImgTwo.jpg";
import imgFour from "../assets/images/courseImgOne.jpg";
import imgFive from "../assets/images/courseImgTwo.jpg";
import imgSix from "../assets/images/courseImgThree.jpg";
import imgSeven from "../assets/images/courseImgFour.jpg";
import imgEight from "../assets/images/courseImgFive.jpg";
import imgNine from "../assets/images/courseImgSix.jpg";

const testimonialsData = [
  {
    id: "1",
    name: "Md Foysal Ahammed",
    review:
      "I absolutely loved this course! It provided me with a comprehensive understanding of the subject matter and the hands-on projects were extremely helpful.",
    occupation: "Software Engineer",
    image: imgOne,
  },
  {
    id: "2",
    name: "Michael Chen",
    review:
      "This course exceeded my expectations. The instructor's explanations were clear and concise, and I feel much more confident in applying the concepts learned.",
    occupation: "Data Analyst",
    image: imgTwo,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    review:
      "Highly recommend this course! The content was well-organized and the exercises really helped reinforce my understanding. Great value for the price.",
    occupation: "Student",
    image: imgThree,
  },
  {
    id: "4",
    name: "David Patel",
    review:
      "As someone new to the field, this course was perfect for me. The instructor explained complex topics in a way that was easy to grasp, and I feel much more prepared now.",
    occupation: "IT Technician",
    image: imgFour,
  },
  {
    id: "5",
    name: "Jennifer Lee",
    review:
      "I've taken several courses on this topic before, but none have been as engaging and informative as this one. The real-world examples really brought the concepts to life.",
    occupation: "Business Analyst",
    image: imgFive,
  },
  {
    id: "6",
    name: "Alexandre Dubois",
    review:
      "This course was exactly what I needed to advance my career. The instructor's expertise and the depth of the material were impressive.",
    occupation: "Software Developer",
    image: imgSix,
  },
  {
    id: "7",
    name: "Sophia Nguyen",
    review:
      "The course content was excellent and the pacing was just right. I appreciated the focus on practical applications rather than just theory.",
    occupation: "Project Manager",
    image: imgSeven,
  },
  {
    id: "8",
    name: "Daniel Smith",
    review:
      "This course helped me fill in the gaps in my knowledge and provided me with valuable skills that I can immediately apply in my job.",
    occupation: "Data Scientist",
    image: imgEight,
  },
  {
    id: "9",
    name: "Isabella Martinez",
    review:
      "I'm impressed by the quality of instruction in this course. The instructor was engaging and knowledgeable, and the course materials were top-notch.",
    occupation: "Researcher",
    image: imgNine,
  },
];

const getAllTestimonial = () => {
  return testimonialsData;
};

export default getAllTestimonial;
