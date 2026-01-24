import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SiteLoaderProps {
  onComplete: () => void;
}

const SiteLoader: React.FC<SiteLoaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Automatically finish loading after 3.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] bg-[#05020a] flex flex-col items-center justify-center"
    >
      {/* Background Ambient Glow (Kept for the dark vibe) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[200px] rounded-full"
        />
      </div>

      {/* YOUR GIF HERE */}
      <div className="relative z-10">
        <motion.video
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // REPLACE THE PATH BELOW WITH YOUR ACTUAL GIF FILE NAME
          src="./public/loader.mp4" 
          alt="Loading Animation" 
          autoPlay
          loop
          muted
          className="max-w-[90vw] md:max-w-[500px] w-auto h-auto"
        />
      </div>

      {/* Simple footer text (Optional) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12"
      >
         <div className="text-[50px] md:text-[10px] font-mono text-white uppercase">
            Technomantra: Loading The Vibe.... 
         </div>
      </motion.div>
    </motion.div>
  );
};

export default SiteLoader;