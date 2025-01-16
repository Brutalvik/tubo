import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Banner from "@components/Banner/Banner";
import SlidingText from "@components/SlidingText/SlidingText";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <div className="flex justify-center items-center">
        <SlidingText />
      </div>
    </div>
  );
};

export default Home;
