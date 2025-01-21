import React from "react";

import TravleHero from "@/pages/Travels/TravelsHero";
import TravelFeature from "@/pages/Travels/TravelFeature";
import TravelCards from "@/pages/Travels/TravelCards";
import TravelAbout from "@/pages/Travels/TravelAbout";
import TravelsCarousel from "@/pages/Travels/TravelsCarousel";

function Travels() {
  return (
    <main>
      <TravleHero />
      <TravelCards />
      <TravelAbout />
      <TravelFeature />
      <TravelsCarousel />
    </main>
  );
}

export default Travels;
