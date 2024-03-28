import React from "react";
import { TBlog } from "../types/types";
import { CalendarDays } from "lucide-react";

type TLatestBlogProps = {
  blog: TBlog;
};

const LatestBlogCard: React.FC<TLatestBlogProps> = ({ blog }) => {
  return (
    <div>
      <div className="flex border border-gray-100 rounded-lg mb-3 p-1 cursor-pointer hover:shadow-lg">
        <div className=" shrink-0">
          <img
            className="w-[80px] h-[60px] object-cover rounded"
            src={blog.image}
            alt=""
          />
        </div>
        <div className="ml-1">
          <h1 className="text-[15px] poppins-light">{blog.title}</h1>
          <div className="flex items-center">
            <CalendarDays size={15} />
            <p className="text-[14px] poppins-light ml-1">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
