import ElectricalCategories from "@/pages/Electrical/ElectricalCategories";
import ElectricalEvaluate from "@/pages/Electrical/ElectricalEvaluate";
import ElectricalHero from "@/pages/Electrical/ElectricalHero";
import ElectricalProductsAbout from "@/pages/Electrical/ElectricalProductsAbout";
import React from "react";

export default function Electrical() {
  return (
    <main>
      <ElectricalHero />
      <ElectricalEvaluate />
      <ElectricalCategories />
      <ElectricalProductsAbout />
    </main>
  );
}
