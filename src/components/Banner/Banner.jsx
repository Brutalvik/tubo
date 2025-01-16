import React from "react";
import bannerImage from "@assets/banner.jpg";
import Calendar from "@components/Calendar/Calendar";

const Banner = () => {
  return (
    <div
      className="flex w-full h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})`, height: "450px" }}
    >
      <div className="flex justify-start items-center p-4">
        <Calendar />
      </div>
    </div>
  );
};

export default Banner;
