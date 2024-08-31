import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatDate(date) {
    // return date like "January 1, 2022"
    const now = new Date(date);
    const month = now.toLocaleString("id-ID", { month: "long" });
    const result = `${month} ${now.getDate()}, ${now.getFullYear()}`;
    return result;
}
