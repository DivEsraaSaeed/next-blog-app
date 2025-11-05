import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ authorImg, title ,author ,date ,mongoId,deleteBlog}) => {
  const blogdate = new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">
        {title ? title : "no title"}
        {blogdate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer">x</td>
    </tr>
  );
};

export default BlogTableItem;
