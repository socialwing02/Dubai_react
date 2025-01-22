import Image from "next/image";
import React from "react";
import Bgimage from "@/assets/image/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";

function appliances() {
  return (
    <div className="relative min-h-10 py-[120px]">
      <Image alt="new image"
        className="w-full h-full  top-0 absolute z-[-1]  object-cover"
        src={Bgimage}
      />

      <div className=" p-5 md:ml-10  md:rounded-3xl h-auto w-[400px] bg-orange-50 text-black">
        <h1 className="text-2xl">
          Specific and detailed: The for [Your Audience]
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          unde, voluptatum, quaerat ducimus odio in natus rerum nesciunt nulla
          ut obcaecati nostrum maiores voluptatem, temporibus consequatur
          molestias! Quod, cupiditate iusto?
        </p>
        <button className="w-auto h-auto p-2 rounded rounded-3xl text-2xl mt-5 ml-1 bg-slate-500 ">OPEN</button>
      </div>
    </div>
  );
}

export default appliances;
