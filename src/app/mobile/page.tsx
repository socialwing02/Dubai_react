import MobileAboutUs from "@/pages/Mobile/MobileAboutUs";
import MobileEvaluate from "@/pages/Mobile/MobileEvaluate";
import MobileHero from "@/pages/Mobile/MobileHero";
import MobileLogos from "@/pages/Mobile/MobileLogos";
import MobileServices from "@/pages/Mobile/MobileServices";
import MobileWithImage from "@/pages/Mobile/MobileWithImage";
import React from "react";

export default function Mobile() {
  return (
    <main>
      <MobileHero />
      <MobileLogos />
      <MobileWithImage />
      <MobileAboutUs />
      <MobileServices />
      <MobileEvaluate />
    </main>
  );
}
