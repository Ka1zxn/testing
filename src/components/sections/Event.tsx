import React from 'react';
import { motion } from 'motion/react';
import { Barcode } from '../ui/Shared';

const EVENTS = [
  { date: '2025.09.13 - 2025.09.15', title: 'Cute is XX Exhibition' },
  { date: '2025.10.04 - 2025.10.05', title: 'Hamakuri' },
  { date: '2025.11.15 - 2025.11.16', title: 'Design Festa' },
];

export const Event: React.FC = () => {
  return (
    <section id="works" className="relative py-32 border-t border-white/5">
      <div className="container px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">EVENT_</h2>
          <Barcode className="mb-8" />
          <p className="text-[11px] leading-relaxed opacity-60 max-w-sm">
            Updating the schedule for events and more.<br />
            For the latest information, please check Twitter(X).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 border-t border-white/10 relative">
          <div className="absolute top-[-20px] right-0 text-[9px] tracking-widest opacity-40">
            (SCHEDULE)
          </div>

          {/* Event List */}
          <div className="col-span-7 flex flex-col">
            {EVENTS.map((event, i) => (
              <div 
                key={i}
                className="py-10 border-b border-white/10 group cursor-default hover:bg-white/5 transition-colors px-4 flex flex-col gap-2"
              >
                <div className="text-[11px] opacity-40 font-medium">{event.date}</div>
                <div className="text-[18px] tracking-wide group-hover:translate-x-2 transition-transform">{event.title}</div>
              </div>
            ))}
          </div>

          {/* Decorative Graphic */}
          <div className="col-span-5 relative flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
                transform: 'skewY(-5deg) scale(2)',
              }}
            />
            {/* Sticker Placeholders */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-48 h-48 drop-shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm transform rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded border border-white/10 flex items-center justify-center p-4">
                 <img 
                   src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                   className="w-full h-full object-cover grayscale brightness-125 hover:grayscale-0 transition-all"
                   alt="Sticker"
                 />
              </div>
            </motion.div>

            {/* Smaller Sticker */}
             <motion.div
              animate={{ rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 right-10 z-20 w-32 h-32"
            >
              <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-lg transform -rotate-12" />
               <img 
                 src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                 className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale"
                 alt="Sticker"
               />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
