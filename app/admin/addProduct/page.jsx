"use client";
import { useState } from "react";
import { assets } from "@/Assets/assets";
// import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Image from "next/image";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Page() {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    title: "test title",
    description: "test description",
    category: "Startup",
    author: "Esraa",
    authorImg: "/author_img.png",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);

    // const res=await fetch("/api/blog",{
    //   method:"POST",
    //   body:formData
    // });
    // const data=await res.json();

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      // alert(response.data.message);
      toast.success(response.data.message);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Esraa",
        authorImg: "/author_img.png",
      });
    } else {
      // alert(response.data.message);
      toast.error("something went wrong error");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="py-5 px-5 sm:py-12 sm:pl-16">
      <p className="text-xl">upload image</p>
      <label htmlFor="image">
        <Image
          className="mt-4"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt=""
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        className="hidden required:"
      />
      <p className="text-xl mt-4">Blog tittle</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        type="text"
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        placeholder="Type Blog here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        type="text"
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        placeholder="Type content here"
        rows={6}
        required
      />

      <p className="text-xl mt-4">Blog category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Starup">Starup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type="submit" className="text-white mt-8 w-40 h-12 bg-black ">
        Add Blog
      </button>
    </form>
  );
}
