
import React from 'react';
import { motion } from 'framer-motion';

const UnleashSection: React.FC = () => {
  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1 bg-accent text-black font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Innovation</div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 tracking-tighter">
              UNLEASH <br /> <span className="text-white/40">IMAGINATION</span>
            </h2>
            <p className="text-muted leading-relaxed max-w-md text-lg">
              PixelAlchemy is a unique platform where technology and creativity blend seamlessly to produce captivating AI-generated art. Designed for enthusiasts and professionals alike.
            </p>
            <button className="mt-10 border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs">
              Explore Now
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
             <div className="aspect-square bg-secondary border border-white/10 rounded-2xl overflow-hidden relative group">
               <img src="https://picsum.photos/seed/unleash1/800/800" alt="AI Head" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center text-black p-8 text-center rotate-12 animate-pulse">
               <span className="font-display font-bold text-xs uppercase tracking-tighter">New Era Of Art</span>
             </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-accent/10">
              <img src="https://picsum.photos/seed/magic1/800/1000" alt="Magic AI" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-1/2 bg-accent/5 blur-[120px] -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              EXPLORE THE MAGIC <br /> OF PIXELAI
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Dive into an immersive world where pixels transform into wonder. Our advanced algorithms enable you to generate high-fidelity art that was once thought impossible.
            </p>
            <div className="flex flex-col gap-6">
               {[
                 { title: 'Generative Models', desc: 'Custom trained models for specific styles.' },
                 { title: 'Neural Refinement', desc: 'Post-process upscaling up to 8K resolution.' }
               ].map((item) => (
                 <div key={item.title} className="flex gap-4 items-start border-l-2 border-accent pl-6 py-2">
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default UnleashSection;
