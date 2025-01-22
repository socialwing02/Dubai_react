import React from "react";
import HotelHero from "@/components/Hotel/HotelHero";
import HotelFood from "@/components/Hotel/HotelFood";
import HotelCard from "@/components/Hotel/HotelCard";
import Standchef from "@/components/Hotel/Standchef";
import HotelCurveImage from "@/components/Hotel/HotelCurveImage";

export default function page() {
  return (
    <div>
      <HotelHero />
      <HotelFood />
      <HotelCard />
      <HotelCurveImage />
      {/* <Standchef /> */}
    </div>
  );
}
