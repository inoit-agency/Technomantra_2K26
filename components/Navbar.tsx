
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#games' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partners', href: '#sponsors' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] apple-blur border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 h-12 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="font-semibold text-sm tracking-tight">TEHNOMANTRA</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-white/80">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold hover:bg-white/90 transition-all">
              Register Now
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-black pt-20 px-10 flex flex-col gap-8 md:hidden"
          >
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-3xl font-bold">
                {item.name}
              </a>
            ))}
            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold mt-4">
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
