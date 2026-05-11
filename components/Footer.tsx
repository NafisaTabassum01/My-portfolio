import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white flex items-center">
            <span className="text-indigo-500 mr-1">&lt;<span className='text-white'>Nafisa</span>/&gt;</span> 
          </span>
        </div>
        <p className="text-slate-500 text-sm">© 2024 DevPortfolio. Built with precision.</p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white">Github</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Source Code</a>
        </div>
        {/* Back to top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-all"
        >
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
