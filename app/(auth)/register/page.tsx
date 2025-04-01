import Image from "next/image";
import Link from "next/link";

import loginimage from "../../assets/login.png";
import SignUpForm from "@/app/component/forms/SignupForm";

const SignUpPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center gap-8">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 lg:w-1/2 flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="" width={40} height={40} />
            <h1 className="font-semibold text-4xl ">Horizon</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl ">Sign Up</h1>
            <span className="text-gray-600 text-lg">
              Please enter your details.{" "}
            </span>
          </div>
          <SignUpForm />
          <p className="text-black text-lg text-center font-semibold">
            Dont have an account?{" "}
            <Link href={"/login"} className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full hidden lg:flex  bg-gray-100 items-center justify-end">
        <div className=" w-[80%] h-[80%] rounded-lg border-4 border-black overflow-hidden">
          <Image
            src={loginimage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
