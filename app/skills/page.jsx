import React from "react";

export default function Skills() {
  const skills = [
    { name: ".Flutter" },
    { name: ".React Native" }, 
    { name: ".Next.js" }, 
    { name: ".Nuxt.js" }, 
    { name: ".Firebase" },
    { name: ".Supabase" },
    { name: ".MongoDB" }, 
    { name: ".Postman" }, 
    { name: ".Node.js" },
  ];

  return (
    <main id="skills">
      <section className="content">
        <h1 className="text-3xl font-bold mb-14">🚀 Skills</h1>
        <div >
          <Skill posts={skills} />
        </div>
      </section>
    </main>
  );
}

const Skill = ({ posts }) => {
  return (
    <div className="flex flex-wrap w-full">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex max-w-xl flex-col bg-gray-400 mx-10 my-5 p-2 rounded-xl items-center"
        >
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {post.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
