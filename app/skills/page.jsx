"use client";
import React, { useState, useEffect } from "react";

export default function Skills() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1015); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main id="skills">
      <section className="content">
        <h1 className="text-3xl font-bold mb-14">.Skills</h1>
        <div className="flex max-w-max">
          <ul className="mx-10">
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Flutter</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.React Native</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Next.js</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Nuxt.js</li>
            
          </ul>
          <ul className="mx-10">
          <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Firebase</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Node.js</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.MongoDB</li>
            <li className="border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5">.Postman</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
