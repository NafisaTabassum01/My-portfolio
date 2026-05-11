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
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    animation: {
      rotate: [0, -8, 8, -8, 0],
      transition: {
        duration: 0.6,
      },
    },
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    animation: {
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    animation: {
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "#00758F",
    animation: {
      x: [0, -6, 6, -6, 0],
      transition: {
        duration: 0.5,
      },
    },
  },
  {
    name: "React",
    icon: DiReact,
    color: "#61DAFB",
    animation: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    animation: {
      scale: [1, 1.25, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 0.7,
      },
    },
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    animation: {
      y: [0, -8, 0],
      rotate: [0, 8, -8, 0],
      transition: {
        duration: 0.6,
      },
    },
  },
];

const cardVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    y: -10,
    borderColor: "rgba(255,255,255,0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

const TechCard = ({ tech }: any) => {
  const Icon = tech.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="group relative isolation-isolate overflow-hidden
      w-40 h-40 rounded-2xl
      bg-white/[0.04]
      border border-white/10
      backdrop-blur-xl
      flex flex-col items-center justify-center
      cursor-pointer"
    >
      {/* Soft Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl"
        style={{
          background: tech.color,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={tech.animation}
        className="relative z-10"
      >
        <Icon size={46} color={tech.color} />
      </motion.div>

      {/* Text */}
      <p className="relative z-10 text-white mt-4 font-semibold">
        {tech.name}
      </p>
    </motion.div>
  );
};

const TechStack = () => {
  const topRow = techs.slice(0, 3);
  const bottomRow = techs.slice(3);

  return (
    <section className="py-28 px-6" id="stack">

      {/* Title */}
      <div className="text-center mb-16">
        <h4 className="text-indigo-400 text-xs tracking-[0.3em] uppercase">
          Tech Stack
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Mastered Technologies
        </h2>
      </div>

      {/* Top Row */}
      <div className="flex justify-center gap-10 mb-10 flex-wrap">
        {topRow.map((tech, i) => (
          <TechCard key={i} tech={tech} />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-10 flex-wrap">
        {bottomRow.map((tech, i) => (
          <TechCard key={i} tech={tech} />
        ))}
      </div>

    </section>
  );
};

export default TechStack;