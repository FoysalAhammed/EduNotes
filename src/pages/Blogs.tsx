import BlogsPagination from "../components/ui/Blogs/BlogsPagination";
import BlogsTagList from "../components/ui/Blogs/BlogsTagList";
import BlogCategories from "../components/ui/SingleBlog/BlogCategories";
import BlogSearchInput from "../components/ui/SingleBlog/BlogSearchInput";
import LatestBlog from "../components/ui/SingleBlog/LatestBlog";
import { getAllBlogData } from "../data/Blogs";
import BlogsCard from "../libs/BlogsCard";
import Container from "../utils/Container";

const Blogs = () => {
  const blogs = getAllBlogData();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-11 my-12">
          <div className="lg:col-span-8 lg:mr-5 mr-0">
            <div className="w-full lg:w-12/12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {blogs.map((blog) => (
                  <BlogsCard blog={blog} key={blog.id} />
                ))}
              </div>
              <div className="my-12">
                <BlogsPagination />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3  relative">
            <div className=" sticky top-5">
              <div className="w-full mt-8 lg:mt-0">
                <BlogSearchInput />
                <LatestBlog />
                <BlogCategories />
                <BlogsTagList />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
