"use client";
import React, { useState } from "react";
import Image from "next/image";
import email from "../public/contact/email.svg";
import "../app/globals.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
      setResult("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    focus: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
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

      <Toaster position="top-right" />
      <motion.section 
        className="flex items-center gap-4 text-white"
        variants={itemVariants}
      >
        <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
        <p className="text-2xl font-medium">&lt;Contact &nbsp;/&gt;</p>
      </motion.section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <Image
            src={email}
            alt="Contact Illustration"
            width={400}
            height={300}
            className="w-full max-w-md h-auto lg:flex-1 hidden md:block"
            priority
          />
        </motion.div>

        {/* Contact Form */}
        <motion.section 
          className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full p-6 rounded-xl card flex flex-col justify-center items-center max-sm:m-4 max-md:mt-8 bg-gray-900 relative z-10"
          variants={itemVariants}
        >
          <form onSubmit={onSubmit} className="w-full">
            <motion.div 
              className="mb-5"
              variants={formFieldVariants}
              whileFocus="focus"
            >
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="Enter your name here"
                required
                aria-label="Name Input Field"
              />
            </motion.div>
            <motion.div 
              className="mb-5"
              variants={formFieldVariants}
              whileFocus="focus"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="Enter your email here"
                required
                aria-label="Email Input Field"
              />
            </motion.div>
            <motion.div 
              className="mb-5"
              variants={formFieldVariants}
              whileFocus="focus"
            >
              <textarea
                name="message"
                type="text"
                rows="5"
                id="message"
                className="shadow-sm bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 resize-none"
                placeholder="Enter your message here"
                required
                aria-label="Message Input Field"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              aria-label="Submit Button"
              disabled={submitting}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {submitting ? "Submitting..." : "Submit"}
            </motion.button>
            <motion.p 
              className="text-white mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: result ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {result}
            </motion.p>
          </form>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Contact;
