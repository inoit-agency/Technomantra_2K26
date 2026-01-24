
import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection: React.FC = () => {
  const sponsors = [
    { name: 'Equity soft', logo: 'https://technomantra2k24.vercel.app/static/media/equity_dark.ad69e20a28e3a2d63d6e.png' },
    { name: 'ims', logo: 'https://technomantra2k24.vercel.app/static/media/ims.07d21e535c314ac99aaf.png' },
    { name: 'Tea Post', logo: 'https://technomantra2k24.vercel.app/static/media/tea_post.8e05f59cb2011ab2fc44.png' },
    { name: 'vcerp', logo: 'data:image/png;base64,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' },
    { name: 'Expert Education', logo: 'https://technomantra2k25.vercel.app/assets/Expert_Education-B4v1Jc6_.png' },
    { name: 'Dragon tattoo', logo: 'https://technomantra2k25.vercel.app/assets/Dragon1-DhWUVGlj.png' },
    { name: 'kaka pvc', logo: 'https://ksschool.org.in/technomantra/Images/sponsor/S0010KAKA%20PVC%20PROFILE105802.jpg' },
     { name: 'antaa', logo: 'https://ksschool.org.in/technomantra/Images/sponsor/S0004Anantaa%20Wellness102129.jpg' },
      { name: 'lassi', logo: 'https://ksschool.org.in/technomantra/Images/sponsor/S0005Vahali%20102719.jpg' },
       { name: 'the empire', logo: 'https://technomantra2k25.vercel.app/assets/Empire-BzPrPPB5.png' },

        { name: 'asima overseas', logo: 'https://ksschool.org.in/technomantra/Images/sponsor/S0006Asima%20Overseas%20103829.jpg' },

         { name: 'catalyst', logo: 'https://ksschool.org.in/technomantra/Images/sponsor/S0009Catalyst%20Centre%20of%20Excellence%20105434.jpg' },

         { name: 'yamaha', logo: 'https://th.bing.com/th/id/OIP.ctYcFnJ01fPELk16Ceu6FQHaFj?w=242&h=182&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1' },

         { name: 'balaji', logo: 'https://th.bing.com/th/id/OIP.fP2V6MjBZZqEOo-uTFpm5AHaGV?w=200&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1' },

         { name: 'sbi', logo: 'https://th.bing.com/th/id/OIP.AMvlzBRdx34GRqz86fjyrwHaCk?w=334&h=121&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1' },
         
  ];

  return (
    <section id="sponsors" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 rounded-full">Partnerships</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Our Past Power <span className="text-accent">Sponsors</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center transition-all duration-500">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer hover:opacity-100 transition-opacity"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 py-10 border-t border-white/5 text-center">
          <p className="text-muted text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Want to collaborate with us?</p>
          <button className="text-accent hover:text-white border border-accent/30 px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-accent">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
