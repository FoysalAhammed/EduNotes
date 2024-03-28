import { FormEvent } from "react";
import toast from "react-hot-toast";

const BlogCommentForm = () => {
  const handleComment = (e: FormEvent) => {
    e.preventDefault();
    toast.error("Comment API is Cooking!", {
      icon: "😀",
      id: "commentId",
    });
  };

  return (
    <div>
      <hr className="border-1 border-gray-100 my-8" />
      <h1 className="text-2xl poppins-semibold">Leave Your Comment Here</h1>
      <form onSubmit={handleComment}>
        <textarea
          className="border w-full border-gray-200 rounded-lg mt-3 p-2 text-md poppins-light text-[#001D25] outline-none resize-none"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Leave a Comment"
        ></textarea>
        <div className="flex items-end justify-end">
          <input
            className="bg-[#001D25] text-md poppins-light text-white p-3 rounded-md cursor-pointer"
            type="submit"
            value="Send Comment"
          />
        </div>
      </form>
    </div>
  );
};

export default BlogCommentForm;
