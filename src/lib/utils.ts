import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStatus(status: string) {
  const map: Record<string, { label: string; color: string }> = {
    completed: { label: "Completado", color: "text-emerald-400 bg-emerald-400/10" },
    "in-progress": { label: "En desarrollo", color: "text-blue-400 bg-blue-400/10" },
    beta: { label: "Beta", color: "text-amber-400 bg-amber-400/10" },
  };
  return map[status] ?? { label: status, color: "text-gray-400 bg-gray-400/10" };
}
