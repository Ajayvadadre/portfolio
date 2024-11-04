'use client'
import React, { useState, useEffect } from "react";
import twitterIcon from "../../assets/twitter-x-fill.svg";
import githubIcon from "../../assets/github-fill.svg";
import linkedinIcon from "../../assets/linkedin-box-fill.svg";
import InstaIcon from "../../assets/instagram-line.svg";
import email from "../../assets/mail-fill.svg";
import emailOpen from "../../assets/mail-open-fill.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

const Footer = () => {
  const Image = dynamic(() => import("next/image"), {
    ssr: false,
  });
  const array = [twitterIcon, githubIcon, InstaIcon, linkedinIcon];
  const [mouseHover, setMouseHover] = useState(false);

  const mouseEnterHandeler = () => {  
    setMouseHover(true);
  };
  const mouseLeaveHandeler = () => {
    setMouseHover(false);
  };

 

  return (
    <div
      className="flex justify-between w-full  px-10 py-3 text-zinc-300  
        backdrop-blur-sm   shadow-lg bg-opacity-20"
    >
      <div className="left-sec flex gap-2">
        <Image
          onMouseEnter={mouseEnterHandeler}
          onMouseLeave={mouseLeaveHandeler}
     
          className="cursor-pointer "
          height={18}
          src={mouseHover ? emailOpen : email}
        ></Image>
        <h1>Email me</h1>
      </div>

      <div className="connections flex gap-5 ">
        {array.map((icons) => {
          return (
            <Image
              className="cursor-pointer"
              height={20}
              src={icons}
              keys={icons}
            ></Image>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
