"use client";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiVite, SiTailwindcss, SiVercel } from "react-icons/si";
import "../app/globals.css";
import { SiTypescript, SiShadcnui, SiJira } from "react-icons/si";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "React", icon: FaReact, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-gray-800/50" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "CSS3", icon: IoLogoCss3, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Git", icon: FaGit, color: "text-red-500", bg: "bg-red-500/10" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", bg: "bg-blue-600/10" },
    { name: "Jira", icon: SiJira, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Shadcn/ui", icon: SiShadcnui, color: "text-white", bg: "bg-gray-800/50" },
    { name: "Vite", icon: SiVite, color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Vercel", icon: SiVercel, color: "text-white", bg: "bg-gray-800/50" },

  ];

  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-4 flex flex-col lg:gap-8 gap-6 bg-gray-900 relative overflow-hidden"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Title Section */}
      <section className="flex items-center gap-4 pt-2 text-white relative z-10">
        <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
        <h1 className="text-title font-heading tracking-tight">
          <span className="text-emerald-300 font-mono">&lt;</span>
          About Me
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </section>

      {/* Main Content */}
      <div className="flex lg:flex-row flex-col gap-8 relative z-10">
        <section className="lg:w-2/3 flex flex-col gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg">
            <h2 className="text-heading font-heading text-emerald-400 mb-4">
              Hello! I&apos;m Niroj Thapa
            </h2>
            <div className="space-y-4">
              <p className="text-body font-body text-gray-300 leading-relaxed">
                I&apos;m a passionate <span className="text-emerald-400 font-semibold font-heading">Frontend Developer</span> and
                4th-year BIT student at Patan Multiple Campus, Lalitpur.
                My journey in web development started with curiosity and has evolved into a deep passion for creating
                digital experiences that matter.
              </p>
              <p className="text-body font-body text-gray-300 leading-relaxed">
                I specialize in modern web technologies including <span className="text-blue-400 font-semibold font-heading">React</span>,
                <span className="text-emerald-400 font-semibold font-heading"> Next.js</span>, and
                <span className="text-cyan-400 font-semibold font-heading"> Tailwind CSS</span>.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-body font-body text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll probably find me binge-watching a good series,
                getting lost in a movie plot, or vibing to my favorite tunes.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg">
            <h3 className="text-subheading font-heading text-white mb-6">
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`${skill.bg} backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer group`}
                  >
                    <Icon className={`w-8 h-8 ${skill.color} transition-all duration-300 group-hover:scale-110`} />
                    <span className="text-caption font-body text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="lg:w-1/3 flex flex-col gap-6">
          <div className="bg-linear-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 shadow-lg">
            <h3 className="text-subheading font-heading text-emerald-400 mb-3">
              💡 Fun Fact
            </h3>
            <p className="text-body-small font-body text-gray-300 leading-relaxed">
              I&apos;m basically a coding ninja powered by coffee, my code runs on caffeine and
              creativity! When a bug appears, I don&apos;t panic, I just blame the coffee machine
              for not doing its job right. ☕
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default About;
