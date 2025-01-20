import React from "react";
import bgImg from "@/assets/image/electrical/electrical-bg.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";

export default function ElectricalHero() {
  return (
    <>
      <section className="relative min-h-[80vh]  flex justify-center  items-center">
        <Image
          src={bgImg}
          alt=""
          objectFit="cover"
          className="absolute top-0 -z-[1] filter brightness-50"
          fill
        />

        <div className="w-[700px] text-center   text-white flex flex-col  gap-4">
          <h1 className="text-[clamp(2rem,2vw,4rem)] uppercase font-bold">
            We build your dream{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, consectetur. Repellendus ea placeat necessitatibus alias
            saepe eius dolorum quas excepturi? Fugiat, iure? Incidunt, in
            labore. Cum sunt voluptatum sed molestiae.
          </p>

          <div className="flex justify-center gap-6">
            <Button className="bg-yellow-500">Get Started</Button>
            <Button variant="outline" className="text-black">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-[-6rem]  max-w-max mx-auto my-8 gap-10 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="w-[280px] p-4 py-8  border-r-2 shadow-lg rounded-lg bg-white flex flex-col items-center text-center gap-2"
            key={index}
          >
            <AgricultureOutlinedIcon
              sx={{ color: "yellow", fontSize: "3rem" }}
            />

            <h4 className="font-semibold text-xl">Residential</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cumque debitis a repellendus
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
