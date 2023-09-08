import * as React from "react";
import { cn } from "../utils";
import { type SvgProps } from "./types";

export function Ethereum({
  width = "20",
  fill = "none",
  className,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={width}
    >
      <path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z" />
      <path fill="#7986cb" d="M25 2L39 24 25 32z" />
      <path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z" />
      <path fill="#7986cb" d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z" />
      <path fill="#5c6bc0" d="M25 18L39 24 25 32z" />
    </svg>
  );
}
