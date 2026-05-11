"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    title: "B.Sc. in Statistics",
    institute: "Dhaka Central University",
    status: "Present",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institute: "Birshreshtha Munshi Abdur Rouf Public College",
    status: "2024",
    side: "right",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Mirpur Government High School",
    status: "2022",
    side: "left",
  },
];

const AcademicTimeline = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Timeline line animation
  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  // 🌫️ SUBTLE CODE RAIN BACKGROUND
  useEffect(() => {
    if (!bgRef.current) return;

    const container = bgRef.current;

    const symbols = [
      "</>",
      "{ }",
      "[ ]",
      "( )",
      "=>",
      "const",
      "let",
      "return",
      "function",
      "class",
      "import",
      "export",
    ];

    const createSymbol = () => {
      const el = document.createElement("div");

      el.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

      el.className =
        "absolute text-indigo-300/20 font-mono pointer-events-none select-none";

      // position
      el.style.left = Math.random() * window.innerWidth + "px";
      el.style.top = "-40px";

      // 🔥 SMALL SIZE
      const size = Math.random() * 10 + 8;
      el.style.fontSize = size + "px";

      // 🔥 LOW VISIBILITY
      el.style.opacity = "0.9";

      // subtle glow
      el.style.textShadow = "0 0 6px rgba(99,102,241,0.25)";

      container.appendChild(el);

      gsap.to(el, {
        y: window.innerHeight + 100,
        duration: Math.random() * 5 + 4,
        ease: "none",
        opacity: 0,
        onComplete: () => el.remove(),
      });
    };

    const interval = setInterval(createSymbol, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-6 overflow-hidden bg-[#020617]"
      id="journey"
    >
      {/* 🌫️ BACKGROUND LAYER */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2"
          >
            My Journey
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Academic Timeline
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800 hidden lg:block">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </div>

          <div className="space-y-18">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col w-10/12 mx-auto lg:flex-row items-center gap-2 ${
                  event.side === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: event.side === "left" ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-[45%]"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-indigo-500/10 transition-all">
                    <span className="text-indigo-400 text-xs font-bold">
                      {event.status}
                    </span>

                    <h3 className="text-2xl font-bold text-white mt-3 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-slate-400">
                      {event.institute}
                    </p>
                  </div>
                </motion.div>

                {/* Dot */}
                <div className="hidden lg:flex w-10 h-10 items-center justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#020617] border-4 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                </div>

                <div className="hidden lg:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicTimeline;