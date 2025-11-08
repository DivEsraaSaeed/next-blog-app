"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };
  const deleteBlog = async (mongoId) => {
    console.log('mongoId: ', mongoId);
    const response = await axios.delete("/api/blog", {
      params: { id: mongoId },
    });
    toast.success(response.data.message);
    fetchBlogs();
  };

  useEffect(() => {
    axios.get("/api/blog").then((response) => {
      setBlogs(response.data.blogs);
      console.log("response.data.blogs: ", response.data.blogs);
    });
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-bold mb-4">All Blog List</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 uppercase text-left bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm-block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs?.length > 0 ? (
              blogs.map((item, index) => {
                return (
                  <BlogTableItem
                    key={index}
                    mongoId={item._id}
                    authorImg={item.authorImg}
                    title={item.title}
                    author={item.author}
                    date={item.date}
                    deleteBlog={deleteBlog}
                  />
                );
              })
            ) : (
              <BlogTableItem />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
