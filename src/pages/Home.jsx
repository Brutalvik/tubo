import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Banner from "@components/Banner/Banner";
import SlidingText from "@components/SlidingText/SlidingText";
import SocialLinks from "@components/SocialLinks/SocialLinks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SlidingText />
      <SocialLinks />
    </div>
  );
};

export default Home;
