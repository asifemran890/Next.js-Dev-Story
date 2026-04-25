import Link from "next/link";
import React from "react";

const Hader = () => {
  return (
    <div className="px-4 py-3 flex justify-between  border-b-2 border-amber-300">
      <h1 className="text-6  font-semibold">Dev story </h1>
      <nav className=" font-semibold space-x-10">
        <Link href="/about">About</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/storie">Stories</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Hader;
