import { Link } from "react-router-dom";
import { getAllBlogData } from "../../data/Blogs";
import BlogsCard from "../../libs/BlogsCard";
import Styles from "../../styles/CallOut.module.css";
import { TBlog } from "../../types/types";
import Container from "../../utils/Container";
import { MoveRight } from "lucide-react";

const Blogs = () => {
  const blogs = getAllBlogData();

  return (
    <div className="mt-16 lg:mt-24">
      <div className={`${Styles.COBanner} py-12`}>
        <Container>
          <div className="text-center mb-10">
            <h1 className="text-xl poppins-regular text-[#fc4f4f]">
              Latest Articles
            </h1>
            <p className="text-4xl poppins-semibold text-[#001D25]">
              Get News with <span className="text-[#fc4f4f]">EduNotes</span>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {blogs.slice(0, 3).map((blog: TBlog) => (
              <BlogsCard blog={blog} key={blog.id} />
            ))}
          </div>
          <div className=" flex items-center justify-center mt-10">
            <div className="bg-[#001D25] flex items-center p-3 rounded-md">
              <Link className="text-lg poppins-regular text-white" to="/blogs">
                Explore More Blogs
              </Link>
              <MoveRight size={20} className="text-white ml-2" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
