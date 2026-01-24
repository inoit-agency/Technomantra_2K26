import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronRight, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 40]);

  const imageUrl = "https://z-cdn-media.chatglm.cn/files/31bcdd39-f2d4-428f-b05b-167eae91d566.png?auth_key=1869014648-19a38749551247b29ebb9700dec92401-0-db5ae400e986afcb76e750667fb3de1f";
  
  // Check if the image is ready
  const isImageReady = useImageReady(imageUrl); // Assuming you pasted the hook here or imported it

  // If you don't want to create a separate file for the hook, paste it here:
  // const useImageReady = (url) => { ... } 
  // Then call it: const isImageReady = useImageReady(imageUrl);

  const drawPath: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.2 + i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration: 1.5, ease: "easeInOut" as const },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] blur-[180px] rounded-full"
        />
      </div>

      {/* Main Content Wrapper - ONLY SHOWS WHEN IMAGE IS READY */}
      <motion.div 
        // This ensures the entire section stays hidden until image loads
        initial={{ opacity: 0 }} 
        animate={{ opacity: isImageReady ? 1 : 0 }} 
        transition={{ duration: 0.5 }}
        style={{ y, opacity }} // Note: opacity might conflict, but useTransform usually takes precedence in Framer, or we remove the style prop opacity if needed. Let's keep it simple.
        // Actually, let's just use the animate prop for the initial reveal
        className="text-center z-10 max-w-7xl px-6 relative flex flex-col items-center w-full h-full justify-center"
      >
        
        {/* 1. BUDDHA IMAGE */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          // Only animate when isImageReady is true
          animate={isImageReady ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-[500px] md:max-w-[600px] mb-8"
        >
          <img 
            src={imageUrl} 
            alt="Event Logo" 
            className="w-full h-auto object-contain drop-shadow-2xl"
            style={{ maxHeight: '35vh' }} 
          />
        </motion.div>

        {/* 2. TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isImageReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative inline-block w-full"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold tracking-normal leading-none relative select-none font-display whitespace-nowrap flex justify-center">
            TECHN
            <span className="relative inline-block">
              O
              <motion.span
                initial={{ opacity: 0, x: 20, y: 20, rotate: 15, scale: 0.2 }}
                animate={isImageReady ? { opacity: 1, x: 0, y: 0, rotate: -12, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 200, damping: 12 }}
                className="absolute -top-10 -right-12 md:-top-14 md:-right-20 font-hand text-4xl md:text-7xl text-passion whitespace-nowrap pointer-events-none italic z-20"
              >
                2k26
                <motion.svg 
                  viewBox="0 0 100 20" 
                  className="w-full h-4 mt-[-8px] opacity-60"
                  initial={{ pathLength: 0 }}
                  animate={isImageReady ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <path d="M5,15 Q50,5 95,15" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </motion.span>
            </span>
            <span className="text-white relative inline-block">
              MANTRA
            </span>
          </h1>

          {/* Hand-drawn Underline SVG */}
          <svg
            viewBox="0 0 1200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none max-w-6xl"
          >
            <motion.path
              d="M50 25C200 10 800 40 1150 20"
              stroke="#00f2ff"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawPath}
              custom={0}
              initial="hidden"
              // Only trigger visible when image is ready
              animate={isImageReady ? "visible" : "hidden"}
            />
            <motion.path
              d="M80 40C250 28 900 45 1120 34"
              stroke="#8b5cf6"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.6"
              variants={drawPath}
              custom={1}
              initial="hidden"
              animate={isImageReady ? "visible" : "hidden"}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isImageReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-8 justify-center items-center mt-16"
        >
          <button className="group relative bg-white text-black px-12 py-5 rounded-full font-bold text-2xl hover:bg-vibrant transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-vibrant/40 flex items-center gap-3">
            Register <MousePointer2 size={24} />
          </button>
          <button className="text-white/80 text-2xl font-semibold flex items-center group gap-3 hover:text-vibrant transition-colors">
            Events <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Paste the hook here if you don't want a separate file
export const useImageReady = (imageUrl: string) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    
    const handleLoad = () => setReady(true);
    const handleError = () => setReady(true); 

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return ready;
};

export default Hero;