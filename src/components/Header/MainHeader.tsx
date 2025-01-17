import React from "react";
import Nav from "./Navbar/Nav";
import HamburgMenu from "./Navbar/HamburgMenu";

export default function MainHeader() {
  return (
    <header className="bg-white  flex justify-between z-10 items-center py-6 relative px-8  shadow-sm">
      logo
      <div className="lg:flex gap-[6rem] items-center hidden pr-14  ">
        <Nav />
      </div>
      <HamburgMenu />
    </header>
  );
}
