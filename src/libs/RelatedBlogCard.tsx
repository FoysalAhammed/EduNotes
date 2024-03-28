import { TRelatedBlog } from "../components/ui/SingleBlog/ReletedBlog";

type TRelatedBlogProps = {
  relatedBlog: TRelatedBlog;
};

const RelatedBlogCard: React.FC<TRelatedBlogProps> = ({ relatedBlog }) => {
  return (
    <div className="flex items-start border border-gray-200 rounded-md p-2 cursor-pointer hover:shadow-xl">
      <img className="w-[100px] h-[80px] object-cover rounded-md" src={relatedBlog.image} alt="" />
      <p className="text-md poppins-semibold ml-2">{relatedBlog.title}</p>
    </div>
  );
};

export default RelatedBlogCard;
