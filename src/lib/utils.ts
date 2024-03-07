import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getListId(data: Map<number, any>) {
  return Math.max(...data.keys()) + 1;
}
