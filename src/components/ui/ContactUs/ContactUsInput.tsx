import { FormEvent } from "react";
import toast from "react-hot-toast";

const ContactUsInput = () => {
  const contactUsHandler = (e: FormEvent) => {
    e.preventDefault();
    toast.error("Input API is Cooking!", {
      icon: "😪",
      id: "contactUsId",
    });
  };

  return (
    <div>
      <div className="shadow p-5">
        <h1 className="text-2xl lg:text-3xl poppins-semibold text-[#001D25]">
          Get In Touch
        </h1>
        <p className="text-lg poppins-light text-[#001D25]">
          Fill out this form for booking a consultant advising session.
        </p>
        <div className="mt-3">
          <form onSubmit={contactUsHandler}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <input
                className="w-full h-[50px] border border-gray-200 pl-2 outline-none rounded-md poppins-light"
                type="text"
                name="name"
                placeholder="Your Name"
                id=""
              />
              <input
                className="w-full h-[50px] border border-gray-200 pl-2 outline-none rounded-md poppins-light mb-3"
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
              />
            </div>
            <input
              className="w-full h-[50px] border border-gray-200 pl-2 outline-none rounded-md poppins-light mb-3"
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
            <textarea
              className="w-full border border-gray-200 pl-2 outline-none rounded-md poppins-light resize-none"
              name="message"
              rows={7}
              placeholder="Your Message"
            ></textarea>
            <div className="flex items-end justify-end mt-2">
              <button
                className=" bg-[#FC4F4F] p-3 text-white text-lg poppins-light rounded-lg"
                type="submit"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInput;
