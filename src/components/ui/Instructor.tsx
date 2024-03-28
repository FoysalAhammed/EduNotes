import Container from "../../utils/Container";
import imgOne from "../../assets/images/instructorImg.jpg";
import imgTwo from "../../assets/images/BImgOne.jpg";
import imgThree from "../../assets/images/Team.png";
import imgFour from "../../assets/images/courseImgOne.jpg";
import InstructorCard from "../../libs/InstructorCard";
import { TInstructor } from "../../types/types";

const instructorData = [
  {
    id: "1",
    instructorName: "Md Foysal Ahammed",
    designation: "Web Developer",
    image: imgOne,
  },
  {
    id: "2",
    instructorName: "Dr. Emily Johnson",
    designation: "UI Designer",
    image: imgTwo,
  },
  {
    id: "3",
    instructorName: "Sarah Johnson",
    designation: "Digital Marketer",
    image: imgThree,
  },
  {
    id: "4",
    instructorName: "David Wilson",
    designation: "Designer",
    image: imgFour,
  },
];

const Instructor = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <div className="bg-green-50 py-8">
        <Container>
          <div className="text-center mb-10">
            <h1 className="text-xl poppins-regular text-[#fc4f4f]">
              Instructors
            </h1>
            <p className="text-4xl poppins-semibold text-[#001D25]">
              Course <span className=" text-[#FC4F4F]">Instructors</span>
            </p>
          </div>
          <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {instructorData.map((instructor: TInstructor) => (
              <InstructorCard instructor={instructor} key={instructor.id} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Instructor;
