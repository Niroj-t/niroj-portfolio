"use client";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Niroj_Thapa_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] p-6 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <section className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-16 gap-8 relative z-10 lg:mt-16 mt-12">
        <section className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="text-hero font-heading text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-emerald-400 font-heading">Niroj Thapa</span>
            </h1>
            <h2 className="text-subtitle font-heading text-gray-300 leading-relaxed">
              An enthusiastic frontend developer
            </h2>
            <p className="text-body font-body text-gray-400 leading-relaxed max-w-2xl">
              I&apos;m a passionate 4th-year BIT student at Patan Multiple Campus,
              specializing in modern web development with React, Next.js, and cutting-edge technologies.
              I love creating digital experiences that make a difference.
            </p>
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <button
              type="button"
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-400"
            >
              <IoDocumentText className="w-5 h-5" />
              <span className="text-body-small font-heading">Download Resume</span>
            </button>
            <Link href="#contact">
              <button
                type="button"
                className="flex items-center gap-3 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-heading font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <IoIosMail className="w-5 h-5" />
                <span className="text-body-small font-heading">Contact Me</span>
              </button>
            </Link>
          </div>
        </section>

        <section className="lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl" />
            <Image
              src="/profile.jpg"
              alt="Niroj Thapa - Developer Profile"
              width={500}
              height={500}
              className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-emerald-500/30 object-cover"
              priority
            />
          </div>
        </section>
      </section>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
