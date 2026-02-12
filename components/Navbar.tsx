
import React from 'react';

const Navbar: React.FC<{ onNavigate: (page: 'home' | 'legal') => void }> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center max-w-7xl mx-auto mt-4 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
          <span className="text-white font-black text-xl">O3</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-extrabold text-xl tracking-tight text-slate-800">O3D</span>
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Creative</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
        <button onClick={() => onNavigate('home')} className="hover:text-rose-500 transition-colors">Studio</button>
        <a href="#works" className="hover:text-rose-500 transition-colors">Our Creations</a>
        <a href="#quote" className="bg-rose-500 text-white px-6 py-2.5 rounded-xl hover:bg-rose-600 transition-all shadow-md hover:shadow-rose-200">
          Start a Project
        </a>
      </div>
      
      <button className="md:hidden p-2 text-slate-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
