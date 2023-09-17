import React from "react";
import "./style.css";

export default function About() {
  return (
    <main id="about">
      {" "}
      <section className="content">
        <h1 className="text-3xl font-bold">.About</h1>
        <p className="p">
          I'm a freelance <span className="special"> software developer </span>
          with a focus on helping startups and businesses adapt to the
          ever-changing tech landscape. My expertise covers mobile and web app
          development.
        </p>
        <p className="p">
          For mobile apps, I specialize in using <span className="special">Flutter</span> and <span className="special">React Native</span> to
          create efficient, user-friendly cross-platform solutions. For web
          development, I rely on <span className="special">Next.js</span> and <span className="special">Nuxt.js</span> to craft responsive
          websites. When needed, I seamlessly combine <span className="special">Flutter</span> and <span className="special">Next.js</span> for
          comprehensive web applications.
        </p>
        <p className="p">
        <span className="special">Firebase</span> is my go-to tool, offering real-time data storage,
          authentication, and hosting capabilities to boost functionality and
          performance in all my projects. I stay updated with industry trends to
          ensure my skills are cutting-edge.
        </p>
        <p className="p">
          With a track record of delivering high-quality applications, I excel
          in collaborative, cross-functional teams. I bring expertise from both
          professional and academic experiences, dedicated to helping businesses
          succeed in our tech-driven world.
        </p>
        <p className="p">
          Let's work <span className="special"> together</span> and excel in tailored software development for
          your unique business needs.
        </p>
      </section>
    </main>
  );
}
