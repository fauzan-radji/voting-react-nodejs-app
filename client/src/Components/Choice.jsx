import { useState } from "react";

const colors = [
  {
    bg: "bg-red-700",
    border: "border-red-700",
    hover: "hover:border-red-700",
  },
  {
    bg: "bg-sky-700",
    border: "border-sky-700",
    hover: "hover:border-sky-700",
  },
  {
    bg: "bg-green-700",
    border: "border-green-700",
    hover: "hover:border-green-700",
  },
  {
    bg: "bg-orange-700",
    border: "border-orange-700",
    hover: "hover:border-orange-700",
  },
];

export default function Choice(props) {
  const color = colors[props.color];
  const percentage = (props.value / props.total) * 100;

  return (
    <div
      className={`flex gap-2 rounded-lg border-2 ${
        props.selected ? color.border : "border-slate-700"
      } cursor-pointer bg-slate-700 p-2 ${color.hover}`}
      onClick={props.onClick}
    >
      <div
        className={`w-2 rounded-md border ${
          props.selected ? color.bg : "bg-transparent"
        } ${color.border}`}
      ></div>

      <div className="flex w-full flex-col gap-1">
        <p className="">{props.children}</p>
        <div className="h-3 overflow-hidden rounded-full bg-slate-600">
          <div
            style={{
              width: percentage + "%",
            }}
            className={`flex h-full items-center justify-center rounded-full ${color.bg} text-xs`}
          >
            {percentage.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
