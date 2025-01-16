import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Make sure FaXTwitter is the correct import
import socialLinks from "@assets/socialLinks.json"; // Import your social links

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
        <FaInstagram size={24} />
      </a>
      <a href={socialLinks.x} target="_blank" rel="noreferrer">
        <FaXTwitter size={25} />
      </a>
    </div>
  );
};

export default SocialLinks;
