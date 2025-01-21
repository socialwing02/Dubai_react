import React from "react";
import tempo from "@/assets/image/hotel/tempo.png";
import Image from "next/image";

function TravelFeature() {
  return (
    <div className="flex justify-center gap-10">
      <div className="w-[min(600px,90vw)] flex flex-col gap-3">
        <h3 className="text-[clamp(2rem,2vw,4rem)] font-bold">
          Diverse Travel Styles
        </h3>
        <p className="">
          Travel is as unique as the individuals who embark on it, and we
          celebrate the diversity of experiences that cater to every traveler’s
          style. Whether you’re a thrill-seeker craving adrenaline-pumping
          adventures, a culture enthusiast looking to immerse yourself in local
          traditions, or someone seeking peace and tranquility in serene
          landscapes, there’s a travel style that suits you. From bustling
          cities to untouched nature, we ensure that every journey aligns
          perfectly with your desires and aspirations.
        </p>
        <p>
          For solo travelers, we offer experiences designed to empower and
          inspire, with opportunities to explore the world on your terms.
          Families can delight in tailored vacations that bring loved ones
          closer together, with activities and destinations suitable for all
          ages. Group travelers can enjoy seamless coordination and shared
          adventures, creating memories that last a lifetime. Whatever your
          preference, your travel style is the centerpiece of your journey.
        </p>
      </div>
      <Image
        src={tempo}
        className="w-[500px]  object-cover rounded-lg"
        alt=""
      />
    </div>
  );
}

export default TravelFeature;
