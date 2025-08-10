"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
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
      filter: "drop-shadow(0 25px 50px rgb(0 0 0 / 0.15))",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const contactInfo = [
    {
      icon: IoIosMail,
      title: "Email",
      value: "tniroj35@gmail.com",
      link: "mailto:tniroj35@gmail.com",
      color: "text-emerald-400",
      bg: "bg-emerald-500/20"
    },
    {
      icon: IoIosCall,
      title: "Phone",
      value: "+977 98XX-XXXXX",
      link: "tel:+9779800000000",
      color: "text-blue-400",
      bg: "bg-blue-500/20"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Lalitpur, Nepal",
      link: "#",
      color: "text-purple-400",
      bg: "bg-purple-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/Niroj-t",
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/niroj-thapa",
      color: "hover:text-white hover:bg-blue-500"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://x.com/niroj_t",
      color: "hover:text-white hover:bg-blue-400"
    }
  ];

  return (
    <motion.main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-4 flex flex-col lg:gap-8 gap-6 bg-gray-900 relative overflow-hidden"
      id="contact"
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
          Get In Touch
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </motion.section>

      {/* Main Content */}
      <div className="flex justify-center relative z-10">
        {/* Contact Form */}
        <motion.section 
          className="w-full max-w-2xl"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h2 
              className="text-heading font-heading text-white mb-6"
              whileHover={{ color: "#10b981" }}
            >
              Send Me a Message
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name" className="block text-body-small font-heading text-gray-400 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-body font-body text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-body-small font-heading text-gray-400 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-body font-body text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-body-small font-heading text-gray-400 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-body font-body text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="just say hello......"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-heading font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-body font-heading">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Contact;
