import { getAllBlogData } from "../../../data/Blogs";
import LatestBlogCard from "../../../libs/LatestBlogCard";

const LatestBlog = () => {
  const data = getAllBlogData();

  return (
    <div className=" shadow rounded-lg p-3 my-8">
      <h1 className="text-xl poppins-regular text-[#001D25] mb-5">Latest Post</h1>
      <div>
        {data.map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
