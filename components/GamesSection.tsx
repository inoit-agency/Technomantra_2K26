
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronRight, Sparkles, Zap } from 'lucide-react';

const GamesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TECH' | 'NON-TECH'>('TECH');

  const techMissions = [
    { title: 'Neural Matrix', cat: 'AI/ML', prize: '$5K', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000', sticker: '⚡' },
    { title: 'Ghost Protocol', cat: 'SECURITY', prize: '$8K', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000', sticker: '🛡️' },
    { title: 'Core Duel', cat: 'CODING', prize: '$4K', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000', sticker: '🚀' },
  ];

  const nonTechMissions = [
    { title: 'Pixel Royale', cat: 'ESPORTS', prize: '$2K', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000', sticker: '🎮' },
    { title: 'Cosmic Quest', cat: 'ARTS', prize: '$3K', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000', sticker: '✨' },
    { title: 'Strategy Labs', cat: 'QUIZ', prize: '$1K', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1000', sticker: '🧠' },
  ];

  const currentMissions = activeTab === 'TECH' ? techMissions : nonTechMissions;

  return (
    <section id="games" className="bg-[#080310] relative py-40 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-7xl md:text-9xl font-bold tracking-normal mb-8 leading-[0.8] uppercase font-display">
              CHOOSE YOUR <br /> <span className="text-vibrant">KARMA.</span>
            </h2>
            <p className="text-xl text-muted font-medium max-w-lg mx-auto">Master the technical or dominate the non-technical arena.</p>
          </motion.div>

          <div className="flex gap-4 p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            {(['TECH', 'NON-TECH'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-14 py-4 rounded-full text-lg font-bold tracking-widest uppercase font-display transition-all duration-500 relative overflow-hidden ${
                  activeTab === tab ? 'text-black' : 'text-muted hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-vibrant z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab} ARENA</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 card-perspective">
          <AnimatePresence mode="wait">
            {currentMissions.map((game, idx) => (
              <motion.div
                key={game.title + activeTab}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative h-[500px] rounded-[5rem] overflow-hidden bg-secondary border border-white/5 shadow-2xl"
              >
                <img 
                  src={game.img} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                />
                
                {/* <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-5xl shadow-2xl z-20 rotate-[-12deg] group-hover:rotate-0 transition-transform border border-white/20">
                   {game.sticker}
                </div> */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center">
                       <Sparkles size={28} className="text-accent" />
                    </div>
                    <span className="font-display font-bold text-3xl tracking-widest text-vibrant uppercase">{game.cat}</span>
                  </div>
                  
                  <h3 className="text-5xl font-bold mb-10 tracking-tighter leading-none group-hover:text-vibrant transition-colors">{game.title}</h3>
                  
                  <div className="flex justify-between items-center bg-white p-8 rounded-[3.5rem] shadow-2xl group-hover:bg-vibrant transition-all duration-500 transform group-hover:scale-[1.05]">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-black/40 mb-1">REWARD</span>
                      <span className="text-3xl font-bold font-display text-black">{game.prize}</span>
                    </div>
                    <button className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center transform ">
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 text-white/5 font-display text-[12rem] select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
