import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [londonTime, setLondonTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const time = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      setLondonTime(time);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-44 pb-24 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[-5%] w-[40rem] h-[40rem] bg-rose-200/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-indigo-200/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10 z-10 text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200 text-slate-600 font-bold text-sm mx-auto lg:mx-0 shadow-sm glass">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            </span>
            <span>London Studio <span className="mx-2 text-slate-300">|</span> {londonTime} GMT</span>
          </div>
          
          <h1 className="text-7xl lg:text-[9rem] font-black text-slate-900 leading-[0.85] tracking-tighter">
            We model,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 italic">
              you create.
            </span>
          </h1>
          
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            High-precision 3D modeling and printing lab in the heart of London. We ship your imagination worldwide.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-6">
            <a href="#quote" className="px-12 py-6 bg-slate-900 text-white font-bold rounded-[2rem] hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 active:scale-95 text-lg">
              Request a Quote
            </a>
            <a href="#works" className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-[2rem] hover:border-rose-300 transition-all shadow-sm hover:shadow-lg text-lg glass">
              Explore Our Lab
            </a>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase">
            <div className="flex items-center gap-2.5 group cursor-default">
              <span className="w-2 h-2 bg-rose-500 rounded-full group-hover:scale-150 transition-transform"></span>
              Custom Modeling
            </div>
            <div className="flex items-center gap-2.5 group cursor-default">
              <span className="w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></span>
              Worldwide Post
            </div>
            <div className="flex items-center gap-2.5 group cursor-default">
              <span className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></span>
              Fast Delivery
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
          <div className="relative z-10">
             <div className="absolute -inset-8 bg-gradient-to-br from-rose-500/10 to-indigo-500/10 rounded-[4rem] blur-3xl -z-10"></div>
             <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[16px] border-white bg-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1573485158654-284d14444a9a?q=80&w=1200&auto=format&fit=crop" 
                 alt="O3D Creative Workspace" 
                 className="w-full h-auto transform hover:scale-110 transition-transform duration-[2s] object-cover aspect-[4/5]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
             </div>
             
             {/* Floating UI Elements */}
             <div className="absolute -bottom-8 -left-8 bg-white/90 p-7 rounded-[2.5rem] shadow-2xl glass border border-white/50 animate-bounce-slow" style={{ animationDuration: '5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-100">📦</div>
                  <div>
                     <p className="font-black text-slate-900 text-lg leading-none tracking-tight">Worldwide Post</p>
                     <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest mt-1.5">Royal Mail Tracked</p>
                  </div>
                </div>
             </div>

             <div className="absolute -top-10 -right-6 bg-white/90 p-7 rounded-[2.5rem] shadow-2xl glass border border-white/50 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-rose-100">⚙️</div>
                  <div>
                     <p className="font-black text-slate-900 text-lg leading-none tracking-tight">Rapid Print</p>
                     <p className="text-[10px] text-rose-500 font-black uppercase tracking-widest mt-1.5">Ships in 48 Hours</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
