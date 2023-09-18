import React from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Skills from "./skills/page";
import Me from "./me/page";
import Experience from "./experience/page";

export default function Large() {
  return (
    <div className="flex flex-col lg:flex-row mx-32">
      <>
        <header className="sticky top-0 flex max-h-screen flex-col justify-between py-12 px-24">
          <div>
            <h1 className="text-5xl font-bold mb-5">Hi there, I'm Oluwaseun</h1>
            <h2 className="text-3xl mb-3">Full-stack developer.</h2>
            <p>
              I'm a <span className="special">full-stack developer</span> with a
              passion for building beautiful user interfaces and scalable
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
          <footer>
            <p className="my-10">
              Copyright © 2023 by Oluwaseun Adeniyi. All rights reserved.
            </p>
          </footer>
        </main>
      </>
    </div>
  );
}
