import { TComment, TReply } from "../types/types";
import moment from "moment";
import BlogsReplyCard from "./BlogsReplyCard";
import { MessageCircle, ThumbsUp } from "lucide-react";
import { useState } from "react";

type TCommentProps = {
  comment: TComment;
};

const BlogsCommentCard: React.FC<TCommentProps> = ({ comment }) => {
  const formattedTimestamp = moment(comment.timestamp).format(
    "D MMMM YYYY, h:m:ss a"
  );

  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <div className="border border-gray-100 p-3 mb-4 rounded-lg">
      <div className="flex items-start">
        <img
          className="w-[50px] h-[50px] rounded-full border-1 border-gray-200 object-cover"
          src={comment.author.avatar}
          alt=""
        />
        <div>
          <div>
            <div className="ml-2">
              <h1 className="text-lg poppins-medium text-[#001D25]">
                {comment.author.name}
              </h1>
              <p className="text-[14px] poppins-light text-[#474747]">
                {formattedTimestamp}
              </p>
            </div>
            <div>
              <p className="mt-2 text-md poppins-regular">{comment.content}</p>
            </div>
            <div className="flex items-start justify-start mt-2">
              <div className="flex items-center cursor-pointer select-none">
                <ThumbsUp size={18} color="#363636" />
                <p className="text-md poppins-light ml-1">{comment.likes}</p>
              </div>
              <div
                className="flex items-center ml-3 cursor-pointer select-none"
                onClick={toggleButton}
              >
                <MessageCircle size={18} color="#363636" />
                <p className="text-md poppins-light ml-1">{`${
                  comment?.replies?.length ? comment?.replies?.length : "0"
                }`}</p>
              </div>
            </div>
          </div>
          <div className=" mt-3">
            <div>
              {open && (
                <div>
                  {comment?.replies?.map((reply: TReply) => (
                    <BlogsReplyCard reply={reply} key={reply.replyId} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCommentCard;
