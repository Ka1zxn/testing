/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/sections/Hero';
import { Event } from './components/sections/Event';
import { WorksCategory } from './components/sections/WorksCategory';
import { WorksGallery } from './components/sections/WorksGallery';
import { Profile } from './components/sections/Profile';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/Navbar';
import { Noise } from './components/ui/Shared';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          transition={{ duration: 2, ease: "circIn" }}
          className="h-[1px] bg-white"
        />
        <div className="text-[10px] tracking-[0.5em] font-mono animate-pulse uppercase">
          Initializing 1:09 System...
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4] }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative antialiased selection:bg-white selection:text-black">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Noise />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Event />
        <WorksCategory />
        <WorksGallery />
        <Profile />
        <Contact />
      </main>

      {/* Custom Cursor Overlay could go here */}
    </div>
  );
}
