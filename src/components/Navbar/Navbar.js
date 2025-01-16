import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";

const Navbar = () => {
  return (
    <nav className="h-[8vh] w-full grid grid-cols-3 items-center px-4 md:px-8 shadow-md">
      {/* Left Section (e.g., Logo) */}
      <div className="flex items-center">
        <a
          href="/"
          className="text-white text-lg font-bold hover:text-blue-300 transition"
        >
          TUBO
        </a>
      </div>

      {/* Right Section (e.g., User Avatar) */}
      <div className="flex justify-end items-center h-full">
        <UserAvatar className="h-8 w-8 rounded-full m-0 p-0 flex items-center" />
      </div>
    </nav>
  );
};

export default Navbar;
