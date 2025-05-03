"use client";

import React, { useState } from "react";
import Image from "next/image";
import menu from "../../assets/menu-line.png";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleMenuItemClick = (e, targetId) => {
    e.preventDefault();
    setOpen(false);
    if (targetId) {
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <Image src={menu} className="h-7 w-7 cursor-pointer" alt="Menu" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-gray-700 rounded-md">
        <DropdownMenuItem
          className="cursor-pointer text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          onClick={(e) => handleMenuItemClick(e, "experience")}
        >
          Experience
        </DropdownMenuItem>
        <div className="h-px bg-gray-600" />
        <DropdownMenuItem
          className="cursor-pointer text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          onClick={(e) => handleMenuItemClick(e, "projects")}
        >
          Projects
        </DropdownMenuItem>
        <div className="h-px bg-gray-600" />
        <DropdownMenuItem
          className="cursor-pointer text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          onClick={(e) => handleMenuItemClick(e, "contact")}
        >
          Contact
        </DropdownMenuItem>
        <div className="h-px bg-gray-600" />
        <DropdownMenuItem
          className="cursor-pointer text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          onClick={(e) => handleMenuItemClick(e, "skills")}
        >
          Skills
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
