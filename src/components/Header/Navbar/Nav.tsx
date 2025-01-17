import React from "react";
import NavList from "./NavList";
import { navlist } from "@/lib/constants";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-10">
        {navlist.map((item) => (
          <NavList key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
}
