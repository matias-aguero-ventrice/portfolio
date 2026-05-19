import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* Helper estandar de shadcn para mergear clases de Tailwind */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
