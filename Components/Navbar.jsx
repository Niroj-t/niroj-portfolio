import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-gray-900 z-50 px-4 sm:px-6 lg:px-8 xl:px-40">
      {/* Left Section - Logo */}
      <section className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Niroj Thapa Logo"
            width={120}
            height={40}
            className="w-20 h-6 sm:w-24 sm:h-7 md:w-28 md:h-8 lg:w-32 lg:h-9 xl:w-36 xl:h-10 rounded-lg invert brightness-8 transition-all duration-300 hover:scale-105"
            priority
          />
        </Link>
      </section>

      {/* Center Section - Navigation */}
      <section className="hidden md:flex justify-center items-center flex-1">
        <ul className="flex gap-6 lg:gap-8 xl:gap-10 text-gray-300 tracking-wider uppercase font-semibold text-sm lg:text-base">
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#" aria-label="Goto Home Section">
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#about" aria-label="Goto About Section">
              About
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#projects" aria-label="Goto Projects Section">
              Projects
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#education" aria-label="Goto Education Section">
              Education
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#blogs" aria-label="Goto Blogs Section">
              Blogs
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-200">
            <a href="#contact" aria-label="Goto Contact Section">
              Contact
            </a>
          </li>
        </ul>
      </section>

      {/* Right Section - GitHub */}
      <section className="flex-shrink-0">
        <a
          href="https://github.com/Niroj-t"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
          aria-label="Goto my github profile"
        >
          <PiGithubLogoFill className="bg-gray-800 transform hover:-translate-y-1.5 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-3xl duration-500 text-white hover:bg-white p-1.5 hover:text-black transition-all" />
        </a>
      </section>
    </nav>
  );
};
export default Navbar;
