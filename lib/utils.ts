import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fetch data from your local API endpoint
export async function getData(email: any) {
  const userEmail = {
    user_email: email,
  }; // Replace this with the actual user email

  const response = await fetch(`/api/getapps`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Pass the user email as part of the request body
    body: JSON.stringify(userEmail),
    cache: "no-store",
  });

  return response.json();
}
