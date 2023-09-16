"use client";
import React, { useState, useEffect } from "react";
import { getScreenSize } from "../functions/screenutils";
import BigFooter from "./footer/big";
import MediumFooter from "./footer/mideum";
import SmallFooter from "./footer/small";

export default function Footer() {
  //const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [screenSize, setScreenSize] = useState(null); // Initialize with null

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(getScreenSize());
    });
  }
  );
  
  if (screenSize === 'large'){
    return <BigFooter/>
  } else if (screenSize === 'medium'){
    return <MediumFooter/>
  } else {
    return <SmallFooter/>
  }
}
