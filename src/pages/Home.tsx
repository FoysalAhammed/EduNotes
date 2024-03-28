import AboutUs from "../components/ui/AboutUs";
import Banner from "../components/ui/Banner";
import Blogs from "../components/ui/Blogs";
import CallOut from "../components/ui/CallOut";
import Categories from "../components/ui/Categories";
import Course from "../components/ui/Course";
import CourseInfo from "../components/ui/CourseInfo";
import Instructor from "../components/ui/Instructor";
import OurPatners from "../components/ui/OurPatners";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AboutUs />
      <Course />
      <Testimonial />
      <Instructor />
      <OurPatners />
      <CallOut />
      <CourseInfo />
      <Blogs />
    </div>
  );
};

export default Home;
