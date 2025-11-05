"use client";
import React, { useEffect, useState, use } from "react";
import { blog_data, assets } from "@/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Link from "next/link";
import axios from "axios";

// const getTicketById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const unwrappedParams = use(params);

  const fetchBlogData = async () => {
    // for (let i = 0; i < blog_data.length; i++) {
    //   if (Number(unwrappedParams.id) === blog_data[i].id) {
    //     setData(blog_data[i]);
    //     console.log(blog_data[i]);
    //     break;
    //   }
    // }

    const response = await axios.get("/api/blog", {
      params: {
        id: Params.id,
      },
    });
    setData(response.data.blog);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
};
return (
  data && (
    <>
      <div className="bg-gray-300 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-b-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt=""
          />
          <p className="font-semibold mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt={data.title}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image
              src={assets.facebook_icon}
              width={50}
              height={50}
              alt="Facebook"
            />
            <Image
              src={assets.twitter_icon}
              width={50}
              height={50}
              alt="Twitter"
            />
            <Image
              src={assets.googleplus_icon}
              width={50}
              height={50}
              alt="Google Plus"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
);

export default Page;
