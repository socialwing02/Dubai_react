import HomeChooseUs from "@/components/Home/HomeChooseUs";
import HomeAboutUs from "@/components/Home/HomeAbout";

import HomeHero from "@/components/Home/HomeHero";
import HomeServices from "@/components/Home/HomeServices";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";
import HomeFeatures from "@/components/Home/HomeFeatures";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeChooseUs />
      <HomeFeatures />
      <HomeAboutUs />
      <Testimonial />
    </main>
  );
}
