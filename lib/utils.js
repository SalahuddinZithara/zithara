import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function splitArray(arr, chunkSizes) {
  const result = [];
  let startIndex = 0;
  for (const size of chunkSizes) {
    result.push(arr.slice(startIndex, startIndex + size));
    startIndex += size;
  }
  return result;
}

export function equalSplitArray(arr, numParts) {
  const result = [];
  const size = Math.ceil(arr.length / numParts);
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
