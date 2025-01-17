"use client";

import React from "react";
import haircut from "@/assets/image/saloon-hero.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Button } from "@mui/material";

export default function SaloonHero() {
  return (
    <div className="flex justify-center flex-col-reverse items-center px-10  gap-6 md:flex-row  md:gap-16 py-[3rem] text-center">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        className="w-[min(500px,90vw)] md:py-[5rem] flex flex-col items-center gap-6"
      >
        <h1 className="text-[clamp(3rem,4vw,5rem)]  font-bold">
          Luxury ​Curly Hair Salon
        </h1>
        <p className="text-[clamp(1.2rem,1vw,3rem)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
          sint dolorum veritatis eum voluptate, a eius qui amet. Possimus
          deleniti et quo beatae saepe rem modi
        </p>

        <div className="justify-self-end pr-8">
          <Button>Get Started</Button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={haircut}
          alt="saloon"
          className=" w-[500px] aspect-[1] object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
}
