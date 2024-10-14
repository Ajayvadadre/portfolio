import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../../assets/Right-image.png";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-main h-128 w-full flex gap-50 pl-28">
        <div className="hero-left w-2/4 flex flex-col gap-10 text-start  justify-center hero-lef">
          <div className="div">
            <h5>&#x3c;Hello World&#x3e;</h5>
          </div>
          <div className="">
            <h1 className="text-4xl text-left w-full  ">
               My name is ajay vadadre <br />I am a web developer from India
            </h1>
          </div>
          <div >
            <button className="div border  p-4 rounded-md ">Contact me </button>
          </div>
        </div>
        <div className="hero-right h-full flex align-middle">
          <Image src={HeroImage} className="mt-28 ml-5 h-2/3 w-full mix-blend-screen"></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
