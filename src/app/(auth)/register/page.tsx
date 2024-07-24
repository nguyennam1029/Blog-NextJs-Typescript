import Image from "next/image";
import layoutAuth from "../../layout";
import RegisterForm from "./register-form";

export default function page() {
  return (
    <div className=" max-h-calc-screen-minus-menu h-banner relative overflow-hidden z-10">
      <div className="relative z-10 h-full my-auto flex items-center justify-center">
        <div className="w-[600px] p-6 rounded-lg shadow-lg ">
          <h1 className="text-lg font-medium text-center">Sign Up</h1>
          <div>
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
}
