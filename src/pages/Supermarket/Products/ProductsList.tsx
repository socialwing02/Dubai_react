"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import { productButtons, productList, category } from "@/lib/constants";

export default function ProductsList() {
  const [filterType, setFilterType] = useState<category>("All");

  function handleTabClick(type: category): void {
    setFilterType(type);
  }

  const filteredProducts =
    filterType === "All"
      ? productList
      : productList.filter((product) => product.type === filterType);

  return (
    <section className="py-6 w-[80vw] mx-auto">
      <Tabs
        tabsButton={productButtons}
        onTabClick={handleTabClick}
        filterType={filterType}
      />
      <TabContent data={filteredProducts} />
    </section>
  );
}
