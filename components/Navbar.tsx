"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Experience", id: "journey" },
  { name: "Stack", id: "stack" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setIsScrolled(latest > 50);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full z-50"
        >
          {/* CENTER WRAPPER */}
          <div className="flex justify-center px-4 py-5">
            <nav
              className={`
                w-full max-w-5xl
                flex items-center justify-between
                glass-effect rounded-full
                px-6 py-3
                pointer-events-auto
                transition-all duration-300
                ${isScrolled ? "scale-95" : "scale-100"}
              `}
            >
              {/* Logo */}
              <Magnetic>
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xl font-bold tracking-tight text-white flex items-center">
                    <span className="text-indigo-500 mr-1">&lt;<span className="text-white">Nafisa</span>/&gt;</span>
                    
                  </span>
                </div>
              </Magnetic>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative transition-colors hover:text-white ${
                      activeSection === item.id ? "text-white" : ""
                    }`}
                  >
                    {item.name}

                    {activeSection === item.id && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Button */}
              <div className="flex items-center">
                <Magnetic>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                    Hire Me
                  </button>
                </Magnetic>
              </div>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;