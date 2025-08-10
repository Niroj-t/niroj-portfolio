"use client";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Niroj_Thapa_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.5,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.08,
      y: -8,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 400
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
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

  const gradientVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.main 
      className="min-h-[calc(100svh-5.03rem)] p-6 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        variants={gradientVariants}
        animate="animate"
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

      {/* Content */}
      <section className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-16 gap-8 relative z-10 lg:mt-16 mt-12">
        {/* Text content */}
        <motion.section 
          className="flex flex-col gap-6 lg:w-1/2"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col gap-4"
            variants={titleVariants}
          >
            <motion.h1 
              className="text-hero font-heading text-white leading-tight"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-emerald-400 font-heading"
                whileHover={{ 
                  color: "#6ee7b7",
                  transition: { duration: 0.2 }
                }}
              >
                Niroj Thapa
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-subtitle font-heading text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              An enthusiastic frontend developer
            </motion.h2>
            
            <motion.p 
              className="text-body font-body text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I'm a passionate 4th-year BIT student at Patan Multiple Campus, 
              specializing in modern web development with React, Next.js, and cutting-edge technologies. 
              I love creating digital experiences that make a difference.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-row gap-4 mt-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-400"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <IoDocumentText className="w-5 h-5" />
              <span className="text-body-small font-heading">Download Resume</span>
            </motion.button>

            <Link href="#contact">
              <motion.button
                className="flex items-center gap-3 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-heading font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <IoIosMail className="w-5 h-5" />
                <span className="text-body-small font-heading">Contact Me</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Image */}
        <motion.section 
          className="lg:w-1/2 flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <Image
              src="/profile.jpg"
              alt="Niroj Thapa - Developer Profile"
              width={500}
              height={500}
              className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-emerald-500/30 object-cover"
              priority
            />
          </motion.div>
        </motion.section>
      </section>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={itemVariants}
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
