
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Shield, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotatePolaroid = useTransform(scrollYProgress, [0.1, 0.4], [-8, 8]);
  const yParallax = useTransform(scrollYProgress, [0.1, 0.5], [0, -80]);

  return (
    <section id="about" className="bg-[#050505] relative overflow-hidden py-40">
      {/* Decorative dot background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-vibrant text-black font-bold rounded-full mb-10 transform -rotate-2 shadow-xl">
                 <Shield size={20} fill="currentColor" />
                 <span className="font-display tracking-widest">ESTABLISHED 2009</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-normal mb-10 leading-[0.8] uppercase font-display">
                The <br /> <span className="text-vibrant">Legacy Of</span> <br /> Technomantra
              </h2>
              <p className="text-2xl text-muted leading-relaxed font-medium mb-12 max-w-xl">
                TEHNOMANTRA is more than a festival—it's a vibrant ecosystem. We mix the world's most advanced technology with a raw human spirit of adventure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="p-10 rounded-[4rem] bg-secondary border border-white/5 relative group">
                    <Star className="absolute top-10 right-10 text-vibrant opacity-30 group-hover:opacity-100 transition-opacity" size={40} />
                    <p className="text-7xl font-display font-bold mb-2 text-white">600<span className="text-vibrant text-4xl ml-1">+</span></p>
                    <p className="text-sm text-muted uppercase font-bold tracking-[0.3em] font-display">Last Year Participants</p>
                 </div>
                 <div className="p-10 rounded-[4rem] bg-vibrant text-black relative group shadow-2xl">
                    <Cpu className="absolute top-10 right-10 opacity-20" size={40} />
                    <p className="text-7xl font-display font-bold mb-2">2000<span className="text-black/50 text-4xl ml-1">+</span></p>
                    <p className="text-sm text-black/70 uppercase font-bold tracking-[0.3em] font-display">Last Year Crowd</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative">
              {/* Polaroid with Baby Astronaut image */}
              <motion.div 
                style={{ rotate: rotatePolaroid, y: yParallax }}
                className="polaroid absolute -top-16 -right-16 z-20 w-72 md:w-96 hidden xl:block"
              >
                <div className="tape"></div>
                <img src="/ks.jpg" className="w-full h-80 object-cover mb-6 rounded-sm" alt="Baby Astronaut" />
                <p className="text-black font-hand text-4xl text-center">Star Event Of KS ✨</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
              >
                {/* Tech Face Image from provided visuals */}
                <img 
                  src="/balcony.JPG" 
                  alt="Tech Face Visual" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
              
              {/* Decorative Colorful Sticker */}
              <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 rounded p-4 shadow-2xl z-30 hidden lg:block">
                 <div className="w-full h-full rounded-[2.5rem] flex items-center justify-center text-7xl">
                    <img className="rounded-[2.5rem]" src="/thunder.jpg" alt="" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
