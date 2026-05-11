"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#020617]"
    >

      <div className="w-10/12 mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Passionate Frontend Developer Creating Modern Experiences
          </h2>

          <p className="text-gray-400 leading-8 mb-6">
            I love building modern, interactive and responsive web applications
            with clean UI and smooth user experience.
          </p>

          <p className="text-gray-400 leading-8 mb-8">
            I enjoy working with React, Next.js, Tailwind CSS and animation
            libraries to craft immersive digital products.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-5">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 min-w-[140px]">
              <h3 className="text-3xl font-bold text-white">1+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 min-w-[140px]">
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 min-w-[140px]">
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Happy Clients
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >

          {/* CODE BOX */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              overflow-hidden
            "
          >

            {/* Top Bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.03]">

              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>

              <p className="ml-3 text-sm text-gray-300 font-mono tracking-wide">
                Developer.js
              </p>
            </div>

            {/* Code Area */}
            <div className="p-6 font-mono text-[14px] leading-8 text-white relative">

              {/* Line Numbers */}
              <div className="absolute left-4 top-6 text-gray-500 text-[11px] leading-8 select-none">
                1<br />2<br />3<br />4<br />5<br />6<br />7
              </div>

              {/* Code */}
              <div className="pl-9 space-y-1">

                <p>
                  <span className="text-pink-300">const</span>{" "}
                  <span className="text-yellow-100">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-500">{"{"}</span>
                </p>

                <p className="pl-3">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-green-300">
                    "Nafisa Frontend Architect"
                  </span>,
                </p>

                <p className="pl-3">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-green-300">
                    "Frontend Developer"
                  </span>,
                </p>

                <p className="pl-3">
                  <span className="text-sky-300">skills</span>:{" "}
                  <span className="text-green-300">
                    ["React", "Next.js", "Tailwind"]
                  </span>,
                </p>

                <p className="pl-3">
                  <span className="text-sky-300">passionate</span>:{" "}
                  <span className="text-orange-300">true</span>,
                </p>

                <p className="pl-3">
                  <span className="text-sky-300">building</span>:{" "}
                  <span className="text-green-300">
                    "Modern Web Experience"
                  </span>,
                </p>

                <p>
                  <span className="text-yellow-500">{"}"}</span>
                </p>

                <p className="pt-2">
                  <span className="text-purple-400">
                    export default
                  </span>{" "}
                  <span className="text-cyan-300">developer</span>;
                </p>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;