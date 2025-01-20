import { category } from "@/lib/constants";
import React from "react";
import TabHandler from "./TabHandler";

export type TabOnClick = (type: category) => void;

export type TabsProps = {
  tabsButton: category[];
  onTabClick: TabOnClick;
  filterType: category;
};

export default function Tabs({
  tabsButton,
  onTabClick,
  filterType,
}: TabsProps) {
  return (
    <div className="flex justify-center gap-10">
      {tabsButton.map((tab, index) => (
        <TabHandler
          key={index}
          onClick={onTabClick}
          buttonType={tab}
          isActive={filterType === tab}
        >
          {tab}
        </TabHandler>
      ))}
    </div>
  );
}
