import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" grid grid-cols-12 gap-5 min-h-screen">
      <div className=" col-span-3 border-r-2 ">
        <h1 className="text-center font-bold">Navigating</h1>
        <div className=" flex flex-col mt-4 gap-4 ">
          <Link className="py-4 px-2 w-full text-center bg-gray-600 rounded-2xl text-white" href={"/dashboard/my-profile"}>
            My Profile
          </Link>
          <Link className="py-4 px-10 w-full text-center bg-gray-600 rounded-2xl text-white" href={"/dashboard/settings"}>
            Settings
          </Link>
          <Link className="py-4 px-2 w-full text-center bg-gray-600 rounded-2xl text-white" href={"/dashboard/add-story"}>
            Add Story
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
