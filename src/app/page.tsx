import HomeChooseUs from "@/components/Home/HomeChooseUs";
import HomeDetails from "@/components/Home/HomeDetails";
import HomeFeature from "@/components/Home/HomeFeature";
import HomeHero from "@/components/Home/HomeHero";
import HomeServices from "@/components/Home/HomeServices";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeChooseUs />
      <HomeFeature />
      <HomeDetails />
      <Testimonial />
    </main>
  );
}
