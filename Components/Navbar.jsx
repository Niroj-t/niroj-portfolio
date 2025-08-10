"use client";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      y: -5,
      rotateY: 5,
      filter: "drop-shadow(0 10px 20px rgb(0 0 0 / 0.25))",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const socialVariants = {
    hover: { 
      y: -12,
      scale: 1.2,
      rotateY: 10,
      filter: "drop-shadow(0 15px 25px rgb(0 0 0 / 0.3))",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const navContainerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    visible: { 
      y: 0, 
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navItems = [
    { href: "#", label: "Home", emoji: "🏠" },
    { href: "#about", label: "About", emoji: "👨‍💻" },
    { href: "#projects", label: "Projects", emoji: "💼" },
    { href: "#education", label: "Education", emoji: "🎓" },
    { href: "#blogs", label: "Blogs", emoji: "📝" },
    { href: "#contact", label: "Contact", emoji: "📧" }
  ];

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
      }`}
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)",
            "linear-gradient(90deg, rgba(147, 51, 234, 0.05) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(16, 185, 129, 0.05) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="flex items-center justify-between p-4 px-4 sm:px-6 lg:px-8 xl:px-40 relative z-10">
        {/* Brand Section */}
        <motion.section 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h1 
              className="text-xl lg:text-2xl font-bold text-white font-heading tracking-tight"
              whileHover={{ color: "#10b981" }}
            >
              Niroj Thapa
            </motion.h1>
            <motion.span 
              className="text-xs lg:text-sm text-emerald-400 font-body tracking-wide"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
            </motion.span>
          </motion.div>
        </motion.section>

        {/* Center Section - Navigation (Desktop) */}
        <section className="hidden lg:flex justify-center items-center flex-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <ul className="flex gap-2 text-gray-300">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  className="cursor-pointer relative group"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <a 
                    href={item.href} 
                    aria-label={`Goto ${item.label} Section`}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
                      hoveredIndex === index 
                        ? 'text-emerald-400 bg-emerald-500/20 shadow-lg' 
                        : 'hover:text-emerald-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right Section - Social Links */}
        <section className="flex items-center gap-3">
          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="https://www.linkedin.com/in/nirojthapa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg border border-gray-700/50"
              aria-label="Visit LinkedIn Profile"
              variants={socialVariants}
              whileHover="hover"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Niroj-t"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg border border-gray-700/50"
              aria-label="Visit GitHub Profile"
              variants={socialVariants}
              whileHover="hover"
            >
              <PiGithubLogoFill className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-all duration-300 border border-gray-700/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </motion.button>
        </section>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-800/50">
                <motion.a
                  href="https://linkedin.com/in/niroj-thapa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800/80 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-gray-700/50"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/Niroj-t"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800/80 rounded-xl text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-gray-700/50"
                  whileHover={{ scale: 1.1 }}
                >
                  <PiGithubLogoFill className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
