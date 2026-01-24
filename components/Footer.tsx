
import React from 'react';
import { Github, Twitter, Instagram, ArrowUpRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-32 pb-16 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Branding - Solid White Style */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none flex flex-col items-center">  
        <span className="font-display text-[12vw] font-bold text-accent/5 uppercase tracking-[0.5em] mb-[-4vw]">TECHNO</span>
        <span className="font-display text-[25vw] font-bold text-white/[0.02] uppercase tracking-normal">MANTRA</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <div className="flex items-center gap-6 mb-12">
               {/* <div className="w-24 h-24 bg-accent rounded-[2.5rem] flex items-center justify-center text-white rotate-12 shadow-[0_0_50px_rgba(139,92,246,0.4)] border border-white/20">
                  <Zap size={44} fill="currentColor" />
               </div> */}
               <img className="h-16" src="./public/buddha.jpeg" alt="" /><h4 className="text-4xl font-bold tracking-normal uppercase font-display">TEHNO<span>MANTRA</span></h4>
            </div>
            <p className="text-3xl text-muted max-w-md font-hand leading-relaxed mb-12">
              "Enlightening the path through neon corridors of innovation." 🧘‍♂️✨
            </p>
            <div className="flex gap-8">
               {[Instagram, Twitter, Github].map((Icon, i) => (
                 <a key={i} href="#" className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all transform hover:-translate-y-2 shadow-xl backdrop-blur-md">
                    <Icon size={28} />
                 </a>
               ))}
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-12">
            <div>
              <h5 className="text-[12px] font-bold uppercase tracking-[0.5em] text-white/30 mb-10">Interface</h5>
              <ul className="space-y-6 text-2xl font-display tracking-[0.1em] uppercase">
                <li><a href="#about" className="hover:text-vibrant transition-all flex items-center gap-3">Origins <ArrowUpRight size={20} className="text-accent" /></a></li>
                <li><a href="#games" className="hover:text-vibrant transition-all flex items-center gap-3">Missions <ArrowUpRight size={20} className="text-accent" /></a></li>
                <li><a href="#gallery" className="hover:text-vibrant transition-all flex items-center gap-3">Archive <ArrowUpRight size={20} className="text-accent" /></a></li>
              </ul>
            </div>
            <div className="relative">
              <h5 className="text-[12px] font-bold uppercase tracking-[0.5em] text-white/30 mb-10">System</h5>
              <ul className="space-y-6 text-2xl font-display tracking-[0.1em] uppercase">
                <li className="flex items-center gap-4"><div className="w-4 h-4 bg-vibrant rounded-full animate-pulse shadow-[0_0_15px_#00f2ff]"></div> Signal</li>
                <li className="text-muted">Stability: High</li>
              </ul>
              
              {/* <div className="absolute -bottom-10 right-0 w-36 h-36 bg-white rounded-[3rem] p-3 shadow-2xl rotate-[-6deg] flex items-center justify-center z-20 hover:scale-110 transition-transform cursor-pointer">
                 <div className="w-full h-full bg-accent rounded-[2.5rem] flex items-center justify-center text-white font-display font-bold text-4xl shadow-inner">
                    JOIN
                 </div>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] font-bold tracking-[0.4em] text-white/20 uppercase font-display">
          <p>© 2025 TEHNOMANTRA CORE | TECH-SPIRITUAL COLLECTIVE</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-vibrant transition-colors">Privacy Dockets</a>
            <a href="#" className="hover:text-vibrant transition-colors">Terminal Terms</a>
          </div>
        </div>
      </div>

      {/* Decorative Helmet Peek using provided visual */}
      <div className="absolute bottom-[-10px] left-[5%] w-56 h-56 opacity-10 pointer-events-none overflow-hidden grayscale contrast-125">
         <img src="./public/tm_hero.jpeg" className="character-cutout object-contain w-full h-full" alt="Futuristic Helmet" />
      </div>
    </footer>
  );
};

export default Footer;
