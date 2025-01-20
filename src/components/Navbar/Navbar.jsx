import React from "react";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { Button } from "@heroui/react";
import logo from "@assets/tubo_white.png";

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 shadow-md z-50">
      {/* Left Section (e.g., Logo) */}
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Tubo" className="h-10 w-25 mt-2 mb-2" />
        </a>
      </div>

      {/* Right Section (e.g., User Avatar) */}
      <div className="flex justify-end cursor-pointer mt-2 gap-4 mb-2">
        <Button color="default">Be a Host</Button>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
