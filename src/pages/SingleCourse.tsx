import SCAbout from "../components/ui/SingleCourse/SCAbout";
import SCBInstructors from "../components/ui/SingleCourse/SCBInstructors";
import SCBanner from "../components/ui/SingleCourse/SCBanner";
import SCContent from "../components/ui/SingleCourse/SCContent";
import SCInfo from "../components/ui/SingleCourse/SCInfo";
import SCRequirements from "../components/ui/SingleCourse/SCRequirements";
import SCReviews from "../components/ui/SingleCourse/SCReviews";
import SCShare from "../components/ui/SingleCourse/SCShare";
import SCVideo from "../components/ui/SingleCourse/SCVideo";
import SCWhoThis from "../components/ui/SingleCourse/SCWhoThis";
import Container from "../utils/Container";

const SingleCourse = () => {
  return (
    <div>
      <SCBanner />
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-11 my-8">
            <div className="lg:col-span-8 ">
              <div className="w-full lg:w-10/12 ">
                <SCAbout />
                <SCRequirements />
                <SCWhoThis />
                <SCContent />
                <SCBInstructors />
                <SCReviews />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="w-full border p-3 rounded-md mt-8 lg:mt-0">
                <SCVideo />
                <SCInfo />
                <SCShare title="Share On" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleCourse;
