import React from 'react';

const Button = () => {
  return (
    <button className="group relative px-10 py-5 rounded-md bg-black text-cyan-400 font-bold tracking-widest uppercase text-sm border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300 ease-in-out hover:text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] active:translate-y-1 active:shadow-[0_0_15px_rgba(34,211,238,0.45)] active:scale-[0.98]">
      <span className="flex items-center gap-3 relative z-10">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 transition-transform duration-300 group-hover:scale-125">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Get Started
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-150">
          <path d="M12 2v20m0-20L4 12m8-10l8 10" />
        </svg>
      </span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-600/25 to-blue-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-md" />
      <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20 group-hover:opacity-30 blur-xl rounded-md transition-all duration-300 group-hover:blur-2xl" />
    </button>
  );
}

export default Button;
