
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-[-5%] w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-sm mx-auto lg:mx-0 shadow-sm">
            ✨ Hello from London!
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Dream it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 italic">
              We'll build it.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Whether you have a professional design or just a napkin sketch, our London studio brings your ideas to life. We specialize in <b>creative 3D modeling</b> and high-detail printing for anyone, anywhere.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#quote" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1">
              Let's Chat About Your Idea
            </a>
            <a href="#works" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-2xl hover:border-rose-300 transition-all shadow-sm">
              See What We've Made
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400 font-bold text-sm tracking-widest uppercase">
            <span>Modeling Included</span>
            <span className="w-1.5 h-1.5 bg-rose-300 rounded-full"></span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative z-10 group">
             <div className="absolute -inset-4 bg-gradient-to-tr from-rose-400/20 to-indigo-400/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all"></div>
             <img 
               src="https://images.unsplash.com/photo-1573485158654-284d14444a9a?q=80&w=1000&auto=format&fit=crop" 
               alt="Warm 3D Printed Objects" 
               className="relative w-full h-auto rounded-[2.5rem] shadow-2xl border-[12px] border-white transform hover:scale-[1.02] transition-transform duration-700 object-cover aspect-[4/5]"
             />
             <div className="absolute top-8 -right-8 bg-white p-5 rounded-3xl shadow-2xl border border-rose-50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-2xl">🧸</div>
                <div>
                   <p className="font-bold text-slate-800 text-sm leading-none">Custom Toys</p>
                   <p className="text-xs text-rose-500 font-bold">100% Unique</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
