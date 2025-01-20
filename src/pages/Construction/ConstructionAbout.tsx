import React from "react";
import aboutus from "@/assets/image/construction/construction-evaluate.webp";
import Image from "next/image";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

export default function ConstructionAbout() {
  return (
    <section className="flex justify-center gap-10 my-20">
      <div className="flex flex-col justify-between">
        <div className="w-[min(600px,90vw)] pt-12 flex flex-col gap-3 ">
          <h2 className="uppercase text-[clamp(1.8rem,1.7vw,4rem)] font-bold">
            Welcome to our concrete constructions
          </h2>

          <h3 className="capitalize text-[clamp(1.3rem,1.3vw,4rem)] font-semibold">
            Where we build your Visions
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veniam architecto sunt rerum numquam quas ea velit esse odit, ullam
            eos! Autem ut consectetur dicta mollitia magni, nam reiciendis
            repellat. veniam architecto sunt rerum numquam quas ea velit esse
            odit, ullam eos! Autem ut consectetur dicta mollitia magni, nam
            reiciendis repellat. veniam architecto sunt rerum numquam quas ea
            velit esse odit, ullam eos! Autem ut consectetur dicta mollitia
            magni, nam reiciendis repellat.
          </p>
        </div>
        <hr />

        <div>
          <span className="flex gap-2 capitalize  text-xl text-gray-500">
            <PhoneEnabledIcon sx={{ color: "gray" }} />
            Call us Today
          </span>

          <h5 className="text-[clamp(1.3rem,1.5vw,4rem)] font-bold pl-8">
            9789647910
          </h5>
        </div>
      </div>

      <div className="relative inline-block">
        <div className="absolute top-4 left-4 w-full h-full border-2 border-gray-400 rounded-md z-[-1]"></div>

        <Image
          src={aboutus}
          alt="Architectural Design"
          className="relative w-[450px] h-[500px] object-cover rounded-md shadow-xl"
        />
      </div>
    </section>
  );
}
