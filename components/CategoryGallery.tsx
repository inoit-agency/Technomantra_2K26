
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CategoryGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('GENERATIVE');

  const categories = ['GENERATIVE', 'NEURAL', 'PIXEL ART', 'FRACTAL'];
  
  const items = [
    { id: 1, title: 'Transforming Ideas Into Art', category: 'GENERATIVE', img: 'https://picsum.photos/seed/gal1/600/800' },
    { id: 2, title: 'Infinite Creativity At Click', category: 'NEURAL', img: 'https://picsum.photos/seed/gal2/600/800' },
    { id: 3, title: 'Geometric Transcendence', category: 'FRACTAL', img: 'https://picsum.photos/seed/gal3/600/800' },
    { id: 4, title: 'Cybernetic Dreams', category: 'GENERATIVE', img: 'https://picsum.photos/seed/gal4/600/800' },
  ];

  const filteredItems = items.filter(i => activeCategory === 'GENERATIVE' || i.category === activeCategory);

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">
              EXPLORE <br /> <span className="text-accent">CATEGORIES</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.2em] transition-all duration-300 ${
                    activeCategory === cat ? 'bg-white text-black border-white' : 'hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted max-w-xs text-sm uppercase tracking-widest leading-relaxed">
            "AI art is where imagination meets innovation, transforming pixels into pieces of wonder."
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-primary relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] uppercase font-bold text-accent tracking-widest mb-2">{item.category}</div>
                    <h3 className="text-lg font-bold leading-tight mb-4">{item.title}</h3>
                    <div className="flex justify-between items-center text-[10px] text-muted font-bold tracking-widest">
                       <span>By : PixelAI</span>
                       <span>Dec 25, 2024</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 flex justify-center">
           <button className="flex items-center gap-4 group">
              <span className="text-xl font-display font-bold uppercase tracking-widest group-hover:text-accent transition-colors">Load More Works</span>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                <ArrowUpRight size={32} />
              </div>
           </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGallery;
