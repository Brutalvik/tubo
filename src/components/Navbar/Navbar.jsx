import React from "react";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { Button } from "@nextui-org/react";
import logo from "@assets/tubo_white.png";

const Navbar = () => {
  return (
    <nav className="h-[8vh] w-full flex items-center justify-between px-4 md:px-8 shadow-md">
      {/* Left Section (e.g., Logo) */}
      <div className="flex items-center">
        <a
          href="/"
          className="text-white text-lg font-bold hover:text-blue-300 transition"
        >
          <img src={logo} alt="Tubo" className="h-10 w-20 mt-2" />
        </a>
      </div>

      {/* Right Section (e.g., User Avatar) */}
      <div className="flex justify-end cursor-pointer mt-2 gap-4">
        <Button color="default">Be a Host</Button>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
