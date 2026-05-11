"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 relative w-10/12 mx-auto" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-2">Get In Touch</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let&apos;s build <br/> something <span className="text-indigo-500">epic</span>.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md">
              Currently available for freelance projects and high-impact full-time roles.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, label: "tabassumnafisa28.01@gmail.com", href: "mailto:hello@nafisa.dev" },
                { icon: <Linkedin size={24} />, label: "linkedin.com/in/nafisa", href: "#" },
                { icon: <Instagram size={24} />, label: "@nafisa_codes", href: "#" }
              ].map((item, i) => (
                <Magnetic key={i}>
                  <a href={item.href} className="flex items-center gap-6 text-slate-300 hover:text-white group transition-colors">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium">{item.label}</span>
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-gradient p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <form action="#" className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                ></textarea>
              </div>
              
              <Magnetic>
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(79,70,229,0.2)]"
                  type="submit"
                >
                  Send Message <Send size={20} />
                </button>
              </Magnetic>
            </form>
            
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
