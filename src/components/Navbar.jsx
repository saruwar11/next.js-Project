import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-gray-900">
      <nav className="flex justify-between items-center w-11/12 mx-auto p-4">
        <div className="text-2xl">Logo</div>
        <div className="flex gap-2">
          <Link className="btn border py-2 px-4 rounded" href={"/"}>
            Home
          </Link>
          <Link className="btn border py-2 px-4 rounded" href={"about"}>
            About
          </Link>
          <Link className="btn border py-2 px-4 rounded" href={"/login"}>
            Sign In
          </Link>
          <Link className="btn border py-2 px-4 rounded" href={"/register"}>
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
