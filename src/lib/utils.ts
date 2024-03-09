import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isServer = typeof window === "undefined";

export const getLastId = (data: Map<number, any>) => {
  return Math.max(...Array.from(data.keys())) + 1;
};

export const randomNo = () => (Math.floor(Math.random() * 899999) + 100000).toString();

export const generateAccessToken = (id: number): string => jwt.sign({ id }, "access");
export const generateRefreshToken = (id: number): string => jwt.sign({ id }, "refresh");
export const verifyAccessToken = (token: string): any => {
  try {
    return jwt.verify(token, "access");
  } catch {
    return false;
  }
};
export const verifyRefreshToken = (token: string): any => {
  try {
    return jwt.verify(token, "refresh");
  } catch {
    return false;
  }
};
