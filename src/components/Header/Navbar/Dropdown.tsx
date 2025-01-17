import React from "react";
import { NavlistType } from "@/lib/types";
import Link from "next/link";

export default function Dropdown({
  item,
  isDropped,
}: {
  item: NavlistType;
  isDropped: boolean;
}) {
  return (
    <div
      className={`absolute border-t-2 border-t-violet-600 z-[10] top-6 left-[-15] w-fit border rounded-lg text-nowrap p-4 shadow-md bg-white transition-all duration-300 ${
        isDropped
          ? "opacity-100 translate-y-0"
          : " hidden opacity-0 -translate-y-1"
      }`}
    >
      <ul className="grid gap-4">
        {item.children?.map((child) => (
          <li key={child.name} className="hover:text-violet-600">
            <Link href={child.path}>{child.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
