"use client";
import Image from "next/image";
import "../app/globals.css";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { project_data } from "../project_data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      filter: "blur(15px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      rotateX: 5,
      rotateY: 5,
      filter: "drop-shadow(0 25px 50px rgb(0 0 0 / 0.25))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -12,
      scale: 1.1,
      rotateY: 5,
      filter: "drop-shadow(0 10px 20px rgb(0 0 0 / 0.25))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      rotateY: 5,
      filter: "brightness(1.1) contrast(1.1)",
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.2,
      y: -5,
      transition: { 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          scale: 1.4,
          opacity: [0.1, 0.4, 0.1],
          rotate: 180
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.section 
        className="flex items-center gap-4 pt-2 text-white relative z-10"
        variants={titleVariants}
      >
        <motion.hr 
          className="h-1 w-12 bg-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight font-sans">
          <span className="text-emerald-400 font-mono">&lt;</span>
          My Projects
          <span className="text-emerald-400 font-mono"> /&gt;</span>
        </h1>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="flex justify-center items-center flex-col p-2 max-lg:gap-2"
        variants={itemVariants}
      >
        {project_data.map((e, index) => (
          <motion.section
            className="card shadow-2xl rounded-xl flex lg:flex-row flex-col gap-4 md:p-4 md:m-4 p-2 m-2 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-fit xl:w-5/6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 relative overflow-hidden"
            key={index}
            variants={projectCardVariants}
            whileHover="hover"
            transition={{ delay: index * 0.15 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {/* Hover effect overlay */}
            {hoveredProject === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Image Section */}
            <motion.section 
              className="p-1 lg:w-1/2 max-w-fit flex items-center relative"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-xl"
                animate={{
                  scale: hoveredProject === index ? 1.2 : 1,
                  opacity: hoveredProject === index ? 0.3 : 0
                }}
                transition={{ duration: 0.3 }}
              />
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
            </motion.section>

            {/* Detail Section */}
            <section className="p-1 lg:p-2 gap-1 flex flex-col lg:w-2/3 max-w-fit relative z-10">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight"
                animate={{
                  color: hoveredProject === index ? "#10b981" : "#ffffff"
                }}
                transition={{ duration: 0.3 }}
              >
                {e.title}
              </motion.h3>
              
              {/* Badges */}
              <section className="p-2 flex max-w-fit flex-wrap gap-2">
                {e.badges.map((badge, badgeIndex) => (
                  <motion.span
                    key={badgeIndex}
                    className="bg-emerald-900/80 text-emerald-300 text-sm lg:text-base font-semibold me-2 px-3 py-1.5 rounded-lg min-w-fit backdrop-blur-sm border border-emerald-700/50 tracking-wide"
                    variants={badgeVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ 
                      delay: index * 0.15 + badgeIndex * 0.1, 
                      duration: 0.4 
                    }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </section>
              
              {/* Project Description */}
              <motion.p 
                className="lg:text-lg text-gray-300 lg:p-2 leading-relaxed font-medium"
                animate={{
                  color: hoveredProject === index ? "#d1d5db" : "#9ca3af"
                }}
                transition={{ duration: 0.3 }}
              >
                {e.description}
              </motion.p>
              
              {/* Project Buttons */}
              <section className="lg:p-2 flex justify-end gap-4 max-lg:p-3">
                {/* Github */}
                <motion.a
                  href={e.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project source code on github"
                  className="flex flex-col items-center relative group"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                    animate={{
                      scale: 1.3,
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <PiGithubLogoFill className="bg-gray-800 w-11 h-11 rounded-xl text-white hover:bg-emerald-500 p-1.5 hover:text-white transition-all duration-300 relative z-10 shadow-lg" />
                  <span className="text-gray-300 text-sm pt-1.5 flex items-center font-medium tracking-wide">
                    Source Code <FaLink className="ml-2" />
                  </span>
                </motion.a>
                
                {/* Live Project */}
                <motion.a
                  href={e.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="view live project"
                  className="flex flex-col items-center relative group"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute inset-0 bg-emerald-500/50 rounded-xl blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <CgWebsite className="bg-gray-800 w-11 h-11 rounded-xl text-emerald-400 hover:bg-emerald-500 p-1.5 hover:text-white transition-all duration-300 relative z-10 shadow-lg" />
                  <span className="text-gray-300 text-sm pt-1.5 flex items-center font-medium tracking-wide">
                    Live Project <FaExternalLinkAlt className="ml-2" />
                  </span>
                </motion.a>
              </section>
            </section>
          </motion.section>
        ))}
      </motion.section>
    </motion.main>
  );
};
export default Projects;
