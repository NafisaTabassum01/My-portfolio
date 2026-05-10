"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

import { DiReact } from "react-icons/di";

const techs = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  { name: "SQL", icon: SiMysql, color: "#00758F" },
  { name: "React", icon: DiReact, color: "#61DAFB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
];

const cardVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.15,
    y: -12,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
    transition: { duration: 0.25 },
  },
};

const TechStack = () => {
  const topRow = techs.slice(0, 3);
  const bottomRow = techs.slice(3);

  return (
    <section className="py-28 px-6" id="stack">

      {/* Title */}
      <div className="text-center mb-16">
        <h4 className="text-indigo-400 text-xs tracking-widest uppercase">
          Tech Stack
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Mastered Technologies
        </h2>
      </div>

      {/* TOP ROW (3 cards) */}
      <div className="flex justify-center gap-10 mb-10 flex-wrap">
        {topRow.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="w-40 h-40 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer"
            >
              <Icon size={44} color={tech.color} />
              <p className="text-white mt-3 font-semibold">{tech.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* BOTTOM ROW (4 cards) */}
      <div className="flex justify-center gap-10 flex-wrap">
        {bottomRow.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="w-40 h-40 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer"
            >
              <Icon size={44} color={tech.color} />
              <p className="text-white mt-3 font-semibold">{tech.name}</p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default TechStack;