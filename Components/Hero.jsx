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
      background: [
        "linear-gradient(45deg, #10b981, #059669, #047857)",
        "linear-gradient(45deg, #047857, #065f46, #064e3b)",
        "linear-gradient(45deg, #064e3b, #10b981, #059669)"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse bg-gray-900 justify-between items-center gap-8 relative overflow-hidden px-6 lg:px-12"
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{ rotate: 10 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Left Content Section */}
      <motion.section 
        className="flex-1 max-w-2xl min-h-xl p-6 flex flex-col gap-6 m-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="lg:text-4xl text-3xl font-medium text-white"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-block"
          >
            👋
          </motion.span> Hi, I am
        </motion.p>
        
        <motion.h1 
          className="lg:text-6xl text-5xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Niroj Thapa
        </motion.h1>
        
        <motion.h2 
          className="lg:text-5xl text-3xl font-medium text-gray-400"
          variants={itemVariants}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p 
          className="text-gray-500 max-w-2xl text-lg leading-relaxed"
          variants={itemVariants}
        >
          An enthusiastic frontend developer passionate about crafting responsive, user-friendly web interfaces with clean, modern design and seamless functionality.
        </motion.p>
        
        {/* Buttons */}
        <motion.section 
          className="flex flex-wrap gap-4 py-8"
          variants={itemVariants}
        >
          <Link href="mailto:tniroj35@gmail.com">
            <motion.button 
              className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 border-0 rounded-lg text-white outline-none focus:ring-4 focus:ring-emerald-500/30 shadow-2xl transform transition-all duration-300 font-medium" 
              aria-label="Contact Button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                animate={{ rotate: 10 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              >
                <IoIosMail size={24} />
              </motion.div>
              <span className="ml-2 md:text-lg">Email Me</span>
            </motion.button>
          </Link>

          <motion.button 
            className="flex items-center px-6 py-3 bg-transparent border-2 border-emerald-500/50 hover:border-emerald-400 rounded-lg text-emerald-400 hover:text-emerald-300 outline-none focus:ring-4 focus:ring-emerald-500/30 shadow-2xl transform transition-all duration-300 font-medium group" 
            aria-label="Download Resume Button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleDownloadResume}
          >
            <motion.div
              animate={{ rotate: 10 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            >
              <IoDocumentText size={24} />
            </motion.div>
            <span className="ml-2 md:text-lg">Download Resume</span>
          </motion.button>
        </motion.section>
      </motion.section>

      {/* Right Profile Image Section */}
      <motion.section 
        className="flex-shrink-0 relative z-5 flex items-center justify-center mr-8"
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ 
          duration: 1, 
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Profile Image Container */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Profile Image */}
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20"
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.6)",
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/profile.jpg"
              alt="Niroj Thapa - Frontend Developer"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                const fallback = e.target.parentElement.querySelector('.profile-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback Profile Placeholder */}
            <div className="profile-fallback hidden absolute inset-0 flex flex-col items-center justify-center text-emerald-400">
              <div className="w-24 h-24 bg-emerald-500/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold">NT</span>
              </div>
              <p className="text-sm font-medium text-center px-4">Add your profile photo to /public/profile.jpg</p>
            </div>
          </motion.div>

          {/* Floating Elements Around Profile */}
          <motion.div
            className="absolute -top-6 -right-6 w-8 h-8 bg-emerald-400 rounded-full opacity-80"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full opacity-80"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-12 w-4 h-4 bg-purple-400 rounded-full opacity-80"
            animate={{
              x: [0, 12, 0],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.section>
    </main>
  );
};
export default Hero;
