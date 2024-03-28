import { Search } from "lucide-react";
import Styles from "../../../styles/BlogSearchInput.module.css"

const BlogSearchInput = () => {
  return (
    <div className="shadow rounded-lg p-3">
      <h1 className="text-xl poppins-regular text-[#001D25]">Search</h1>
      <div className="relative">
        <input className=" border w-full h-[50px] border-gray-200 my-3 outline-none rounded-md pl-10 poppins-light" type="text" placeholder="Search" />
        <div className={Styles.BSIIcon}>
          <Search size={20} color="#001D25" />
        </div>
      </div>
    </div>
  );
};

export default BlogSearchInput;
