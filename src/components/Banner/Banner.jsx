import React from "react";
import bannerImage from "@assets/banner.jpg"; // Adjust the path as necessary

const Banner = () => {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bannerImage})`, height: "450px" }}
    >
      <h1 className="text-white text-2xl font-bold text-left">TUBO</h1>
    </div>
  );
};

export default Banner;
