import React from 'react';
import { motion } from 'motion/react';
import { Window, Barcode } from '../ui/Shared';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          perspective: '1000px',
          transform: 'rotateX(20deg) scale(1.5)',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Main Content Area */}
      <div className="container relative z-10 grid grid-cols-12 gap-6 items-center">
        
        {/* Left Side: Metadata & Floating Window */}
        <div className="col-span-5 flex flex-col gap-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Window title="meme.webp" className="w-[480px] aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Illustration" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
              {/* Anime style overlay if possible, using a placeholder for now */}
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-color-dodge" />
            </Window>
          </motion.div>

          <div className="flex flex-col gap-4">
            <div className="text-[12px] leading-relaxed opacity-80 uppercase tracking-[0.2em]">
              1:09<br />
              illustration<br />
              portfolio
            </div>
            <Barcode className="text-white" />
          </div>
        </div>

        {/* Right Side: Large Character & Smaller Windows */}
        <div className="col-span-7 relative h-[800px] flex items-center justify-center">
          {/* Main Character Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="text-[120px] font-bold opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              CYBER Y2K
            </div>
            {/* Using a clear high-contrast anime-style placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Manga Style Character"
              className="h-[700px] w-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] relative z-10 object-contain"
            />
          </motion.div>

          {/* Floating Small Windows */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] z-20"
          >
            <Window title="meme.webp" className="w-[180px] aspect-square">
              <div className="w-full h-full bg-white/5 opacity-40" />
            </Window>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 z-20"
          >
            <Window title="meme.webp" className="w-[120px] aspect-[4/5]">
               <div className="w-full h-full bg-white/5 opacity-30" />
            </Window>
          </motion.div>

          {/* 3D-ish blobs placeholders (using CSS shapes/blur) */}
          <div className="absolute top-20 right-40 w-32 h-32 bg-white/10 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-white/5 blur-3xl rounded-full animate-pulse" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[9px] tracking-[0.3em] opacity-40 uppercase">Scroll</span>
      </div>
    </section>
  );
};
