import React from "react";
import ProductsList from "./Products/ProductsList";

export default function SuperMarketProducts() {
  return (
    <section className="">
      <div className="text-center">
        <h5 className="text-xl">
          <i>Latest Arrivals</i>
        </h5>
        <h3 className="text-[clamp(2rem,2vw,4rem)] font-semibold">
          New Products
        </h3>
      </div>

      <ProductsList />
    </section>
  );
}
