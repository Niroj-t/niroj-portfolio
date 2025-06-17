'use client'
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import educationData from "../education_data";

const Education = () => {
  return (
    <main
      className="min-h-[calc(90svh-5.0rem)] lg:p-5 p-1 flex flex-col items-center justify-start bg-gray-900"
      id="education"
    >
      <section className="flex items-center justify-between pt-3 w-full max-w-9xl">
        <div className="flex items-center gap-3 text-white">
          <hr className="h-1 w-12 bg-emerald-400 rounded-full" />
          <p className="text-xl lg:text-2xl font-medium">
            &lt;Education &nbsp;/&gt;
          </p>
        </div>
      </section>

      <div className="flex-1 flex flex-col gap-2 w-5/6 pr-3 m-12">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg overflow-hidden card"
          >
            <div className="absolute left-5 top-5 text-emerald-400 text-base lg:text-lg font-semibold">
              {item.duration}
            </div>
            <div className="flex items-center gap-4 mt-7">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl">
                <FaUserGraduate className="text-2xl text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-300 mt-1">
                  {item.institution}
                </p>
                {item.description && (
                  <p className="text-base lg:text-lg text-gray-300 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Education; 