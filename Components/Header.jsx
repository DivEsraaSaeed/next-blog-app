import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setEmail("");
    } else {
      toast.error("error");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium">
          Welcome to latest blogs Application
        </h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
          This is a brief description of what our application does. Join us to
          explore more!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] mx-auto scale-75 sm:scale-100 mt-10 border border-solid border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email here"
            className="pl-4 outline-none w-full"
          />
          <button
            type="submit"
            className="border-l border-solid border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
