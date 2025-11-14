import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenName = (name: string): string => {
  return name
    .replace(/Mark/gi, "MK")
    .replace(/Wireless/gi, "")
    .replace(/Headphones/gi, "")
    .replace(/Earphones/gi, "")
    .replace(/Speaker/gi, "")
    .trim()
    .replace(/\s+/g, " ");
};