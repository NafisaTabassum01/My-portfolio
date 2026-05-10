"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'HTML5', color: 'text-orange-500' },
  { name: 'CSS3', color: 'text-blue-500' },
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'React', color: 'text-sky-400' },
  { name: 'Next.js', color: 'text-white' },
  { name: 'Tailwind', color: 'text-teal-400' },
  { name: 'Firebase', color: 'text-amber-500' },
  { name: 'GSAP', color: 'text-emerald-400' },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 overflow-hidden" id="stack">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2"
        >
          Tech Stack
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Mastered Technologies
        </motion.h2>
      </div>

      {/* Infinite Marquee */}
      <div className="flex overflow-hidden group py-10 relative">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-max"
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="card-gradient p-8 rounded-3xl flex flex-col items-center gap-4 min-w-[160px] cursor-pointer group/card relative overflow-hidden"
            >
              <div className={`text-4xl ${tech.color} group-hover/card:drop-shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-300`}>
                {/* SVG icons would go here, simplified for brevity */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-bold text-lg">
                  {tech.name[0]}
                </div>
              </div>
              <span className="text-sm font-bold text-slate-300 group-hover/card:text-white transition-colors">
                {tech.name}
              </span>
              
              {/* Neon Glow on hover */}
              <div className="absolute inset-0 bg-indigo-500/0 group-hover/card:bg-indigo-500/5 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TechStack;
