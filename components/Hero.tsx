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
      className="relative flex items-center pt-32 pb-28 px-6 overflow-hidden bg-[#020617]"
    >

      {/* 🌌 HERO DARK CINEMATIC BG (matches About section) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#050816] to-[#020617]" />

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[160px] rounded-full" />

      {/* SIDE GLOW */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full" />

      {/* BOTTOM DEPTH (important for smooth fade) */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div style={{ y, opacity }}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-6">

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

            <Magnetic>
              <a href="/sample_cv.pdf" download>
                <button className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/30">
                  Download CV ↓
                </button>
              </a>
            </Magnetic>

            <div className="flex gap-4">

              <Magnetic>
                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.2 1.9 2.6 1.2.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.6-2.6 5.6-5.1 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z"/>
                  </svg>
                </a>
              </Magnetic>

            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end items-center">

          {/* IMAGE GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />

          {/* IMAGE */}
          <div className="relative z-20 hover:-translate-y-3 transition-transform duration-500">

            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 shadow-2xl">
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#020617]">
                <Image
                  src={nafisa}
                  alt="Nafisa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;