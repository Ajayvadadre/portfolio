"use client";

import React, { useState } from "react";
import twitterIcon from "../../assets/twitter-x-fill.svg";
import githubIcon from "../../assets/github-fill.svg";
import linkedinIcon from "../../assets/linkedin-box-fill.svg";
import InstaIcon from "../../assets/instagram-line.svg";
import email from "../../assets/mail-fill.svg";
import emailOpen from "../../assets/mail-open-fill.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const array = [
    { icon: twitterIcon, url: "https://x.com/AjayVadadre" },
    { icon: githubIcon, url: "https://github.com/Ajayvadadre" },
    { icon: InstaIcon, url: "https://www.instagram.com/ajay_vadadre/" },
    { icon: linkedinIcon, url: "https://www.linkedin.com/in/ajay-vadadre/" },
  ];
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <footer id="contact">
      <div
        className="flex justify-between w-full px-10 py-3 text-zinc-300  
        backdrop-blur-sm shadow-lg bg-opacity-20"
      >
        <div className="left-sec flex gap-2">
          {/* <Link href="mailto:ajvadadre1234@gmail.com"> */}
          <div
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            className="flex items-center gap-2 "
          >
            <Image
              height={18}
              width={18} // Add width to prevent layout shift
              src={mouseHover ? emailOpen : email}
              alt="Email icon"
            />
            <h1 className="font-mono">ajvadadre1234@gmail.com</h1>
          </div>
          {/* </Link> */}
        </div>

        <div className="connections flex gap-5 ">
          {array.map((social) => (
            <Link href={social.url} target="_blank">
              <Image
                className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                height={20}
                width={20} // Add width to prevent layout shift
                src={social.icon}
                key={social.icon}
                alt="Social icon"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
