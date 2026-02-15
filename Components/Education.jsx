"use client";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import educationData from "../education_data";

const Education = () => {
  const getEducationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "university":
        return FaGraduationCap;
      case "college":
        return FaUniversity;
      case "school":
        return FaUniversity;
      default:
        return FaGraduationCap;
    }
  };

  const getIconColor = (type) => {
    switch (type?.toLowerCase()) {
      case "university":
        return "text-emerald-400";
      case "college":
        return "text-blue-400";
      case "school":
        return "text-purple-400";
      default:
        return "text-emerald-400";
    }
  };

  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 bg-gray-900 relative overflow-hidden"
      id="education"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

      <section className="flex items-center gap-4 pt-2 text-white relative z-10">
        <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
        <h1 className="text-title font-heading tracking-tight">
          <span className="text-emerald-300 font-mono">&lt;</span>
          My Education
          <span className="text-emerald-300 font-mono"> /&gt;</span>
        </h1>
      </section>

      <section className="flex justify-center items-center flex-col p-2 max-lg:gap-4 lg:gap-6 relative z-10">
        {educationData.map((education, index) => {
          const IconComponent = getEducationIcon(education.type);
          const iconColor = getIconColor(education.type);

          return (
            <div
              key={index}
              className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-lg relative overflow-hidden"
            >
              <div className="flex lg:flex-row flex-col gap-6 relative z-10">
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-800/80 rounded-full flex items-center justify-center border-2 border-emerald-500/30 relative z-10">
                      <IconComponent className={`w-10 h-10 lg:w-12 lg:h-12 ${iconColor}`} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                    <div>
                      <h3 className="text-heading font-heading text-white leading-tight">
                        {education.title}
                      </h3>
                      <h4 className="text-subheading font-heading text-emerald-400 mt-1">
                        {education.institution}
                      </h4>
                    </div>

                    <div className="flex flex-col lg:items-end gap-1">
                      <div className="flex items-center gap-2 text-caption font-body text-gray-400">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      {education.type && (
                        <div className="flex items-center gap-2 text-caption font-body text-gray-400">
                          <span className="capitalize">{education.type}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {education.description && (
                    <p className="text-body font-body text-gray-300 leading-relaxed">
                      {education.description}
                    </p>
                  )}

                  {education.highlights && education.highlights.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-body-small font-heading text-emerald-400 font-semibold">
                        Key Highlights:
                      </h5>
                      <ul className="space-y-1">
                        {education.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-body-small font-body text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-emerald-400 text-xs mt-1">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {education.gpa && (
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/30">
                      <span className="text-caption font-heading font-semibold">
                        GPA: {education.gpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Education;
