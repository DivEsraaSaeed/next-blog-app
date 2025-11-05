// import Header from './path/to/your/Header';
"use client";
// import BlogItem from "@/Components/BlogItem";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/components/Header";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
