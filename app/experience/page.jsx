import React from "react";

export default function Experience() {
  return (
    <main id="experience">
      <section className="content">
        <h1 className="text-3xl font-bold mb-10">.Experience</h1>
        <h2 className="text-2xl font-medium mb-10">Education:</h2>
        <div className="flex mb-10">
          <div className="flex flex-col mr-5">
            <h3 className="text-l font-medium text-gray-500">2019 - 2023</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-medium">
              American University of Nigeria
            </h3>
            <p className="text-lg text-gray-500">B.Sc Computer Science</p>
            <p className="text-lg text-gray-500">with Conc. in software Engineering</p>
          </div>
        </div>
        <h2 className="text-2xl font-medium mb-10">Work:</h2>
        

        <div className="flex mb-10">
          <div className="flex flex-col mr-5">
            <h3 className="text-l font-medium text-gray-500">
              01/2023 - Present
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Cozsa Technologies(on contract)</h3>
            <h3 className="text-l text-gray-500">Full-stack developer</h3>
            <ul>
              <li className="text-l list-disc">
                Collaborated on mobile and web app projects using Flutter and
                React Native.
              </li>
              <li className="text-l list-disc">
                Engineered the backend infrastructure using Firebase services.
              </li>
              <li className="text-l list-disc">
                Conducted rigorous testing to ensure app store and Play Store
                readiness.
              </li>
              <li className="text-l list-disc">
                Maintained apps with the latest features and enhancements.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mb-10">
          <div className="flex flex-col mr-5">
            <h3 className="text-l font-medium text-gray-500">
              01/2023 - 09/2023{" "}
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">Epsilon Development Labs(on contract)</h3>
            <h3 className="text-l  text-gray-500">Mobile developer</h3>
            <ul>
              <li className="text-l list-disc">
                Built mobile apps with React Native.
              </li>
              <li className="text-l list-disc">Created pixel-perfect apps.</li>
              <li className="text-l list-disc">
                Verified that APIs were working correctly.
              </li>
              <li className="text-l list-disc">
                Collaborated with a team of developers to create high-quality
                apps.
              </li>
              <li className="text-l list-disc">
                Worked with stakeholders to gather requirements.
              </li>
              <li className="text-l list-disc">
                Tested apps for the App Store and Google Play.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
