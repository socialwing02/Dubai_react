import ProductsList from "@/pages/Supermarket/Products/ProductsList";
import SupermarketAboutUs from "@/pages/Supermarket/SupermarketAboutUs";
import SupermarketCards from "@/pages/Supermarket/SupermarketCards";
import SupermarketHero from "@/pages/Supermarket/SupermarketHero";
import SupermarketIcons from "@/pages/Supermarket/SupermarketIcons";
import SuperMarketProducts from "@/pages/Supermarket/SuperMarketProducts";
import React from "react";

export default function Supermarket() {
  return (
    <main>
      <SupermarketHero />
      <SupermarketAboutUs />
      <SupermarketCards />
      <SuperMarketProducts />
      <SupermarketIcons />
    </main>
  );
}
