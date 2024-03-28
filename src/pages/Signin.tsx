import { LogIn } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Signin = () => {
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
      <div className="flex items-center">
        <LogIn size={25} color="#001D25"/>
        <h1 className="text-2xl poppins-regular  text-[#001D25] ml-1">
          Sign in
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Don't have an account?{" "}
            <Link className="text-[#FC4F4F]" to="/sign-up">
              Sign up
            </Link>
          </p>
          <div className="flex items-end justify-end mt-3">
            <input
              className="bg-[#FC4F4F] text-white px-3 py-3 text-md poppins-light rounded-md cursor-pointer"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
