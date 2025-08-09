"use client";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      scale: 1.1,
      rotate: 5,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
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
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const githubVariants = {
    hover: { 
      y: -10,
      scale: 1.15,
      rotate: 10,
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 300,
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

  return (
    <motion.nav 
      className="flex items-center justify-between p-4 border-b border-gray-800/50 sticky top-0 bg-gray-900/80 backdrop-blur-md z-50 px-4 sm:px-6 lg:px-8 xl:px-40 shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      {/* Left Section - Logo */}
      <section className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/logo.png"
              alt="Niroj Thapa Logo"
              width={120}
              height={40}
              className="w-20 h-6 sm:w-24 sm:h-7 md:w-28 md:h-8 lg:w-32 lg:h-9 xl:w-36 xl:h-10 rounded-lg invert brightness-8 transition-all duration-300 relative z-10"
              priority
            />
          </motion.div>
        </Link>
      </section>

      {/* Center Section - Navigation */}
      <section className="hidden md:flex justify-center items-center flex-1">
        <ul className="flex gap-6 lg:gap-8 xl:gap-10 text-gray-300 tracking-wider uppercase font-semibold text-sm lg:text-base">
          {[
            { href: "#", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#education", label: "Education" },
            { href: "#blogs", label: "Blogs" },
            { href: "#contact", label: "Contact" }
          ].map((item, index) => (
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
                className="relative block py-2 transition-colors duration-300 hover:text-emerald-400"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 rounded-full"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={hoveredIndex === index ? "visible" : "hidden"}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Right Section - GitHub */}
      <section className="flex-shrink-0">
        <motion.a
          href="https://github.com/Niroj-t"
          target="_blank"
          rel="noreferrer"
          className="flex items-center relative group"
          aria-label="Goto my github profile"
          variants={githubVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <PiGithubLogoFill className="bg-gray-800 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-3xl text-white hover:bg-emerald-500 p-1.5 hover:text-white transition-all duration-300 relative z-10 shadow-lg" />
        </motion.a>
      </section>
    </motion.nav>
  );
};
export default Navbar;
