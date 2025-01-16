import React from "react";
import Slider from "react-slick";

const SlidingText = () => {
  const textList = [
    "TUBO: Where your next adventure starts.",
    "Explore more with TUBO at your wheel.",
    "Drive with purpose. Rent with TUBO.",
    "TUBO: Connecting cars, people, and possibilities.",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change text every 5 seconds
    arrows: false, // Hide navigation arrows
    dots: false, // Hide dots
    cssEase: "linear", // Ensures smooth sliding effect
  };

  return (
    <div className="w-full bg-black text-white py-4">
      <Slider {...settings}>
        {textList.map((text, index) => (
          <div
            key={index}
            className="h-[100px] flex items-center justify-center font-light text-center"
          >
            <p className="text-2xl">{text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidingText;
