"use client";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { SiVite, SiTailwindcss, SiVercel } from "react-icons/si";
import "../app/globals.css";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      filter: "blur(10px)"
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

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateY: -90,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      y: -15,
      rotateY: 5,
      rotateX: 5,
      filter: "drop-shadow(0 20px 25px rgb(0 0 0 / 0.25))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -12,
      scale: 1.15,
      rotate: 10,
      filter: "drop-shadow(0 10px 20px rgb(0 0 0 / 0.25))",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      filter: "drop-shadow(0 25px 50px rgb(0 0 0 / 0.15))",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
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

  const skills = [
    { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "React", icon: FaReact, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "CSS3", icon: IoLogoCss3, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "Git", icon: FaGit, color: "text-red-500", bg: "bg-red-500/10" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", bg: "bg-blue-600/10" },
    { name: "Vite", icon: SiVite, color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Vercel", icon: SiVercel, color: "text-white", bg: "bg-gray-800/50" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: PiGithubLogoFill, 
      url: "https://github.com/Niroj-t", 
      color: "text-gray-400",
      hoverColor: "hover:text-white",
      bg: "hover:bg-gray-800"
    },
    { 
      name: "LinkedIn", 
      icon: RiLinkedinFill, 
      url: "https://linkedin.com/in/niroj-thapa", 
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      bg: "hover:bg-blue-500/20"
    },
    { 
      name: "Twitter", 
      icon: FaXTwitter, 
      url: "https://x.com/niroj_t", 
      color: "text-gray-400",
      hoverColor: "hover:text-white",
      bg: "hover:bg-gray-800"
    }
  ];

  return (
    <motion.main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-4 flex flex-col lg:gap-8 gap-6 bg-gray-900 relative overflow-hidden"
      id="about"
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

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Title Section */}
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
        <h1 className="text-title font-heading tracking-tight">
          <span className="text-emerald-300 font-mono">&lt;</span>
          About Me
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </motion.section>

      {/* Main Content */}
      <div className="flex lg:flex-row flex-col gap-8 relative z-10">
        {/* Left Content */}
        <motion.section 
          className="lg:w-2/3 flex flex-col gap-8"
          variants={itemVariants}
        >
          {/* Introduction */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h2 
              className="text-heading font-heading text-emerald-400 mb-4"
              whileHover={{ color: "#6ee7b7" }}
            >
              Hello! I'm Niroj Thapa
            </motion.h2>
            
            <div className="space-y-4">
              <motion.p className="text-body font-body text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-emerald-400 font-semibold font-heading">Frontend Developer</span> and 
                4th-year BIT student at Patan Multiple Campus, Lalitpur. 
                My journey in web development started with curiosity and has evolved into a deep passion for creating 
                digital experiences that matter.
              </motion.p>
              
              <motion.p className="text-body font-body text-gray-300 leading-relaxed">
                I specialize in modern web technologies including <span className="text-blue-400 font-semibold font-heading">React</span>, 
                <span className="text-emerald-400 font-semibold font-heading"> Next.js</span>, and 
                <span className="text-cyan-400 font-semibold font-heading"> Tailwind CSS</span>. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </motion.p>
              
              <motion.p className="text-body font-body text-gray-300 leading-relaxed">
              When I’m not coding, you’ll probably find me binge-watching a good series, 
              getting lost in a movie plot, or vibing to my favorite tunes. 
              </motion.p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-subheading font-heading text-white mb-6"
              whileHover={{ color: "#10b981" }}
            >
              Technologies & Tools
            </motion.h3>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className={`${skill.bg} backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer group`}
                    variants={skillVariants}
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <Icon className={`w-8 h-8 ${skill.color} transition-all duration-300 group-hover:scale-110`} />
                    <span className="text-caption font-body text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>

        {/* Right Sidebar */}
        <motion.aside 
          className="lg:w-1/3 flex flex-col gap-6"
          variants={itemVariants}
        >
          {/* Fun Fact */}
          <motion.div 
            className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-subheading font-heading text-emerald-400 mb-3"
              whileHover={{ color: "#6ee7b7" }}
            >
              💡 Fun Fact
            </motion.h3>
            <p className="text-body-small font-body text-gray-300 leading-relaxed">
            I’m basically a coding ninja powered by coffee, my code runs on caffeine and 
            creativity! When a bug appears, I don’t panic, I just blame the coffee machine 
            for not doing its job right. ☕
            </p>
          </motion.div>
        </motion.aside>
      </div>
    </motion.main>
  );
};

export default About;
