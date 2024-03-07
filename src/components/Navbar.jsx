import React from "react";
import logo from "../assets/logo.svg";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

const Navbar = () => {
  return (
    <div className="flex bg-white justify-between md:px-6 max-md:px-4 py-4 mb-10">
      <div className="w-20">
        <img src={logo} alt="" className="w-full h-full bg-white" />
      </div>
      <Menubar className="border-none">
        <Drawer className="hidden max-sm:block">
          <DrawerTrigger className="sm:hidden">
            <GiHamburgerMenu size={"2rem"} />
          </DrawerTrigger>
          <DrawerContent className='p-8'>
            <MenubarMenu className="flex flex-col justify-center items-center p-8">
              <MenubarTrigger>Crypto Taxes</MenubarTrigger>
              <MenubarTrigger>Free Tools</MenubarTrigger>
              <MenubarTrigger>Resourse Center</MenubarTrigger>
              <Button className="bg-blue-700 text-white font-bold">
                Get Started
              </Button>
            </MenubarMenu>
          </DrawerContent>
        </Drawer>
        <MenubarMenu>
          <div className="max-sm:hidden flex justify-center items-center gap-2">
            <MenubarTrigger>Crypto Taxes</MenubarTrigger>
            <MenubarTrigger>Free Tools</MenubarTrigger>
            <MenubarTrigger>Resourse Center</MenubarTrigger>
            <Button className="bg-blue-700 text-white font-bold">
              Get Started
            </Button>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;
