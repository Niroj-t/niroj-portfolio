"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../app/globals.css";

const experienceData = [
  {
    role: "Frontend Developer - Internship",
    techStack: ["Next.js 16", "React 19", "TypeScript"],
    duration: "Nov 2025 – Feb 2026",
    company: "Proshore Nepal Pvt. Ltd.",
    highlights: [
      "Developed a survey platform for livestock/poultry data with image-based capture, OCR extraction, and editable verification workflows.",
      "Implemented image scanning workflow: file/camera uploads, canvas cropping, quality checks, and overlay verification for OCR results.",
      "Built inline-editable tables with confidence-based highlighting, filters, pagination, and Excel (XLSX) export for survey data management.",
      "Integrated authentication and security using Better Auth; ensured code quality with React Hook Form + Yup, Biome, and Husky."
    ]
  }
];

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      id="experience"
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

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
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
          Experience
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </motion.section>

      {/* Experience Cards */}
      <motion.section 
        className="flex justify-center items-center flex-col p-2 max-lg:gap-4 lg:gap-6 relative z-10"
        variants={itemVariants}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: index * 0.15 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {hoveredCard === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="flex lg:flex-row flex-col gap-6 relative z-10">
              {/* Icon Section */}
              <motion.div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
                    animate={{
                      scale: hoveredCard === index ? 1.3 : 1,
                      opacity: hoveredCard === index ? 0.4 : 0.2
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-800/80 rounded-full flex items-center justify-center border-2 border-emerald-500/30 relative z-10">
                    <FaBriefcase className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-400" />
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                  <div>
                    <motion.h3 
                      className="text-heading font-heading text-white leading-tight"
                      animate={{
                        color: hoveredCard === index ? "#10b981" : "#ffffff"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.h4 
                      className="text-subheading font-heading text-emerald-400 mt-1"
                      whileHover={{ color: "#6ee7b7" }}
                    >
                      {exp.project}
                    </motion.h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-900/80 text-emerald-300 text-caption font-heading font-semibold px-3 py-1 rounded-lg backdrop-blur-sm border border-emerald-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-1">
                    <motion.div 
                      className="flex items-center gap-2 text-caption font-body text-gray-400"
                      whileHover={{ color: "#d1d5db" }}
                    >
                      <FaCalendarAlt className="w-4 h-4 flex-shrink-0" />
                      <span>{exp.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-caption font-body text-gray-400"
                      whileHover={{ color: "#d1d5db" }}
                    >
                      <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" />
                      <span>{exp.company}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <motion.h5 
                    className="text-body-small font-heading text-emerald-400 font-semibold"
                    whileHover={{ color: "#6ee7b7" }}
                  >
                    Key Contributions:
                  </motion.h5>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li 
                        key={idx}
                        className="text-body-small font-body text-gray-400 flex items-start gap-2"
                        whileHover={{ color: "#d1d5db", x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-emerald-400 text-xs mt-1 flex-shrink-0">▸</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default Experience;