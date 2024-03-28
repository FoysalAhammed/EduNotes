import RelatedBlogCard from "../../../libs/RelatedBlogCard";
import ImgOne from "../../../assets/images/courseImgOne.jpg";
import ImgTwo from "../../../assets/images/courseImgTwo.jpg";

export type TRelatedBlog = {
  id: string;
  title: string;
  image: string;
};

const relateadBlogData = [
  {
    id: "1",
    title: "The Importance of Necessity in Course Selection",
    image: ImgOne,
  },
  {
    id: "2",
    title: "The Role of Necessity in Course Selection",
    image: ImgTwo,
  },
];

const ReletedBlog = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {relateadBlogData.map((relatedBlog: TRelatedBlog) => (
          <RelatedBlogCard relatedBlog={relatedBlog} key={relatedBlog.id} />
        ))}
      </div>
    </div>
  );
};

export default ReletedBlog;
