import React from "react";
import carImg from "@/assets/image/hotel/car.webp";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { travlListContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

function TravelAbout() {
  return (
    <div className="flex justify-center gap-16 my-10">
      <Image
        src={carImg}
        className="w-[500px] object-cover rounded-lg"
        alt=""
      />

      <div className="w-[min(700px,90vw)] flex flex-col gap-3 ">
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-bold">
          Your Gateway to Unforgettable Journeys
        </h2>
        <p className="">
          Step into a world of extraordinary experiences and let your wanderlust
          take flight. With countless destinations, unique adventures, and
          personalized travel options, you’re one step closer to creating
          memories that will last a lifetime. Whether it’s a relaxing getaway, a
          thrilling expedition, or a cultural exploration, we make every journey
          unforgettable.
        </p>

        <ul className="grid grid-cols-[repeat(2,300px)] justify-center gap-2">
          {travlListContent.map((list) => (
            <li key={list} className="flex gap-2 items-center font-semibold">
              <ArrowForwardIcon fontSize="small" />
              <span>{list}</span>
            </li>
          ))}
        </ul>
        <p className="">
          Embark on a journey where every moment becomes a cherished memory. We
          are your gateway to discovering the beauty and diversity of the world,
          offering personalized travel experiences designed to inspire and
          delight. Whether you’re dreaming of serene beaches, vibrant cities, or
          untamed wilderness, your perfect journey begins here
        </p>
      </div>
    </div>
  );
}

export default TravelAbout;
