import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../../assets/Right-image.png";
import Image from "next/image";
import img from "../../assets/Untitled-1.png";
import news from "../../assets/News.png";
import Footer from "./Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      {/*-------- Hero Section --------- */}
      <section className="pb-24 sm:py- border-b border-gray-800">
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
                <button className="button mobile:py-2  mobile:ml-1  text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-900">
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
      </section>

      {/*-------- Skills --------- */}
      <section id="skills" className="py-32 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-1">
          {/* Centered Heading */}
          <div className="text-center pb-10">
            <p className="text-neutral-400 font-mono mb-2">&lt;Skills/&gt;</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tech worked with
            </h2>
          </div>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row gap-12 mt-24 text-start">
            {/* Left Column - Text */}
            <div className="md:w-1/2">
              <ul className="space-y-4 text-gray-400">
                <li>
                  <strong className="text-white">Frontend:</strong> React,
                  Next.js, Tailwind CSS
                </li>
                <li>
                  <strong className="text-white">Backend:</strong> Node.js,
                  Express
                </li>
                <li>
                  <strong className="text-white">Databases:</strong> MongoDB,
                  PostgreSQL, Redis, Elasticsearch
                </li>
                <li>
                  <strong className="text-white">Other:</strong> REST APIs, Web
                  Scraping/parsing, Python scripting
                </li>
                <li>
                  <strong className="text-white">Learning:</strong> Advanced
                  database optimization, Microservices architecture
                </li>
              </ul>
            </div>

            {/* Right Column - Icons */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-5 gap-6">
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
                  <div key={index} className="flex justify-center">
                    <div
                      className={`p-2 rounded-full ${
                        icon === "vercel" || icon === "github"
                          ? "bg-slate-200 p-2 rounded-full"
                          : ""
                      }`}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                        alt={icon}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------- Projects --------- */}
      <section id="projects" className="py-28 sm:py- border-b border-gray-800">
        <div className="mx-auto max-w-7xl  px-6 lg:px-1">
          <div className="text-center pb-16">
            <p className="text-neutral-400 font-mono mb-4">&lt;Projects/&gt;</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Work
            </h2>
          </div>

          <div className=" space-y-20">
            {/* Project 1 */}
            <div className="flex flex-col  md:flex-row gap-24 text-start items-center">
              <div className="lg:w-2/5 md:w-1/2">
                <h3 className="text-2xl font-bold">ShoesDekh</h3>
                <p className="mt-4 text-gray-400">
                  A modern e-commerce platform built with Next.js and MongoDB,
                  offering a sleek shopping experience for footwear enthusiasts.
                </p>
                <div className="mt-6">
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    View project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={img}
                  alt="ShoesDekh e-commerce website"
                  className="rounded-lg shadow-lg w-full h-auto border border-gray-700"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col pt-14 md:flex-row-reverse text-start gap-20 items-center">
              <div className=" md:w-1/2">
                <h3 className="text-2xl font-bold">NewsTime</h3>
                <p className="mt-4 text-gray-400">
                  A multilingual news platform delivering real-time headlines
                  worldwide, built with React and Node.js.
                </p>
                <div className="mt-6">
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    view project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={news}
                  alt="NewsTime multilingual news website"
                  className="rounded-lg shadow-lg w-full h-auto border border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------- Work experience --------- */}
      <section id="experience" className="pt-28">
        <div className="Work-experience1 px-10 mb-32 max-mobile:flex-wrap  max-mobile:px-10 ">
          <div className="text-center pb-10">
            <p className="text-neutral-400 font-mono mb-4">
              &lt;Experience/&gt;
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work experience
            </h2>
          </div>

          <div className="exp-container grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 mt-10 mb-32 gap-10 max-mobile:flex-wrap">
            {/* Experience 1 */}
            <div className="text-left flex flex-col gap-7  px-6 py-8 md:px-10 md:py-16 rounded-xl border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">SlashRTC</h3>
                  <p className="text-gray-400">Software Developer</p>
                </div>
                <span className="inline-flex items-center rounded-md bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-400">
                  Current
                </span>
              </div>
              <div className="text-start">
                <ul className="list-disc pl-5 space-y-2 font-sans">
                  <li>
                    <strong>Client Issue Resolution:</strong> Rapidly diagnose
                    and fix critical bugs in the call center dialer platform to
                    minimize downtime for clients
                  </li>
                  <li>
                    <strong>Feature Development:</strong> Design and implement
                    new calling features based on client requirements and
                    business needs
                  </li>
                  <li>
                    <strong>Technical Planning:</strong> Estimate development
                    timelines and create technical specifications for new
                    features
                  </li>
                  <li>
                    <strong>Frontend Debugging:</strong> Investigate and resolve
                    UI/UX issues in the calling interface to ensure seamless
                    call operations
                  </li>
                  <li>
                    <strong>Legacy Migration:</strong> Modernize older features
                    by migrating them to current frameworks and best practices
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Enhance call
                    connection reliability and reduce latency in the calling
                    interface
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="text-left flex flex-col gap-7  px-6 py-8 md:px-10 md:py-16 rounded-xl border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Alumak</h3>
                  <p className="text-gray-400">WordPress Developer</p>
                </div>
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300">
                  6 Months
                </span>
              </div>
              <div className="text-start">
                <ul className="list-disc pl-5 space-y-2 font-sans">
                  <li>Managed and maintained the company WordPress site</li>
                  <li>Boosted performance by optimizing plugins and images</li>
                  <li>Added SEO-optimized blog posts to increase visibility</li>
                  <li>Implemented custom UI elements</li>
                  <li>Migrated website with zero downtime</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 - This will automatically go to next row */}
            <div className="text-left flex flex-col gap-7  md:col-span-2  px-6 py-8 md:px-10 md:py-16 rounded-xl border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Connectix</h3>
                  <p className="text-gray-400">Web Developer</p>
                </div>
                <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300">
                  2 Months
                </span>
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
      </section>
      <div className="Work-experience2 px-20   mb-32 flex gap-12 "></div>
      <div className="footer   bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
