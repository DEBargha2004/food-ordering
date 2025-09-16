import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "./env";

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

export async function catchError<E extends any = Error, T extends any = any>(
  promise: Promise<T>
) {
  try {
    return [await promise, undefined] as [T, undefined];
  } catch (error) {
    return [undefined, error] as [undefined, E];
  }
}

export function clone<T>(recipe: (args: T) => void): (args: T) => T {
  return (args) => {
    const copy = JSON.parse(JSON.stringify(args)) as T;
    recipe(copy);
    return copy;
  };
}

export const buildGetUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}/${path}`;
