import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Barcode } from '../ui/Shared';

const FILTERS = ['All', 'Illustration', 'MV Illustration', 'Event', 'Goods'];
const WORKS = [
  { id: 1, title: 'Illustration Book Cover', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80', wide: true },
  { id: 2, title: 'Cat Day, Avail T-shirt Illustration', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' },
  { id: 3, title: 'Meme Illustration', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80', tall: true },
  { id: 4, title: 'Ikebukuro Emotions 2022', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80', tall: true },
  { id: 5, title: 'Maid Day', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80', tall: true },
];

export const WorksGallery: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className="py-32 bg-surface-muted/50">
      <div className="container px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-24">
            <div>
                 <h2 className="text-6xl font-bold tracking-tighter mb-4">WORKS_</h2>
                 <Barcode />
            </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-12 mb-20">
            <div className="flex items-center gap-12">
                <span className="text-[10px] opacity-40 tracking-widest">(FILTER)</span>
                <div className="flex gap-1 bg-black/40 backdrop-blur p-1 rounded-full border border-white/5">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all ${
                                activeFilter === filter 
                                ? 'bg-white text-black' 
                                : 'hover:bg-white/10 text-white/60'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent border-dashed border-b border-white/10" />
        </div>

        {/* Grid Meta */}
        <div className="text-[10px] opacity-40 tracking-widest mb-12 flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
             (17 WORKS)
        </div>

        {/* Grid */}
        <div className="grid grid-cols-10 gap-x-12 gap-y-24 auto-rows-min">
            <AnimatePresence mode="popLayout">
                {WORKS.map((work, i) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={work.id}
                        className={`
                            group cursor-pointer
                            ${work.wide ? 'col-span-4' : work.tall ? 'col-span-2' : 'col-span-3'}
                            flex flex-col gap-6
                        `}
                    >
                        <div className={`overflow-hidden bg-white/5 relative aspect-${work.wide ? 'video' : 'square'}`}>
                            <img 
                                src={work.img} 
                                alt={work.title}
                                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                        </div>
                        <div className="text-[11px] font-medium opacity-60 group-hover:opacity-100 transition-opacity leading-tight tracking-tight text-center sm:text-left">
                            {work.title}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
