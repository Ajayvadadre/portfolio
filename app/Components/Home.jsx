import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../../assets/Right-image.png";
import Image from "next/image";
import img from "../../assets/Untitled-1.png";
import news from "../../assets/News.png";
import Footer from "./Footer";
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
            <button className="button mobile:py-2  mobile:ml-1  text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-900">
              Contact me
            </button>
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
              Skills I know as a <br />
              web developer
            </h1>
          </div>
          <div className=" text-start ">
            <ul className="list-disc pl-5 max-mobile:text-sm">
              <li>Website development</li>
              <li>Database development</li>
              <li>Python program development </li>
              <li>Website parsing</li>
            </ul>
          </div>
        </div>

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
                "photoshop",
                "figma",
              ].map((icon, index) => (
                <div
                  key={index}
                  className="h-12 w-12 max-mobile:h-8 max-mobile:w-8 overflow-hidden "
                >
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
            <div className="  max-mobile:text-sm  ">
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
        <div className="project-right w-2/4  max-mobile:w-full">
          <Image
            src={news}
            className=" mix-blend-screen  object-contain rounded-sm max-mobile:w-full mobile:h-3/5 sm:w-full sm:h-1/2  lg:h-full"
          />
        </div>
      </div>

      <div className="Work-experience1 px-10  mt-60 mb-32 max-mobile:flex-wrap  max-mobile:px-10 ">
        <div className="div text-start px-20 max-mobile:px-1 text-neutral-400 max-mobile:-ml-2">
          <h5>&#x3c;Work Experience&#x3e;</h5>
        </div>

        <div className="exp-container px-20  mt-10 mb-32 flex gap-10 max-mobile:flex-wrap max-mobile:px-0">
          <div className="Exp-1 text-left  flex flex-col  gap-7  border w-2/3 px-10 py-16 max-mobile:w-full max-mobile:py-5 max-mobile:px-5">
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl ">
                Connectix- Web developer
              </h1>
              2 Months
            </div>
            <div className=" text-start">
              <ul className="list-disc pl-5 leading-7 ">
                <li className="leading-6">
                  Redesigned the UI for a Next.js project, enhancing usability.
                </li>
                <li>Fixed critical bugs to improve functionality.</li>
                <li>Optimized performance and user experience. </li>
                <li>Added email verification for secure signups.</li>
                <li>Focused on user-centric improvements throughout.</li>
              </ul>
            </div>
            <div className="div"></div>
          </div>

          <div className="Exp-2 text-left  flex flex-col  gap-7  border w-2/3 px-10 py-16 max-mobile:w-full max-mobile:py-5 max-mobile:px-5">
            <div className="">
              <h1 className="text-left w-full mobile:text-3xl lg:text-2xl xl:text-3xl md:text-xl  ">
                Alumak- Wordpress developer
              </h1>
              <h1>6 Months</h1>
            </div>
            <div className=" text-start ">
              <ul className="list-disc pl-5 ">
                <li>
                  Managed and maintained the company&apos;s WordPress site,
                  improving UI/UX.
                </li>
                <li>
                  Boosted performance by removing plugins and optimizing images.
                </li>
                <li>Added SEO-optimized blog posts to increase visibility.</li>
                <li>Implemented a custom mouse cursor for a unique UI. </li>
                <li>Migrated the website to new hosting with zero downtime </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Work-experience2 px-20   mb-32 flex gap-12 "></div>
      <div className="footer fixed  bottom-0 w-full">{/* <Footer /> */}</div>
    </div>
  );
};
export default Home;
