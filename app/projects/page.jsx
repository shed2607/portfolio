import React from "react";
import SwiperFunc from "../components/swiper";

export default function Projects() {
  return (
    <main  id="projects" >
      {" "}
      <section className="content h-screen">
      <h1 className="text-3xl font-bold">.Projects</h1>
        <div className="container mx-auto">
          <SwiperFunc />
        </div>
        </section>
    </main>
  );
}
