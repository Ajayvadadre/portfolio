import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../../assets/Right-image.png";
import Image from "next/image";
import img from "../../assets/Untitled-1.png";
import news from "../../assets/News.png";
import Footer from "./Footer";
import Link from "next/link";
// import mockup from '../../assets/Untitled-1.png '

const Home = () => {
  return (
    <div className="scroll-smooth">
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
      <div
        className="hero-main h-128  w-full pr-24 max-mobile:pr-0 flex gap-50 md:pl-28 px-20 max-mobile:flex-wrap-reverse
        lg:flex-nowrap md:flex-nowrap max-mobile:h-2/4 max-mobile:mt-14 max-mobile:pl-0 sm:gap-20 md:gap-30 lg:gap-0 "
      >
        <div className="hero-left w-2/4 flex flex-col gap-10 text-start max-mobile:mt-12 max-mobile:w-full max-mobile:px-10 max-mobile:gap-3  justify-center ">
          <div className="div text-neutral-400 max-mobile:-ml-2 ">
            <h5>&#x3c;Hello World&#x3e;</h5>
          </div>

          <div className="">
            <h1 className="text-left w-full mobile:ml-1 mobile:text-sm lg:text-2xl xl:text-3xl md:text-xl">
              My name is ajay vadadre. <br />I am a web developer from India
            </h1>
          </div>
          <div>
            <Link href={"#contact"}>
              <button className="button mobile:py-2  mobile:ml-1  text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                Contact me
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-right h-full flex align-middle max-mobile:w-full max-mobile:pt-0  max-mobile:h-2/4   max-mobile:mt-0  ">
          <Image
            src={HeroImage}
            className="mt-28 mix-blend-screen object-contain  mobile: max-mobile:mt-0  max-mobile:w-full max-mobile:mr-32 sm:w-full sm:h-1/2  lg:h-3/4"
          />
        </div>
      </div>
      {/* 
      <div className="scroll-down-btn flex justify-center mobile:mt-10 lg:-mt-20 mobile:hidden lg:block">
        <div class="scroll-down"></div>
      </div> */}

      <div className="skills mt-52 flex max-mobile:mt-30 max-mobile:px-0 max-mobile:flex-wrap justify-between px-20 ">
        <div className="skills-left-container text-left w-1/2 max-mobile:w-full flex flex-col gap-5 px-10">
          <div className="div mb-6 text-neutral-400 max-mobile:mb-0  max-mobile:-ml-2">
            <h5>&#x3c;Skills&#x3e;</h5>
          </div>
          <div className="">
            <h1 className="text-left w-full max-mobile:text-l lg:text-2xl xl:text-3xl md:text-xl ">
              Skills I know as <br />
              developer
            </h1>
          </div>
          <div className=" text-start ">
            <ul className="list-disc pl-5 max-mobile:text-sm font-sans">
              <li>
                <strong>Frontend:</strong> React, Next.js, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, Redis,
                Elasticsearch
              </li>
              <li>
                <strong>Other:</strong> REST APIs, Web Scraping/parsing, Python
                scripting
              </li>
              <li>
                <strong>Learning:</strong> Advanced database optimization,
                Microservices architecture
              </li>
            </ul>
          </div>
        </div>

        {/*-------- Skills --------- */}
        <div className="skills-right-container w-1/2 max-mobile:w-full max-mobile:px-5 h-full mb-14 ">
          <div className="skills-right-container w-full  h-full mb-14 ">
            <div className="skills-imgs grid grid-cols-5 gap-y-10 mt-20 max-mobile:place-items-center max-mobile:mt-10  ">
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
                "redis",
                "figma",
              ].map((icon, index) => (
                <div
                  key={index}
                  className="h-12 w-12 max-mobile:h-8 max-mobile:w-8 overflow-hidden "
                >
                  <img
                    className={`${
                      icon == "vercel" || icon == "github"
                        ? "bg-slate-100 p-2 rounded-full overflow-visible"
                        : "h-full w-full object-fit "
                    }`}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*-------- Projects --------- */}
      <div className="Project1 px-20 mt-60 mb-32 max-mobile:px-1 max-mobile:flex-wrap  flex  gap-12">
        <div className="projects-left  w-2/4 max-mobile:w-full ">
          <div className="skills-left-container text-left  flex flex-col  gap-7 px-10 max-mobile:px-4 ">
            <div className="div mb-6 text-neutral-400  max-mobile:-ml-2">
              <h5>&#x3c;Projects&#x3e;</h5>
            </div>
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                ShoesDekh- <br />
                E-commerce website
              </h1>
            </div>
            <div className="  max-mobile:text-sm  font-sans">
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

        <div className="project-right w-2/4 mt-20 max-mobile:w-full ">
          <Image
            src={img}
            className=" mix-blend-screen  object-contain rounded-sm max-mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-full"
          />
        </div>
      </div>

      <div className="Project2 px-20  mt-60 max-mobile:px-1 max-mobile:flex-wrap mb-32 flex gap-12 ">
        <div className="projects-left border-red-500 max-mobile:w-full w-2/4 ">
          <div className="skills-left-container text-left  flex flex-col  gap-7 px-10">
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                NewsTime- <br />
                Multilanguage News Website
              </h1>
            </div>
            <div className=" text-start font-sans ">
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
        <div className="project-right w-2/4  max-mobile:w-full">
          <Image
            src={news}
            className=" mix-blend-screen  object-contain rounded-sm max-mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-full"
          />
        </div>
      </div>

      {/*-------- Work experience --------- */}
      <div className="Work-experience1 px-10  mt-60 mb-32 max-mobile:flex-wrap  max-mobile:px-10 ">
        <div className="div text-start px-20 max-mobile:px-1 text-neutral-400 max-mobile:-ml-2">
          <h5>&#x3c; Experience&#x3e;</h5>
        </div>

        <div className="exp-container grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 mt-10 mb-32 gap-10 max-mobile:flex-wrap">
          {/* Experience 1 */}
          <div className="text-left flex flex-col gap-7 border border-gray-400 px-6 py-8 md:px-10 md:py-16 hover:border-gray-700 transition-colors duration-300">
            <div>
              <h1 className="text-left w-full text-xl md:text-2xl xl:text-3xl">
                SlashRTC - Software Developer
              </h1>
              <p>Current</p>
            </div>
            <div className="text-start">
              <ul className="list-disc pl-5 space-y-2 font-sans">
                <li>
                  Redesigned the UI for a Next.js project, enhancing usability
                </li>
                <li>Fixed critical bugs to improve functionality</li>
                <li>Optimized performance and user experience</li>
                <li>Added email verification for secure signups</li>
                <li>Focused on user-centric improvements throughout</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="text-left flex flex-col gap-7 border border-gray-400 px-6 py-8 md:px-10 md:py-16 hover:border-gray-700 transition-colors duration-300">
            <div>
              <h1 className="text-left w-full text-xl md:text-2xl xl:text-3xl">
                Alumak - WordPress Developer
              </h1>
              <p>6 Months</p>
            </div>
            <div className="text-start">
              <ul className="list-disc pl-5 space-y-2 font-sans">
                <li>Managed and maintained the company's WordPress site</li>
                <li>Boosted performance by optimizing plugins and images</li>
                <li>Added SEO-optimized blog posts to increase visibility</li>
                <li>Implemented custom UI elements</li>
                <li>Migrated website with zero downtime</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 - This will automatically go to next row */}
          <div className="text-left flex flex-col gap-7  px-6 py-8 md:px-10 md:py-16 md:col-span-2 border border-gray-400 hover:border-gray-700 transition-colors duration-300">
            <div>
              <h1 className="text-left w-full text-xl md:text-2xl xl:text-3xl">
                Connectix - Web Developer
              </h1>
              <p>2 Months</p>
            </div>
            <div className="text-start">
              <ul className="list-disc pl-5 space-y-2 font-sans">
                <li>Redesigned UI for improved usability</li>
                <li>Fixed critical functionality bugs</li>
                <li>Optimized performance metrics</li>
                <li>Implemented secure authentication</li>
                <li>User experience enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Work-experience2 px-20   mb-32 flex gap-12 "></div>
      <div className="footer   bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
