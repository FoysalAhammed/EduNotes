
import { TReply } from "../types/types";
import moment from "moment";

type TReplyProps = {
  reply: TReply;
};

const BlogsReplyCard: React.FC<TReplyProps> = ({ reply }) => {

    const formattedTimestamp = moment(reply.timestamp).format(
        "D MMMM YYYY, h:m:ss a"
      );

  return (
    <div className="flex items-start my-5">
      <img
        className="w-[50px] h-[50px] rounded-full border-1 border-gray-200 object-cover"
        src={reply.author.avatar}
        alt=""
      />
      <div>
        <div>
          <div className="ml-2">
            <h1 className="text-lg poppins-medium text-[#001D25]">
              {reply.author.name}
            </h1>
            <p className="text-[14px] poppins-light text-[#474747]">
              {formattedTimestamp}
            </p>
          </div>
          <div>
            <p className="mt-2 text-md poppins-regular">{reply.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsReplyCard;
