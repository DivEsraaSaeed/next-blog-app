import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/Blog";
// import { writeFile } from "fs/promises";
import fs from "fs";

const loadDB = async () => {
  await ConnectDB();
};
loadDB();
// const a="ahmed";
// const body = { title: "b", description: "test description" };
// const title = body.title;

// const alaa = body.description;  // accessing description property
// console.log('alaa: ', alaa);
// const {title , description} = body;  // destructuring
// console.log('description: ', description);
// console.log('description: ', body.description);

// console.log('ahmed: ', title , description);
// console.log('body: ', body.title);

//api endpoint to get all blogs
export async function GET(request) {
  const { searchParams } = new request(req.url);

  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }

  // const blogs = await BlogModel.find({});
  //   console.log('blogs: ', blogs);
  // return NextResponse.json({ blogs });
  // console.log("blog get hit")

  return NextResponse.json({ message: "Blog API hit successful" });
}
//api endpoint to uploading blog
export async function POST(request) {
  const formData = await request.formData(); // to get form data  //respone to the bakend-side  and the request is coming from the frontend-side
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}-${image.name}`;
  await fs.promises.writeFile(path, buffer);
  const imgUrl = `/${timestamp}-${image.name}`;
  //   console.log(imgUrl)
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    author_img: `${formData.get("authorImg")}`,
  };
  await BlogModel.create(blogData);
  return NextResponse.json({
    // respond to the frontend-side
    success: true,
    message: "Blog added successfully",
  });
}

// api endpoint to delete blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlinkSync(`./public/${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted successfully" });
}
