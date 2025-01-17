import React from "react";

type Props = {
  type: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  label: string;
};

export default function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="text-base">
        {label}
      </label>
      <input
        {...props}
        className=" text-sm border-b border-gray-400 w-[min(280px,90vw)]"
      />
    </div>
  );
}
