"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import qurbanihat from "../app/assets/qurbanihat.png";
import bond from "../app/assets/bond.png";
import digi from "../app/assets/digi.png";
import git from "../app/assets/git.png";

const projects = [
  {
    title: "QurbaniHat Platform",
    description:
      "A modern livestock marketplace built for exploring and booking animals for Qurbani.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Better-auth"],
    link: "https://assignment-8-gilt-two.vercel.app/",
    image: qurbanihat,
  },
  {
    title: "BondTrack",
    description:
      "Manage and track interactions with friends with analytics dashboard.",
    tags: ["React", "Tailwind", "Recharts"],
    link: "https://assignment-7-two-kohl.vercel.app/",
    image: bond,
  },
  {
    title: "DigiTools",
    description:
      "Access AI tools, design assets and productivity software in one place.",
    tags: ["Next.js", "API", "Vite"],
    link: "https://thunderous-lebkuchen-da992c.netlify.app/",
    image: digi,
  },
  {
    title: "GitHub Issues Tracker",
    description:
      "A responsive GitHub Issues Tracker for fast filtering and managing issues.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://nafisatabassum01.github.io/Assignment-5/",
    image: git,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 w-10/12 mx-auto" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <h4 className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2">
            My Work
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                border-2
                border-white/10
                hover:border-indigo-500/70
                transition-all
                duration-500
                bg-slate-950
              "
            >

              {/* IMAGE */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        text-xs
                        rounded-full
                        border
                        border-indigo-500/20
                        text-indigo-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    inline-flex
                    items-center
                    text-indigo-400
                    font-semibold
                  "
                >
                  Explore Website →

                  {/* UNDERLINE */}
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      w-0
                      bg-indigo-400
                      rounded-full
                      transition-all
                      duration-700
                      ease-in-out
                      group-hover:w-full
                    "
                  ></span>
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;