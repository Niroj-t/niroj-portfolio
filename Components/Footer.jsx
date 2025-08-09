"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const linkVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      className="w-full py-4 bg-gray-900 text-center text-gray-300 text-sm border-t border-gray-200 card shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={textVariants}>
         Built with <span className="font-semibold text-green-600">Next.js</span>, <span className="font-semibold text-green-600">Tailwind CSS</span> &middot; Coded in <span className="font-semibold text-green-600">Cursor</span> and deployed with <span className="font-semibold text-green-600">Vercel</span>
      </motion.div>
      <motion.div 
        className="mt-1"
        variants={textVariants}
      >
        Developed by <motion.div
          href="https://github.com/Niroj-t" 
          className="text-green-600 hover:underline inline-block" 
          target="_blank"
          variants={linkVariants}
          whileHover="hover"
        >
          Niroj Thapa
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
