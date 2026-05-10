"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import nafisa from "../app/assets/nafisa-portfolio-image.png";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = "Hi, I'm Nafisa".split(" ");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative  flex items-center pt-32 pb-28 px-6 bg-[#020617] mb-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div style={{ y, opacity }}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-6">

            {/* ACTIVE PULSE DOT */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>

            Available for Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-4 md:mr-6">
                {word === "Nafisa" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            Frontend Architect
          </h2>

          <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
            Building modern, scalable and interactive web experiences.
          </p>

          {/* BUTTON + ICONS */}
          <div className="flex items-center gap-6 flex-wrap">

            {/* Button */}
            <Magnetic>
        <a href="/sample_cv.pdf" download="sample_cv.pdf">
                <button className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/30">
                Download CV ↓
              </button>
          </a>
            </Magnetic>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              {/* GitHub */}
              <Magnetic>
                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.2 1.9 2.6 1.2.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.6-2.6 5.6-5.1 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
                  </svg>
                </a>
              </Magnetic>

              {/* LinkedIn */}
              <Magnetic>
                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM3.56 20.45h3.55V9H3.56v11.45z" />
                  </svg>
                </a>
              </Magnetic>

            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end items-start">

          {/* IMAGE */}
          <div className="relative z-30 -translate-y-8 hover:-translate-y-10 transition-transform duration-500">

            {/* Glow */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>

            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 shadow-2xl">
              <div className="relative w-50 h-50 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#020617]">
                <Image
                  src={nafisa}
                  alt="Nafisa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CODE BOX */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="    glass-card absolute -bottom-55 -left-1 w-72 md:w-80 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden pb-2 z-10 hover:-translate-y-2 transition-transform duration-500"
          >

            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-black/10">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>

              <p className="ml-3 text-xs text-gray-300 font-mono">
                Developer.js
              </p>
            </div>

            {/* Code Area */}
            <div className="p-4 font-mono text-xs text-white relative">

              {/* Line Numbers */}
              <div className="absolute left-2 top-4 text-gray-500 text-[10px] leading-6">
                1<br />2<br />3<br />4<br />5<br />6<br />7
              </div>

              <div className="pl-6 space-y-2">

                <p>
                  <span className="text-pink-300">const</span>{" "}
                  <span className="text-yellow-100">developer</span>{" "}
                  <span className="text-yellow-500">=</span>{" "}
                  <span className="text-yellow-500">{"{"}</span>
                </p>

                <p className="pl-2">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-green-300">
                    "Nafisa Frontend Architect"
                  </span>,
                </p>

                <p className="pl-2">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-green-300">
                    "Frontend Developer"
                  </span>,
                </p>

                <p className="pl-2">
                  <span className="text-sky-300">skills</span>:{" "}
                  <span className="text-green-300">
                    ["React", "Next.js", "Tailwind"]
                  </span>,
                </p>

                <p className="pl-2">
                  <span className="text-sky-300">passionate</span>:{" "}
                  <span className="text-green-300">"true"</span>,
                </p>

                <p className="pl-2">
                  <span className="text-sky-300">building</span>:{" "}
                  <span className="text-green-300">
                    "Modern Web Experience"
                  </span>,
                </p>

                <p>
                  <span className="text-yellow-500">{"}"}</span>
                </p>

                <p className="mt-1">
                  <span className="text-purple-400">
                    export default
                  </span>{" "}
                  <span className="text-blue-300">developer</span>;
                </p>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;