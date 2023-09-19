import React from "react";

export default function Skills() {
  const skills = [
    { name: ".Flutter", left: "10%", top: "20%" },
    { name: ".React Native", left: "40%", top: "40%" }, // Increased space to 40%
    { name: ".Next.js", left: "70%", top: "60%" }, // Increased space to 70%
    { name: ".Nuxt.js", left: "100%", top: "80%" }, // Increased space to 100%
    { name: ".Firebase", left: "10%", top: "70%" },
    { name: ".Supabase", left: "40%", top: "50%" },
    { name: ".MongoDB", left: "70%", top: "30%" }, // Increased space to 70%
    { name: ".Postman", left: "100%", top: "10%" }, // Increased space to 100%
  ];

  return (
    <main id="skills">
      <section className="content">
        <h1 className="text-3xl font-bold mb-14">🚀 Skills</h1>
        <div className="relative max-w-max">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative border-4 rounded-xl p-1 border-white bg-white text-gray-700 mb-5"
              style={{ left: skill.left, top: skill.top }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
