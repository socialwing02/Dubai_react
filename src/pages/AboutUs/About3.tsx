import Image from "next/image";
import React from "react";
import focus from "@/assets/image/grid-3.webp";

function About3() {
  return (
    <div className="flex w-[1105px] ml-[130px]">
      <div className="p-4">
        <h1 className="text-8xl">&quot;</h1>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br />
        <br />
        <h1 className="text-8xl text-right">&quot;</h1>
      </div>
      <div className="">
        <Image className="rounded-md w-[650px] h-[300px]" alt="" src={focus} />
      </div>
    </div>
  );
}

export default About3;
