"use client";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Niroj_Thapa_Resume .pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse bg-gray-900 justify-center items-center gap-4"
    >
      <section className="max-w-4xl min-h-xl p-6 flex flex-col gap-4 m-4">
        <p className="lg:text-4xl text-4xl font-medium text-white">👋 Hi, I am</p>
        <h1 className="lg:text-6xl text-6xl font-bold text-emerald-700">
          Niroj Thapa
        </h1>
        <h2 className="lg:text-6xl text-4xl font-medium text-gray-400">
          I build things for the web.
        </h2>
        <p className="text-gray-500">
        An enthusiastic frontend developer passionate about crafting responsive, user-friendly web interfaces with clean, modern design and seamless functionality.
        </p>
        
          {/* Buttons */}
          <section className="flex gap-6 py-14">
            <Link href="mailto:tniroj35@gmail.com">
              <button className="flex items-center px-3 py-2 bg-gray-900 border border-green-400 hover:border-b-4 hover:border-r-4 hover:border-green-400 hover:-translate-y-1.5 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-all duration-300" aria-label="Contact Button">
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Email Me</span>
              </button>
            </Link>

            <button className="flex items-center px-3 py-2 bg-gray-900 border border-green-400 hover:border-b-4 hover:border-r-4 hover:border-green-400 hover:-translate-y-1.5 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-all duration-300" onClick={handleDownloadResume} aria-label="Resume Download Button">
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
    </main>
  );
};
export default Hero;
