import React from "react";
import Hotel from "../../components/Hotel/Hotel-p-1";
import HotelCard from "../../components/Hotel/Hotel-Card";
import Hotel1stcard from "../../components/Hotel/hotel1stcard";

export default function page() {
  return (
    <div>
      <Hotel1stcard />
      <Hotel />
      <HotelCard />
      {/* <Standchef /> */}
    </div>
  );
}
