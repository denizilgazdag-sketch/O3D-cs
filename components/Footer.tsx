
import React from 'react';

const Footer: React.FC<{ onNavigate: (page: 'home' | 'legal') => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">O3</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight">O3D Creative.</span>
          </div>
          <p className="text-slate-500 leading-relaxed font-medium">
            A small, passionate studio in London making cool stuff for wonderful people. Hand-modeled, carefully printed, and shipped with a smile.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:gap-24">
          <div className="space-y-4">
            <h4 className="font-extrabold text-lg text-slate-900">Get in touch</h4>
            <p className="text-slate-500 text-sm font-medium">
              hello@o3dcreative.com<br />
              London, UK
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-extrabold text-lg text-slate-900">Legal stuff</h4>
            <button 
              onClick={() => onNavigate('legal')}
              className="text-rose-500 text-sm font-bold hover:underline"
            >
              Terms & Privacy
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
        <p>© 2024 O3D Creative Services. Made with love in London.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-rose-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
