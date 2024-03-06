import React from "react";
import logo from "../assets/logo.svg";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex bg-white justify-between px-10 py-4">
      <div className="w-20">
        <img src={logo} alt="" className="w-full h-full bg-white" />
      </div>
      <Menubar className="max-sm:hidden border-none">
        <MenubarMenu>
          <MenubarTrigger>Crypto Taxes</MenubarTrigger>
          <MenubarTrigger>Free Tools</MenubarTrigger>
          <MenubarTrigger>Resourse Center</MenubarTrigger>
          <Button className="bg-blue-700 text-white font-bold">
            Get Started
          </Button>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;
