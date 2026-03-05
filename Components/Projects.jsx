"use client";
import Image from "next/image";
import "../app/globals.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { project_data } from "../project_data";

const Projects = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />

      <section className="flex items-center gap-4 pt-2 text-white relative z-10">
        <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
        <h1 className="text-title font-heading tracking-tight">
          <span className="text-emerald-300 font-mono">&lt;</span>
          My Projects
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </section>

      <section className="flex justify-center items-center flex-col p-2 max-lg:gap-2">
        {project_data.map((e, index) => (
          <section
            className="card shadow-2xl rounded-xl flex lg:flex-row flex-col gap-4 md:p-4 md:m-4 p-2 m-2 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-fit xl:w-5/6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 relative overflow-hidden"
            key={index}
          >
            <section className="p-1 lg:w-1/2 max-w-fit flex items-center relative">
              <Image
                className="rounded-lg shadow-2xl relative z-10"
                src={`/projects/${e.image}`}
                alt={`${e.title} by Niroj Thapa`}
                priority={false}
                height={300}
                width={600}
                style={{
                  width: "600px",
                  height: "auto",
                }}
              />
            </section>

            <section className="p-1 lg:p-2 gap-1 flex flex-col lg:w-2/3 max-w-fit relative z-10">
              <h3 className="text-heading font-heading text-white tracking-tight leading-tight">
                {e.title}
              </h3>

              <section className="p-2 flex max-w-fit flex-wrap gap-2">
                {e.badges.map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className="bg-emerald-900/80 text-emerald-300 text-caption font-heading font-semibold me-2 px-3 py-1.5 rounded-lg min-w-fit backdrop-blur-sm border border-emerald-700/50 tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </section>

              <p className="text-body font-body text-gray-300 lg:p-2 leading-relaxed">
                {e.description}
              </p>

              <section className="lg:p-2 flex justify-end gap-4 max-lg:p-3">
                <a
                  href={e.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project source code on github"
                  className="flex flex-col items-center relative group"
                >
                  <PiGithubLogoFill className="bg-gray-800 w-11 h-11 rounded-xl text-white hover:bg-emerald-500 p-1.5 hover:text-white transition-all duration-300 relative z-10 shadow-lg" />
                  <span className="text-body-small font-heading pt-1.5 flex items-center tracking-wide">
                    Source Code <FaLink className="ml-2" />
                  </span>
                </a>
                <a
                  href={e.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="view live project"
                  className="flex flex-col items-center relative group"
                >
                  <CgWebsite className="bg-gray-800 w-11 h-11 rounded-xl text-emerald-400 hover:bg-emerald-500 p-1.5 hover:text-white transition-all duration-300 relative z-10 shadow-lg" />
                  <span className="text-body-small font-heading pt-1.5 flex items-center tracking-wide">
                    Live Project <FaExternalLinkAlt className="ml-2" />
                  </span>
                </a>
              </section>
            </section>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Projects;
