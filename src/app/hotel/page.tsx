import React from "react";
import Hotel from "../../components/Hotel/Hotel-p-1";
import HotelCard from "../../components/Hotel/Hotel-Card";
import Hotel1stcard from "../../components/Hotel/hotel1stcard";
// import Standchef from "../../components/Hotel/Standchef";
import HotelCurve from "@/components/Hotel/HotelCurve"

export default function page() {
  return (
    <div>
      <Hotel1stcard />
      <Hotel />
      <HotelCard />
      <HotelCurve />
      {/* <Standchef /> */}
    </div>
  );
}
