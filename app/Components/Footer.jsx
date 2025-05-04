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
  const socialLinks = [
    { icon: twitterIcon, url: "https://x.com/AjayVadadre" },
    { icon: githubIcon, url: "https://github.com/Ajayvadadre" },
    { icon: InstaIcon, url: "https://www.instagram.com/ajay_vadadre/" },
    { icon: linkedinIcon, url: "https://www.linkedin.com/in/ajay-vadadre/" },
  ];
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <footer id="contact" className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-10 py-3 text-zinc-300 backdrop-blur-sm shadow-lg bg-opacity-20 gap-4 sm:gap-0">
        {/* Email Section */}
        <a 
          href="mailto:ajvadadre1234@gmail.com"
          className="flex items-center gap-2 hover:text-white transition-colors"
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          <Image
            height={18}
            width={18}
            src={mouseHover ? emailOpen : email}
            alt="Email icon"
            className="flex-shrink-0"
          />
          <span className="font-mono text-sm sm:text-base truncate max-w-[180px] sm:max-w-none">
            ajvadadre1234@gmail.com
          </span>
        </a>

        {/* Social Links */}
        <div className="flex lg:gap-4 gap-8 ">
          {socialLinks.map((social, index) => (
            <Link 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image
                className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                height={20}
                width={20}
                src={social.icon}
                alt={`${social.url.split('.')[1]} icon`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;