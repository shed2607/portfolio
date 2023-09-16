"use client";

const isSmall = 640;
const isMedium = 1007;

export function getScreenSize() {
  if (typeof window !== "undefined") {
    // Check if `window` is defined (i.e., in a browser environment)
    const windowWidth = window.innerWidth;
    
    if (windowWidth < isSmall) {
      return "small";
    } else if (windowWidth < isMedium) {
      return "medium";
    } else {
      return "large";
    }
  } else {
    // Handle the case when `window` is not defined (e.g., server-side rendering)
    return "unknown";
  }
}
