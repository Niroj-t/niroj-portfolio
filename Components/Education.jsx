"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import educationData from "../education_data";

const Education = () => {
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
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

  const particleVariants = {
    animate: {
      y: [-20, 20],
      x: [-15, 15],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const getEducationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'university':
        return FaGraduationCap;
      case 'college':
        return FaUniversity;
      case 'school':
        return FaUniversity;
      default:
        return FaGraduationCap;
    }
  };

  const getIconColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'university':
        return 'text-emerald-400';
      case 'college':
        return 'text-blue-400';
      case 'school':
        return 'text-purple-400';
      default:
        return 'text-emerald-400';
    }
  };

  return (
    <motion.main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      id="education"
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
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Particle effects */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 12}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{ delay: index * 0.5 }}
        />
      ))}

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
          My Education
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </motion.section>

      {/* Education Cards */}
      <motion.section 
        className="flex justify-center items-center flex-col p-2 max-lg:gap-4 lg:gap-6 relative z-10"
        variants={itemVariants}
      >
        {educationData.map((education, index) => {
          const IconComponent = getEducationIcon(education.type);
          const iconColor = getIconColor(education.type);
          
          return (
            <motion.div
              key={index}
              className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.15 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Hover effect overlay */}
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
                <motion.div 
                  className="flex-shrink-0 flex justify-center lg:justify-start"
                  variants={iconVariants}
                  whileHover="hover"
                >
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
                      <IconComponent className={`w-10 h-10 lg:w-12 lg:h-12 ${iconColor}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                    <div>
                      <motion.h3 
                        className="text-heading font-heading text-white leading-tight"
                        animate={{
                          color: hoveredCard === index ? "#10b981" : "#ffffff"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {education.title}
                      </motion.h3>
                      <motion.h4 
                        className="text-subheading font-heading text-emerald-400 mt-1"
                        whileHover={{ color: "#6ee7b7" }}
                      >
                        {education.institution}
                      </motion.h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-1">
                      <motion.div 
                        className="flex items-center gap-2 text-caption font-body text-gray-400"
                        whileHover={{ color: "#d1d5db" }}
                      >
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </motion.div>
                      {education.type && (
                        <motion.div 
                          className="flex items-center gap-2 text-caption font-body text-gray-400"
                          whileHover={{ color: "#d1d5db" }}
                        >
                          <span className="capitalize">{education.type}</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {education.description && (
                    <motion.p 
                      className="text-body font-body text-gray-300 leading-relaxed"
                      animate={{
                        color: hoveredCard === index ? "#d1d5db" : "#9ca3af"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {education.description}
                    </motion.p>
                  )}

                  {/* Achievements or Highlights */}
                  {education.highlights && education.highlights.length > 0 && (
                    <div className="space-y-2">
                      <motion.h5 
                        className="text-body-small font-heading text-emerald-400 font-semibold"
                        whileHover={{ color: "#6ee7b7" }}
                      >
                        Key Highlights:
                      </motion.h5>
                      <ul className="space-y-1">
                        {education.highlights.map((highlight, idx) => (
                          <motion.li 
                            key={idx}
                            className="text-body-small font-body text-gray-400 flex items-start gap-2"
                            whileHover={{ color: "#d1d5db", x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-emerald-400 text-xs mt-1">▸</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* GPA or Grade */}
                  {education.gpa && (
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/30"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.3)" 
                      }}
                    >
                      <span className="text-caption font-heading font-semibold">GPA: {education.gpa}</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.section>
    </motion.main>
  );
};

export default Education; 