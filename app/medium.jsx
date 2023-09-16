import React from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/footer";
import Skills from "./skills/page";
import Me from "./me/page";
import Experience from "./experience/page";

export default function Medium() {
  return (
    <div className="flex flex-col lg:flex-row mx-16">
        <>
          <header className=" top-0 flex  w-1/2 flex-col justify-between ">
            <div className="flex">
              <div>
                <h1 className="text-3xl font-bold mb-5">Hi there, I'm Oluwaseun</h1>
                <h2 className="text-xl mb-3">Full-stack developer.</h2>
              </div>
              <div className="ml-3">
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
        </div>
  )
}
