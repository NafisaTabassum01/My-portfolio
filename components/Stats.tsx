"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
  { label: 'Hours of Coding', value: 500, suffix: '+' },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => setCount(Math.floor(obj.n)),
      });
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="card-gradient rounded-2xl p-8 text-center flex flex-col items-center group relative overflow-hidden"
          >
            {/* Animated Glow Border */}
            <div className="absolute inset-0 border border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-500 rounded-2xl"></div>
            
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            
            {/* Background Accent */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
