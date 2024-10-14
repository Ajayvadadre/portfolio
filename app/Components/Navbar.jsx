import React from "react";
import "remixicon/fonts/remixicon.css";
import menu from '../../assets/menu-line.png';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-7">
      <Image src={menu} className="h-7 w-7 " alt=""></Image>
      <h4>EN</h4>
    </div>
  );
};

export default Navbar;
