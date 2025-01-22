import React from "react";
import bgImg from "@/assets/image/mobile/bg-image-mobile.jpg";
import Image from "next/image";

export default function MobileWithImage() {
  return (
    <section className="my-10 relative py-[14rem] flex justify-center ">
      <Image
        src={bgImg}
        alt=""
        className=" absolute top-0 w-full h-full object-cover filter brightness-[.4] -z-[1]"
      />

      <div>
        <h3 className="text-[clamp(2rem,3vw,5rem)] text-white">
          Best offers available here
        </h3>
      </div>
    </section>
  );
}
