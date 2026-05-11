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
  { name: "About", id: "about" },
  { name: "Stack", id: "stack" },
  { name: "Experience", id: "journey" },
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

    // hide on scroll down
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setIsScrolled(latest > 50);

    // active section detection
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const scrollPos = window.scrollY + 200;

    sections.forEach((sec, i) => {
      if (!sec) return;

      if (
        scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight
      ) {
        setActiveSection(navItems[i].id);
      }
    });
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full z-50"
        >
          <div className="flex justify-center px-4 py-5">

            <nav
              className={`
                w-full max-w-5xl
                flex items-center justify-between
                glass-effect rounded-full
                px-6 py-3
                transition-all duration-300
                ${isScrolled ? "scale-95" : "scale-100"}
              `}
            >

              {/* LOGO */}
              <Magnetic>
                <div className="text-white font-bold text-xl tracking-tight">
                  <span className="text-indigo-500">&lt;</span>
                  Nafisa
                  <span className="text-indigo-500">/&gt;</span>
                </div>
              </Magnetic>

              {/* NAV ITEMS */}
              <div className="hidden md:flex items-center gap-10 text-sm font-medium">

                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="relative flex flex-col items-center group transition-colors"
                  >
                    {/* TEXT */}
                    <span
                      className={`transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* ANIMATED DOTS */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeDots"
                        className="flex gap-1 mt-1"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 bg-indigo-300 rounded-full"
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    )}
                  </a>
                ))}

              </div>

              {/* BUTTON */}
              <Magnetic>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all">
                  Hire Me
                </button>
              </Magnetic>

            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;