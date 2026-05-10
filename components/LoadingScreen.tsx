"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white flex items-center"
            >
              <span className="text-indigo-500 mr-2">&lt;/&gt;</span>
              Nafisa
            </motion.span>
            
            {/* Progress bar line */}
            <motion.div 
              className="absolute -bottom-4 left-0 h-1 bg-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-slate-500 font-mono text-sm tracking-widest uppercase">
            Initialising Experience... {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
