import Container from "../../utils/Container";
import Styles from "../../styles/CourseInfo.module.css"

const courseInfoData = [
  {
    id: "1",
    score: "30.2K",
    title: "Student Enrolled",
  },
  {
    id: "2",
    score: "29.2K",
    title: "Class Completed",
  },
  {
    id: "3",
    score: "120+",
    title: "Top Instructors",
  },
  {
    id: "4",
    score: "100%",
    title: "Satisfaction Rate",
  },
];

const textColor = [
  "text-pink-500",
  "text-green-500",
  "text-red-500",
  "text-purple-500",
];


const CourseInfo = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <Container>
        <div className={`${Styles.CIContainer} grid grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto  text-center rounded-lg`}>
          {courseInfoData.map((cid) => (
            <div key={cid.id} className="p-20 shadow relative">
              <h1
                className={`text-4xl poppins-extrabold ${
                  textColor[Number(cid.id) % textColor.length]
                }`}
              >
                {cid.score}
              </h1>
              <p className="text-xl poppins-regular">{cid.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CourseInfo;
