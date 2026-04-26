"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handelBtn = () => {
    const password = prompt("Enter the Password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-4 bg-linear-60 to-sky-100 from-sky-300 text-black p-10 rounded-2xl">
      <h1 className="text-4xl font-bold">Welcome to Dev-story</h1>
      <button
        onClick={handelBtn}
        className="px-4 py-2 bg-blue-300  rounded-2xl cursor-pointer hover:bg-emerald-400"
      >
        Share-story
      </button>
    </div>
  );
};

export default Banner;
