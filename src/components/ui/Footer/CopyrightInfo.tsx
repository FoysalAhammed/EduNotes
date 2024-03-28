
import { Link } from "react-router-dom";

const CopyrightInfo = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center mt-20 text-white">
        <p className="text-md poppins-light ml-2 text-center">
          Copyright {year} <Link className="text-[#FC4F4F] poppins-regular" to="/">EduNotes</Link> Designed By{" "}
          <a className="text-[#FC4F4F] poppins-regular" target="_blank" href="https://www.linkedin.com/in/foysal-ahammed-235ba6203/">
            Md Foysal Ahammed
          </a>
          . All Rights Reserved
        </p>
  
    </div>
  );
};

export default CopyrightInfo;
