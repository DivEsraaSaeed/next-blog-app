import { assets } from "@/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Link from "next/link";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch topic");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }) {
  const { id } = await params;
  const data = await getBlogById(id);

  return data.blog ? (
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
            {data.blog.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-b-full"
            src={data.blog.authorImg || "/blog_pic_1.png"}
            width={60}
            height={60}
            alt=""
          />
          <p className="font-semibold mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.blog.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.blog.image}
          width={1280}
          height={720}
          alt={data.blog.title}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.blog.description }}
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
  ) : (
    <div className="text-2xl">Not Found</div>
  );
}
