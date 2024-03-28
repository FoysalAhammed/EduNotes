import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const FooterInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmuit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks For Subscribe", { id: "subscribeId" });
    setEmail("");
  };

  return (
    <div>
      <h1 className="text-xl poppins-semibold">Subscribe</h1>
      <div className="mt-3">
        <p className="text-md poppins-extralight">
          Enter your email address to register to our newsletter subscription
        </p>
        <div className="mt-5 relative">
          <form onSubmit={handleSubmuit}>
            <input
              className="w-full h-[50px] outline-none text-md poppins-light pl-2 text-[#001D25] relative"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
            />
            <div className=" absolute top-0 right-0 bg-[#FC4F4F]  w-[60px] h-full flex items-center justify-center cursor-pointer">
              <button type="submit">
                {" "}
                <Send size={20} color="#fff" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterInput;
