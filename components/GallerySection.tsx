import React from 'react';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const images = [
  { url: '/13.JPG', rotate: '-6deg', text: 'TechnoVerse ' },
  { url: '/1.JPG',  rotate: '5deg',  text: 'Code Arena ' },
  { url: '/2.JPG',  rotate: '-4deg', text: 'Tech Nexus ' },
  { url: '/3.JPG', rotate: '6deg',  text: 'AI Pavilion ' },
  { url: '/4.JPG', rotate: '-5deg', text: 'Innovation Hub ' },
  { url: '/5.JPG', rotate: '4deg',  text: 'Cyber Stage ' },
  { url: '/6.JPG', rotate: '-6deg', text: 'Dev Zone ' },
  { url: '/7.JPG', rotate: '5deg',  text: 'Future Lab ' },
  { url: '/8.JPG', rotate: '-4deg', text: 'Quantum Hall ' },
  { url: '/9.JPG', rotate: '6deg', text: 'Digital Frontier ' },
  { url: '/10.JPG', rotate: '-5deg', text: 'Neural Network ' },
  { url: '/11.JPG', rotate: '4deg',  text: 'Binary Beats ' },
  { url: '/12.JPG', rotate: '-6deg', text: 'TechnoVerse ' },

    
  ];

  return (
    <section id="gallery" className="bg-black relative py-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[20%] w-96 h-96 bg-vibrant/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-32 text-center">
          <h2 className="text-7xl md:text-[10rem] font-bold tracking-normal mb-10 leading-none font-display uppercase">
            THE <span className="text-vibrant">ARCHIVE.</span>
          </h2>
          <div className="h-2 w-48 bg-vibrant rounded-full mb-10"></div>
          <p className="text-3xl text-muted max-w-2xl font-hand leading-tight">
            Capturing the raw energy, the sleepless nights, and the moments of pure brilliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: img.rotate }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              className="relative p-6 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)] group"
            >
              {/* Tape decoration */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-vibrant/30 backdrop-blur-md rotate-[-1deg] z-10 border border-white/20"></div>
              
              <div className="aspect-[5/6] overflow-hidden bg-secondary mb-10 relative">
                 <img src={img.url} alt="Gallery Shot" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-vibrant/5 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
              
              <div className="flex justify-between items-center text-black px-4">
                 <div className="flex items-center gap-1 font-display text-xl opacity-40">
                    <span className="text-vibrant">#</span> 0{idx + 1}
                 </div>
              </div>
             
            </motion.div>
          ))}
        </div>

        <div className="mt-48 flex justify-center">
           {/* <button className="group relative px-20 py-10 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl">
              <span className="relative z-10 text-3xl font-display font-bold uppercase tracking-[0.3em]">Launch Gallery</span>
              <div className="absolute inset-0 bg-vibrant translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
           </button> */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
