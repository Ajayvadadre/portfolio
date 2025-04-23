import React from "react";
import "remixicon/fonts/remixicon.css";
import menu from "../../assets/menu-line.png";
import logo from "../../assets/Ajaylogo.png";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5 mr-8 ">
      <Image src={logo} className="h-7 w-7 cursor-pointer " alt=""></Image>
      <div className="mr-5">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
