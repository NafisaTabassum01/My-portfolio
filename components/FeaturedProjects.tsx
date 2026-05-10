"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const projects = [
  {
    title: 'QurbaniHat Platform',
    description: 'A comprehensive e-commerce ecosystem for livestock trade, featuring real-time bidding and secure payments.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    accent: 'from-emerald-500/20 to-transparent',
  },
  {
    title: 'Animal Listing App',
    description: 'Intuitive mobile directory for animal breeders and enthusiasts, optimized for lightning-fast search.',
    tags: ['React Native', 'Firebase', 'Tailwind'],
    accent: 'from-amber-500/20 to-transparent',
  },
  {
    title: 'Insight Blog',
    description: 'A headless CMS-powered blog featuring high-fidelity typography, code blocks, and dynamic content delivery.',
    tags: ['Next.js', 'Markdown', 'API'],
    accent: 'from-blue-500/20 to-transparent',
  },
  {
    title: 'Lumina Portfolio',
    description: 'A signature portfolio framework designed for developers, featuring fluid transitions and glassmorphic depth.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    accent: 'from-indigo-500/20 to-transparent',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 w-10/12 mx-auto" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2">My Work</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          
          <Magnetic>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              href="#"
              className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group"
            >
              View All Projects 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group card-gradient rounded-[2.5rem] overflow-hidden flex flex-col h-full relative"
            >
              {/* Top Image/Visual Area */}
              <div className={`h-64 bg-slate-900 relative overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500 uppercase tracking-tighter">
                    Project Showcase
                  </span>
                </div>
                {/* Floating Elements in image area */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10 flex flex-col flex-grow bg-slate-950/50 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-4 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Magnetic>
                  <a href="#" className="inline-flex items-center gap-2 text-indigo-400 text-sm font-bold hover:text-indigo-300 transition-colors">
                    Explore Case Study
                    <span className="text-lg">→</span>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
