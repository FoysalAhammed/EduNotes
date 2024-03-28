import { LogIn } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" max-w-lg mx-5 lg:mx-auto shadow-2xl my-8 p-5 rounded-lg">
      <div className="flex items-center mb-3">
        <LogIn size={25} color="#001D25" />
        <h1 className="text-2xl poppins-regular  text-[#001D25] ml-1">
          Registration
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-md poppins-light" htmlFor="name">
              Name
            </label>
            <input
              className=" w-full h-[50px] border border-gray-200 outline-none pl-3 text-md poppins-light text-[#001D25] rounded-md"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="my-3">
            <label className="text-md poppins-light" htmlFor="email">
              Email
            </label>
            <input
              className=" w-full h-[50px] border border-gray-200 outline-none pl-3 text-md poppins-light text-[#001D25] rounded-md"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label className="text-md poppins-light" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className=" w-full h-[50px] border border-gray-200 outline-none pl-3 text-md poppins-light text-[#001D25] rounded-md"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <p className="mt-2 text-md poppins-light">
            Already have an account?{" "}
            <Link className="text-[#FC4F4F]" to="/sign-in">
              Sign in
            </Link>
          </p>
          <div className="flex items-end justify-end mt-3">
            <input
              className="bg-[#FC4F4F] text-white px-3 py-3 text-md poppins-light rounded-md cursor-pointer"
              type="submit"
              value="Create Account"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
