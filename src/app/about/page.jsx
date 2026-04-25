import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <nav className=" space-x-5 bg-blue-700 text-white font-semibold">
        <Link href={"/about/teams"}>Teams</Link>
        <Link href={"/about/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default About;
