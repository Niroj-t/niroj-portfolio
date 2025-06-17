"use client";
import React, { useState } from "react";
import Image from "next/image";
import email from "../public/contact/email.svg";
import "../app/globals.css";
import toast, { Toaster } from "react-hot-toast";

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

  return (
    <section
      id="contact"
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900"
    >
      <Toaster position="top-right" />
      <section className="flex items-center gap-4 text-white">
        <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
        <p className="text-2xl font-medium">&lt;Contact &nbsp;/&gt;</p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Image
          src={email}
          alt="Contact Illustration"
          width={400}
          height={300}
          className="w-full max-w-md h-auto lg:flex-1 hidden md:block"
          priority
        />

        {/* Contact Form */}
        <section className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full p-6 rounded-xl card flex flex-col justify-center items-center max-sm:m-4 max-md:mt-8 bg-gray-900">
          <form onSubmit={onSubmit} className="w-full">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="Enter your name here"
                required
                aria-label="Name Input Field"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400"
                placeholder="Enter your email here"
                required
                aria-label="Email Input Field"
              />
            </div>
            <div className="mb-5">
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
            </div>

            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              aria-label="Submit Button"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
            <p className="text-white mt-4">{result}</p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Contact;
