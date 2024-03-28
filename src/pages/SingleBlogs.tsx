import BlogCategories from "../components/ui/SingleBlog/BlogCategories";
import BlogComment from "../components/ui/SingleBlog/BlogComment";
import BlogCommentForm from "../components/ui/SingleBlog/BlogCommentForm";
import BlogSearchInput from "../components/ui/SingleBlog/BlogSearchInput";
import LatestBlog from "../components/ui/SingleBlog/LatestBlog";
import ReletedBlog from "../components/ui/SingleBlog/ReletedBlog";
import SingleBlogInfo from "../components/ui/SingleBlog/SingleBlogInfo";
import SingleBlogUser from "../components/ui/SingleBlog/SingleBlogUser";
import Container from "../utils/Container";

const SingleBlogs = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-11 my-12">
          <div className="lg:col-span-8">
            <div className="w-full lg:w-10/12 ">
              <SingleBlogInfo />
              <SingleBlogUser />
              <ReletedBlog />
              <BlogComment />
              <BlogCommentForm />
            </div>
          </div>
          <div className="lg:col-span-3  relative">
            <div className=" sticky top-5">
              <div className="w-full mt-8 lg:mt-0">
                <BlogSearchInput />
                <LatestBlog />
                <BlogCategories />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlogs;
