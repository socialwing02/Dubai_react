import React from "react";
import aboutus from "@/assets/image/construction/construction-about.webp";
import Image from "next/image";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

export default function ConstructionAbout() {
  return (
    <section className="flex justify-center gap-10 my-20">
      <div className="flex flex-col justify-between">
        <div className="w-[min(600px,90vw)] pt-12 flex flex-col gap-3 ">
          <h2 className="uppercase text-[clamp(1.8rem,1.7vw,4rem)] font-bold text-balance">
            Constructing Spaces, Creating Connections
          </h2>

          <h3 className="capitalize text-[clamp(1.3rem,1.3vw,4rem)] font-semibold text-pretty">
            Bringing your ideas to life with precision and excellence
          </h3>
          <p>
            We specialize in creating not just structures, but environments
            where functionality meets design. From conceptualization to
            completion, every project is handled with care and dedication to
            ensure exceptional outcomes. Our approach focuses on collaboration,
            sustainability, and quality craftsmanship to deliver spaces that
            inspire and endure. Whether it’s residential, commercial, or
            specialized construction, we build with purpose and precision.
          </p>
        </div>
        <hr />

        <div>
          <span className="flex items-center gap-2 capitalize  text-xl text-gray-500">
            <PhoneEnabledIcon sx={{ color: "gray" }} />
            Call us Today
          </span>

          <h5 className="text-[clamp(1.3rem,1.5vw,4rem)] font-bold pl-8">
            971586300169
          </h5>
        </div>
      </div>

      <div className="relative inline-block">
        <div className="absolute top-4 left-4 w-full h-full border-2 border-gray-500 rounded-md z-[-1]"></div>

        <Image
          src={aboutus}
          alt="Architectural Design"
          className=" w-[450px] h-[500px] object-cover rounded-md shadow-xl"
        />
      </div>
    </section>
  );
}
