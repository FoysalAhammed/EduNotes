import userImg from "../../../assets/images/instructorImg.jpg";
import SCShare from "../SingleCourse/SCShare";

const SingleBlogUser = () => {
  return (
    <div>
      <div className="shadow flex items-center flex-col lg:flex-row p-5">
        <div className=" shrink-0">
          <img className="w-[120px] h-[120px] border rounded-full" src={userImg} alt="" />
        </div>
        <div className="flex flex-col ml-5 mt-5 lg:mt-0">
          <h1 className="text-2xl poppins-bold text-[#001D25]">Md Foysal Ahammed</h1>
          <p className="text-md poppins-light">
            Experienced in the MERN (MongoDB, Express.js, React.js, Node.js)
            stack for over two years, I've honed my skills in developing dynamic
            and scalable web applications. With a robust portfolio spanning 100+
            websites across diverse industries, I offer a wealth of practical
            experience in both online and offline project development.
          </p>
          <div>
            <SCShare title="Follow Me:" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogUser;
