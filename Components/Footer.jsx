"use client";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-900 relative overflow-hidden border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute top-10 left-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-body font-body text-gray-300 mb-4">
            Built with
            <span className="font-semibold text-emerald-400 mx-2 font-heading">Next.js</span>
            <span className="text-gray-400">&middot;</span>
            <span className="font-semibold text-emerald-400 mx-2 font-heading">Tailwind CSS</span>
            and deployed with
            <span className="font-semibold text-emerald-400 mx-2 font-heading">Vercel</span>
          </p>
        </div>

        <div className="text-center">
          <span className="text-body font-body text-gray-400">Developed by </span>
          <a
            href="https://github.com/Niroj-t"
            className="inline-block text-emerald-400 font-semibold hover:text-emerald-300 transition-colors duration-200 font-heading"
            target="_blank"
            rel="noopener noreferrer"
          >
            Niroj Thapa
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["React", "Next.js", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-caption font-heading font-medium rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
