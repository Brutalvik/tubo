import React from "react";
import bannerImage from "@assets/banner.jpg"; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="w-[728] h-[90] bg-cover bg-center mt-2">
      <img src={bannerImage} alt="banner" />
    </div>
  );
};

export default Banner;
