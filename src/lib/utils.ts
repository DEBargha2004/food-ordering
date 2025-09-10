import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAcronym(name: string) {
  return name
    .replace(/\/w{1,}/g, " ")
    .split(" ")
    .map((s) => s.at(0)?.toUpperCase())
    .slice(0, 2)
    .join("");
}
