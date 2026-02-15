"use client";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#", label: "Home", emoji: "🏠" },
    { href: "#about", label: "About", emoji: "👨‍💻" },
    { href: "#experience", label: "Experience", emoji: "💼" },
    { href: "#projects", label: "Projects", emoji: "🚀" },
    { href: "#education", label: "Education", emoji: "🎓" },
    { href: "#contact", label: "Contact", emoji: "📧" }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl"
          : "bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5" />

      <div className="flex items-center justify-between p-4 px-4 sm:px-6 lg:px-8 xl:px-40 relative z-10">
        <section className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-2xl font-bold text-white font-heading tracking-tight">
              Niroj Thapa
            </h1>
            <span className="text-xs lg:text-sm text-emerald-400 font-body tracking-wide" />
          </div>
        </section>

        <section className="hidden lg:flex justify-center items-center flex-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <ul className="flex gap-2 text-gray-300">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className="cursor-pointer relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={item.href}
                    aria-label={`Goto ${item.label} Section`}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
                      hoveredIndex === index
                        ? "text-emerald-400 bg-emerald-500/20 shadow-lg"
                        : "hover:text-emerald-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/nirojthapa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg border border-gray-700/50"
              aria-label="Visit LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Niroj-t"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg border border-gray-700/50"
              aria-label="Visit GitHub Profile"
            >
              <PiGithubLogoFill className="w-5 h-5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-800/80 rounded-xl text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-all duration-300 border border-gray-700/50"
          >
            {isMobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </button>
        </section>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-gray-700/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-800/50">
              <a
                href="https://linkedin.com/in/niroj-thapa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800/80 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-gray-700/50"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Niroj-t"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800/80 rounded-xl text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-gray-700/50"
              >
                <PiGithubLogoFill className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
