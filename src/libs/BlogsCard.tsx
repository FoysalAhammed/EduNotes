import { TBlog } from "../types/types";
import Styles from "../styles/BlogsCard.module.css";
import { CalendarDays, MessageCircle, MoveRight, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

interface IBlogPorps {
  blog: TBlog;
}

const BlogsCard: React.FC<IBlogPorps> = ({ blog }) => {
  return (
    <div className={`${Styles.blogContainer} relative rounded-lg`}>
      <div className="relative">
        <img
          className={`w-full h-[220px] object-cover relative ${Styles.blogImg}`}
          src={blog.image}
          alt=""
        />
      </div>
      <div className="p-5 bg-green-50 relative">
        <div className={`${Styles.blogsDate} flex items-center`}>
          <CalendarDays size={20} />
          <p className=" poppins-light ml-2">{blog.date}</p>
        </div>
        <div>
          <h1 className="text-xl poppins-medium text-[#001D25] mt-2">
            {blog.title}
          </h1>
          <p className="mt-2 text-md poppins-light">{`${blog.content.slice(
            0,
            100
          )}....`}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
                <div className="flex items-center">
                <ThumbsUp color="#FC4F4F" size={20} />
                <p className="text-lg poppins-light ml-1">{blog.likes}</p>
                </div>
                <div className="flex items-center ml-4">
                <MessageCircle color="#FC4F4F" size={20} />
                <p className="text-lg poppins-light ml-1">{blog.comments}</p>
                </div>
            </div>
            <div
              className={`${Styles.blogBtn} flex items-center py-3 w-[140px] justify-center rounded-md cursor-pointer `}
            >
              <Link
                className="text-md poppins-light text-white"
                to={`/blogs/${blog.id}`}
              >
                Learn More
              </Link>
              <MoveRight size={20} className=" text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
