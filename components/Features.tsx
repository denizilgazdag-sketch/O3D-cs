
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Global Love', desc: 'Secure shipping from our hands in London to yours, wherever you are.', icon: '🌍' },
    { title: 'Artisan Detail', desc: 'We use high-res printers that capture every tiny nuance of your idea.', icon: '🎨' },
    { title: 'From Scratch', desc: 'Don\'t have a file? No problem! We can do the 3D modeling for you.', icon: '✏️' },
    { title: 'Personalized', desc: 'Every object is hand-finished and checked for that perfect feeling.', icon: '💝' }
  ];

  return (
    <section className="py-24 px-6 border-y border-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {features.map((f, i) => (
          <div key={i} className="text-center md:text-left space-y-4 group">
            <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{f.icon}</div>
            <h3 className="text-xl font-extrabold text-slate-800">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
