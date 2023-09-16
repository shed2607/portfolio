"use client";
import React, { useState, useEffect } from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Skills from "./skills/page";
import Me from "./me/page";
import Experience from "./experience/page";

export default function Home() {
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
    <div className="flex flex-col lg:flex-row">
      {!isSmallScreen && (
        <>
          <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-12">
            <div>
              <h1 className="text-5xl font-bold mb-5">
                Hi there, I'm Oluwaseun
              </h1>
              <h2 className="text-3xl mb-3">Full-stack developer.</h2>
              <p>
                I'm a <span className="special">full-stack developer</span> with
                a passion for building beautiful user interfaces and scalable
                backend systems.
              </p>
              <NavBar />
              <Footer />
            </div>
          </header>
          <main className="w-full lg:w-1/2">
            <Me />
            <About />
            <Experience />
            <Skills />
            <Projects />
          </main>
        </>
      )}
      {isSmallScreen && (
        <>
          <header className=" top-0 flex  w-1/2 flex-col justify-between py-12">
            <div className="flex">
              <div>
                <h1 className="text-3xl font-bold mb-5">Oluwaseun Adeniyi</h1>
                <h2 className="text-xl mb-3">Full-stack developer.</h2>
              </div>
              <div className="ml-auto">
                <Footer />
              </div>
            </div>
          </header>
          <main className="w-full ">
            <Me />
            <About />
            <Experience />
            <Skills />
            <Projects />
          </main>
          <footer>
            <p className="my-10">
              Copyright © 2023 by Oluwaseun Adeniyi. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
