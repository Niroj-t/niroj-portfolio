import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-900 text-center text-gray-300 text-sm border-t border-gray-200 card shadow-lg">
      <div>
         Built with <span className="font-semibold text-green-600">Next.js</span>, <span className="font-semibold text-green-600">Tailwind CSS</span> &middot; Coded in <span className="font-semibold text-green-600">VS Code</span> and deployed with <span className="font-semibold text-green-600">Vercel</span>
      </div>
      <div className="mt-1">
        Developed by <Link href="https://github.com/Niroj-t" className="text-green-600 hover:underline" target="_blank">Niroj Thapa</Link>
      </div>
    </footer>
  );
};

export default Footer;
