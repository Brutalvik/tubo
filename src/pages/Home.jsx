import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Banner from "@components/Banner/Banner";
import SlidingText from "@components/SlidingText/SlidingText";
import SocialLinks from "@components/SocialLinks/SocialLinks";
import Menu from "@components/Menu/Menu";
import Login from "@components/Login/Login";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <Login />
      <Banner />
      <SlidingText />
      <SocialLinks />
    </div>
  );
};

export default Home;
