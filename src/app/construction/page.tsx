import ConstructionAbout from "@/pages/Construction/ConstructionAbout";
import ConstructionEvaluateus from "@/pages/Construction/ConstructionEvaluateus";
import ConstructionHero from "@/pages/Construction/ConstructionHero";
import ConstructionProgress from "@/pages/Construction/ConstructionProgress";
import ConstructionServices from "@/pages/Construction/ConstructionServices";
import React from "react";

export default function Construction() {
  return (
    <main>
      <ConstructionHero />
      <ConstructionAbout />
      <ConstructionEvaluateus />
      <ConstructionProgress />
      <ConstructionServices />
    </main>
  );
}
