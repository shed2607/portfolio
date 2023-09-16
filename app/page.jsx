"use client";
import React, { useState, useEffect } from "react";
import { getScreenSize } from "./functions/screenutils";
import Small from "./small";
import Large from "./big";
import Medium from "./medium";
import Loading from "./loading";

export default function Home() {
  const [screenSize, setScreenSize] = useState(null); // Initialize with null
  const [isLoading, setIsLoading] = useState(true); // Initialize with true

  useEffect(() => {
    const initialSize = getScreenSize();
    setScreenSize(initialSize); // Set the initial screen size

    const handleResize = () => {
      const newSize = getScreenSize();
      setScreenSize(newSize);
    };

    // Add a delay of 3 seconds before turning off the loading screen
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds delay

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadingTimeout); // Clear the loading timeout when unmounting
    };
  }, []);

  // Conditionally render based on screen size and loading state
  if (isLoading) {
    return <Loading />;
  }

  if (screenSize === "large") {
    return <Large />;
  } else if (screenSize === "small") {
    return <Small />;
  } else {
    return <Medium />;
  }
}
