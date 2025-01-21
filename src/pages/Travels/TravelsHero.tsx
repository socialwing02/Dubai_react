import { Button } from "@/components/ui/Button";
import React from "react";

function TravleHero() {
  return (
    <>
      <div className="marco  justify-center">
        <figcaption className="absolute  w-[700px] ml-[4rem] grid gap-3 text-white">
          <h1 className="text-[clamp(2rem,2.4vw,4rem)] leading-[1.3]">
            Discover the World <br /> One Destination at a Time
          </h1>

          <p>
            Embark on a journey of discovery and let each destination inspire
            your soul. From bustling cities to serene landscapes, the world is
            full of wonders waiting to be explored. Whether you seek adventure,
            relaxation, or cultural immersion, there’s a perfect experience for
            you. Plan your next trip with ease and uncover hidden gems, iconic
            landmarks, and unforgettable moments. Travel is not just about
            reaching a place—it’s about the stories, memories, and connections
            you create along the way
          </p>

          <div className="flex gap-5">
            <Button>Get Stared</Button>
            <Button variant="outline" className="text-black">
              Call now
            </Button>
          </div>
        </figcaption>
      </div>
    </>
  );
}

export default TravleHero;
