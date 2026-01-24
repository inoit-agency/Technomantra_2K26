
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GamesSection from './components/GamesSection';
import GallerySection from './components/GallerySection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import SiteLoader from './components/SiteLoader';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SiteLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SplashCursor />

            {/* Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-accent z-[101] origin-left shadow-[0_0_15px_#8b5cf6]"
              style={{ scaleX }}
            />

            <Navbar />
            <main>
              <Hero />
              <AboutSection />
              <GamesSection />
              <SponsorsSection />
              <GallerySection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
