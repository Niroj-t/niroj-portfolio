"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
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

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
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

  return (
    <motion.footer 
      className="w-full py-8 bg-gray-900 relative overflow-hidden border-t border-gray-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
        className="absolute top-10 left-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-6"
          variants={textVariants}
        >
          <motion.p className="text-lg text-gray-300 mb-4">
            Built with 
            <motion.span 
              className="font-semibold text-emerald-400 mx-2"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Next.js
            </motion.span>
            <span className="text-gray-400">&middot;</span>
            <motion.span 
              className="font-semibold text-emerald-400 mx-2"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Tailwind CSS
            </motion.span>
            
            and deployed with
            <motion.span 
              className="font-semibold text-emerald-400 mx-2"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Vercel
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={textVariants}
        >
          <span className="text-gray-400">Developed by </span>
          <motion.a
            href="https://github.com/Niroj-t" 
            className="inline-block text-emerald-400 font-semibold hover:text-emerald-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover="hover"
          >
            Niroj Thapa
          </motion.a>
        </motion.div>

        {/* Tech badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-6"
          variants={textVariants}
        >
          {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors duration-200"
              variants={badgeVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
