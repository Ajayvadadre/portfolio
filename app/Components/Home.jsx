import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../../assets/Right-image.png";
import Image from "next/image";
import img from "../../assets/Untitled-1.png";
import news from "../../assets/News.png";
// import mockup from '../../assets/Untitled-1.png '

const Home = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://img.icons8.com/color/48/css3.png"
      />

      <Navbar />
      <div className="hero-main h-128  w-full pr-24 mobile:pr-0 flex gap-50 md:pl-28 px-20 mobile:flex-wrap  lg:flex-nowrap md:flex-nowrap mobile:pl-0 sm:gap-20 md:gap-30 lg:gap-0 lg:px-20">
        <div className="hero-left w-2/4 flex flex-col gap-10 text-start mobile:w-full mobile:px-10 mobile:mt-10 justify-center ">
          <div className="div">
            <h5>&#x3c;Hello World&#x3e;</h5>
          </div>
          <div className="">
            <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl">
              My name is ajay vadadre. <br />I am a web developer from India
            </h1>
          </div>
          <div>
            <button className="div text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-900">
              Contact me
            </button>
          </div>
        </div>
        <div className="hero-right h-full flex align-middle mobile:w-full ">
          <Image
            src={HeroImage}
            className="mt-28 mix-blend-screen object-contain mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-3/4"
          />
        </div>
      </div>
      <div className="skills mt-52 flex  justify-between px-20">
        <div className="skills-left-container text-left w-1/2 flex flex-col gap-5 px-10">
          <div className="div mb-6">
            <h5>&#x3c;Skills&#x3e;</h5>
          </div>
          <div className="">
            <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
              Skills I know as a <br />
              web developer
            </h1>
          </div>
          <div className=" text-start">
            <ul className="list-disc pl-5">
              <li>Website development</li>
              <li>Database development</li>
              <li>Python program development </li>
              <li>Website parsing</li>
            </ul>
          </div>
        </div>

        <div className="skills-right-container w-1/2  h-full mb-14 ">
          <div className="skills-right-container w-full  h-full mb-14">
            <div className="skills-imgs grid grid-cols-5 gap-y-10  ">
              {[
                "html5",
                "css3",
                "javascript",
                "tailwindcss",
                "bootstrap",
                "react",
                "mongodb",
                "nextjs",
                "redux",
                "nodejs",
                "vercel",
                "github",
                "postman",
                "photoshop",
                "figma",
              ].map((icon, index) => (
                <div key={index} className="h-12 w-12 overflow-hidden">
                  <img
                    className="h-full w-full object-fit"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Project1 px-20 mt-60 mb-32 flex gap-12">
        <div className="projects-left border-red-500 w-2/4 ">
          <div className="skills-left-container text-left  flex flex-col  gap-7 px-10">
            <div className="div mb-6">
              <h5>&#x3c;Projects&#x3e;</h5>
            </div>
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                ShoesDekh- <br />
                E-commerce website
              </h1>
            </div>
            <div className=" text-start ">
              Shoes Dekh is a modern, youth-centric e-commerce platform built on
              the MERN stack (MongoDB, Express, React, Node.js). The project is
              designed with aesthetics in mind, focusing on providing a sleek
              and intuitive shopping experience for footwear enthusiasts. The
              platform offers a dynamic user interface, allowing customers to
              effortlessly explore, filter, and purchase shoes that match their
              style.
            </div>
          </div>
        </div>

        <div className="project-right w-2/4 ">
          <Image
            src={img}
            className=" mix-blend-screen  object-contain rounded-sm mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-full"
          />
        </div>
      </div>

      <div className="Project2 px-20  mt-60 mb-32 flex gap-12 ">
        <div className="projects-left border-red-500 w-2/4 ">
          <div className="skills-left-container text-left  flex flex-col  gap-7 px-10">
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                NewsTime- <br />
                Multilanguage News Website
              </h1>
            </div>
            <div className=" text-start ">
              Newstime is a multilingual news platform built to deliver the
              latest headlines from around the world in multiple languages.
              Developed using the MERN stack (MongoDB, Express, React, Node.js),
              Newstime provides users with a seamless experience to access
              real-time news, no matter their language preference. The platform
              is designed to be sleek, modern, and easy to navigate, ensuring
              users can quickly find news articles and updates tailored to their
              region or language.
            </div>
          </div>
        </div>
        <div className="project-right w-2/4 ">
          <Image
            src={news}
            className=" mix-blend-screen  object-contain rounded-sm mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-full"
          />
        </div>
      </div>

      <div className="Work-experience1 px-20  mt-60 mb-32  ">
          <div className="div text-start px-20 ">
            <h5>&#x3c;Work Experience&#x3e;</h5>
          </div>
        
        <div className="exp-container px-20  mt-10 mb-32 flex gap-10 ">
          <div className="Exp-1 text-left  flex flex-col  gap-7  border w-2/3 px-10 py-16 ">
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                Connectix- Web developer
              </h1>
              2 Months
            </div>
            <div className=" text-start">
              <ul className="list-disc pl-5">
                <li>Website development</li>
                <li>Database development</li>
                <li>Python program development </li>
                <li>Website parsing</li>
              </ul>
            </div>
          </div>
          
            <div className="Exp-2 text-left  flex flex-col  gap-7 px-10 py-16 border   w-4/5  p-20">
              <div className="">
                <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl  ">
                  Alumak- Wordpress developer
                </h1>
                6 Months
              </div>
              <div className=" text-start">
                <ul className="list-disc pl-5">
                  <li>Website development</li>
                  <li>Database development</li>
                  <li>Python program development </li>
                  <li>Website parsing</li>
                </ul>
              </div>
            </div>

        </div>
      </div>
      <div className="Work-experience2 px-20   mb-32 flex gap-12 "></div>
    </div>
  );
};

export default Home;
