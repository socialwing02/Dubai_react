import { mobileLogos } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function MobileLogos() {
  return (
    <section className="py-[4rem] flex  justify-center gap-16">
      {mobileLogos.map((logo) => (
        <Image src={logo} alt="" className="w-[100px] aspect-square " />
      ))}
    </section>
  );
}
