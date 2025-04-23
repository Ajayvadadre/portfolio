import React from "react";
import Image from "next/image";
import menu from "../../assets/menu-line.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Menu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image src={menu} className="h-7 w-7 cursor-pointer " alt=""></Image>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer text-white hover:text-white border border-gray-800 hover:bg-gray-700">
            Projects
          </DropdownMenuItem>
          <div className="h-px bg-gray-600"></div>
          <DropdownMenuItem className="cursor-pointer text-white hover:text-white border border-gray-800 hover:bg-gray-700">
            Contacts
          </DropdownMenuItem>
          <div className="h-px bg-gray-600"></div>
          <DropdownMenuItem className="cursor-pointer text-white hover:text-white border border-gray-800 hover:bg-gray-700">
            Skills
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default Menu;
