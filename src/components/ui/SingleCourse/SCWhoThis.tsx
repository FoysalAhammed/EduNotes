import { Check } from "lucide-react";

const SCWData = [
  "Individuals eager to kickstart a lucrative home-based business venture leveraging the power of SEO strategies.",
  "Freelancers seeking to expand their service offerings and enhance their income streams through SEO expertise.",
  "Owners of small businesses aiming to increase online visibility, attract more customers, and boost revenue.",
  " Marketers interested in adding SEO skills to their toolkit to achieve better results for clients or employers.",
  "Professionals seeking a new career path with the flexibility and potential for growth offered by SEO entrepreneurship.",
  "Remote workers or travelers looking to establish a portable and sustainable source of income through SEO entrepreneurship.",
];

const SCWhoThis = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl poppins-semibold text-[#001D25] mb-5">
        Who This <span className="text-[#FC4F4F]">Course is for?</span>
      </h1>
      <div>
        {SCWData.map((item, index) => (
          <div className="flex mb-2" key={index}>
            <Check size={20} color="#FC4F4F" className=" shrink-0" />
            <p className=" text-md poppins-regular ml-2">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SCWhoThis;
