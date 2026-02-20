import Link from "next/link";
import React from "react";

const Hader = () => {
  return (
    <div className="px-4 py-3 flex justify-between  border-b-2 border-amber-300">
      <h1 className="text-6  font-semibold">Dev story </h1>
      <nav className=" font-semibold space-x-10">
        <Link href="/Home">Home</Link>
        <Link href="/Tutorials">Tutorials</Link>
        <Link href="/Stories">Stories</Link>
        <Link href="/About">About</Link>
        <Link href="/Dashboard">Dashboard</Link>
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
      </nav>
    </div>
  );
};

export default Hader;
