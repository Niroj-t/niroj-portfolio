'use client'
import React, { useState } from 'react';
import { FaUserGraduate, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import educationData from "../education_data";
import { motion } from "framer-motion";

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      y: 40,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
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
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 150
      }
    },
    hover: { 
      scale: 1.2,
      rotateY: 15,
      filter: "drop-shadow(0 20px 25px rgb(0 0 0 / 0.25))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getEducationIcon = (type) => {
    switch(type) {
      case 'university':
        return <FaUniversity className="text-2xl text-blue-400" />;
      case 'college':
        return <FaGraduationCap className="text-2xl text-purple-400" />;
      case 'school':
        return <IoIosSchool className="text-2xl text-emerald-400" />;
      default:
        return <FaUserGraduate className="text-2xl text-purple-400" />;
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'university':
        return 'bg-blue-500/20';
      case 'college':
        return 'bg-purple-500/20';
      case 'school':
        return 'bg-emerald-500/20';
      default:
        return 'bg-purple-500/20';
    }
  };

  return (
    <motion.main
      className="min-h-[calc(90svh-5.0rem)] lg:p-6 p-1 justify-between items-center bg-gray-900 relative overflow-hidden"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          scale: 1.3,
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />

      {/* Header */}
      <motion.section 
        className="flex items-center gap-4 pt-3 text-white relative z-10"
        variants={titleVariants}
      >
        <motion.hr 
          className="h-1 w-12 bg-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <p className="text-xl lg:text-2xl font-medium">
          &lt;Education &nbsp;/&gt;
        </p>
      </motion.section>

      {/* Education Cards */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-6 relative z-10"
        variants={itemVariants}
      >
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: idx * 0.1 }}
            onHoverStart={() => setHoveredCard(idx)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {/* Hover effect overlay */}
            {hoveredCard === idx && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Floating particles effect */}
            {hoveredCard === idx && (
              <>
                <motion.div
                  className="absolute top-2 left-2 w-2 h-2 bg-emerald-400 rounded-full"
                  variants={particleVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full"
                  variants={particleVariants}
                  animate="animate"
                  style={{ animationDelay: "0.5s" }}
                />
                <motion.div
                  className="absolute top-4 right-3 w-1 h-1 bg-blue-400 rounded-full"
                  variants={particleVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                />
              </>
            )}

            {/* Icon and Type */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 bg-gray-800/50 rounded-lg relative"
                variants={iconVariants}
                whileHover="hover"
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-lg blur-xl ${getIconColor(item.type || 'default')}`}
                  animate={{
                    scale: hoveredCard === idx ? 1.5 : 1,
                    opacity: hoveredCard === idx ? 0.4 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                {getEducationIcon(item.type || 'default')}
              </motion.div>
              <motion.span 
                className="text-sm font-medium text-gray-400 uppercase tracking-wide"
                animate={{
                  color: hoveredCard === idx ? "#10b981" : "#9ca3af"
                }}
                transition={{ duration: 0.3 }}
              >
                {item.type || 'Education'}
              </motion.span>
            </div>

            {/* Title */}
            <motion.h3 
              className="text-xl font-semibold text-white mb-2"
              animate={{
                color: hoveredCard === idx ? "#10b981" : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>

            {/* Institution */}
            <motion.p 
              className="text-gray-300 mb-3"
              animate={{
                color: hoveredCard === idx ? "#d1d5db" : "#9ca3af"
              }}
              transition={{ duration: 0.3 }}
            >
              {item.institution}
            </motion.p>

            {/* Duration */}
            <motion.div 
              className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-3 border border-emerald-500/30"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(16, 185, 129, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              {item.duration}
            </motion.div>

            {/* Description */}
            {item.description && (
              <motion.p 
                className="text-gray-400 text-sm leading-relaxed"
                animate={{
                  color: hoveredCard === idx ? "#d1d5db" : "#9ca3af"
                }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Education; 