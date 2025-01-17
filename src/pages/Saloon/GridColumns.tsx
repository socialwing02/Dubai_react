"use client";

import React from "react";
import Image from "next/image";
import grid1 from "@/assets/image/grid-1.jpg";
import grid2 from "@/assets/image/grid-2.jpg";
import grid3 from "@/assets/image/grid-3.webp";
import grid4 from "@/assets/image/grid-4.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Button } from "@mui/material";

export default function GridColumns() {
  return (
    <div className="grid-columns">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        <p className="text-[clamp(1.7rem,1.5vw,4rem)]">
          Therefore to our clients, we always offer a consultation first, to be
          able to establish what sort of previous experience they have had.
        </p>
        <Image
          src={grid2}
          alt=""
          className="w-[200px] h-[200px] rounded-full object-cover "
        />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-[clamp(1.5rem,1.9vw,3rem)] p-4 text-center">
          Curly hair is most beautiful
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={grid2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        className="grid  gap-8 p-8"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <p className="text-[clamp(1.7rem,1.5vw,4rem)]">
          Therefore to our clients, we always offer a consultation first, to be
          able to establish what sort of previous experience they have had.
        </p>
        <Image
          src={grid3}
          alt=""
          className="w-[200px] h-[200px] rounded-full object-cover justify-self-end"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={grid2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        className="p-6 flex flex-col items-center gap-8"
      >
        <h2 className="text-[clamp(2rem,1.5vw,4rem)] font-semibold text-center  ">
          Curly Hair Hydration Treatments
        </h2>

        <Button>Learn More</Button>
      </motion.div>
    </div>
  );
}
