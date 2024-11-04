import React from "react";
import "remixicon/fonts/remixicon.css";
import menu from '../../assets/menu-line.png';
import logo from '../../assets/Ajaylogo.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5">
      <Image src={logo} className="h-7 w-7 cursor-pointer " alt=""></Image>
      <Image src={menu} className="h-7 w-7 cursor-pointer " alt=""></Image>
    </div>
  );
};

export default Navbar;
