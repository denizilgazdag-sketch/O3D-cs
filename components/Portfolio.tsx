
import React from 'react';

const works = [
  { id: 1, title: 'Bespoke Desk Friend', category: 'Creative Gift', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Architectural Miniature', category: 'Hand-finished', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Custom Game Pieces', category: 'Art & Play', img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Organic Jewelry Stand', category: 'Home Decor', img: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Prototype Housing', category: 'Invention', img: 'https://images.unsplash.com/photo-1563393223164-3259b3605c06?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Personalized Planter', category: 'Gift Ideas', img: 'https://images.unsplash.com/photo-1591491719669-8df5602d5aa7?auto=format&fit=crop&q=80&w=600' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="works" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-500 font-bold uppercase tracking-[0.2em] text-xs">Our Little Gallery</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Small things, big joy.</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">Every piece is modeled with love and printed with precision in our London workspace.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((work) => (
            <div key={work.id} className="group relative bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100">
              <div className="aspect-square overflow-hidden rounded-[2rem] bg-slate-100">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="pt-6 pb-2 px-4">
                <p className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-1">{work.category}</p>
                <h3 className="text-slate-800 text-xl font-extrabold">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
