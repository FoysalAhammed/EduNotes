import { getAllComment } from "../../../data/Comment";
import BlogsCommentCard from "../../../libs/BlogsCommentCard";
import { TComment } from "../../../types/types";

const BlogComment = () => {
  const comments = getAllComment();

  return (
    <div className="mt-12">
        <h1 className="text-2xl poppins-semibold">Comments</h1>
        <hr className="border-1 border-gray-200 mb-5" />
      <div >
        {comments.map((comment: TComment) => (
          <BlogsCommentCard comment={comment} key={comment.commentId} />
        ))}
      </div>
    </div>
  );
};

export default BlogComment;
