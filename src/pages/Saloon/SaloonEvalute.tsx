import Image from "next/image";
import React from "react";
import model1 from "@/assets/image/model1.jpg";
import { Button } from "@mui/material";

export default function SaloonEvalute() {
  return (
    <section className="flex justify-center items-center flex-col px-6 sm:flex-row py-[3rem] gap-4">
      <Image src={model1} alt="" className="w-[400px] rounded-lg" />

      <div className="w-[min(500px,90vw)] bg-white  flex flex-col">
        <div className="p-4 grid gap-4">
          <h1 className="text-[clamp(2rem,2.3vw,4rem)]">
            Easy Curly Girl Method for Beginners
          </h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>

          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
