import React from 'react';
import { Barcode } from '../ui/Shared';

const CATEGORIES = [
  'ILLUSTRATION',
  'MV-ILLUSTRATION',
  'EVENT',
  'GOODS'
];

export const WorksCategory: React.FC = () => {
  return (
    <section className="relative h-screen bg-neutral-900 overflow-hidden flex items-center justify-center">
      {/* Background Glitch Image */}
      <div className="absolute inset-0 scanlines">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100" 
          className="w-full h-full object-cover opacity-80 mix-blend-screen saturate-200"
          alt="Glitch Art"
        />
        {/* RGB Split Offset shadows would be nice here, but keeping it simpler for now */}
        <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply" />
      </div>

      {/* Category List (Top Left) */}
      <div className="absolute top-12 left-12 z-20 flex flex-col gap-6">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em]">WORKS CATEGORY</span>
        </div>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat, i) => (
            <div key={cat} className="flex gap-4 items-center">
              <span className="text-[10px] opacity-40">{i+1}:</span>
              <span className={cat === 'MV-ILLUSTRATION' ? "text-white" : "text-white/40"}>
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Info Card (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-20 w-80 glass p-1 flex flex-col gap-1 shadow-2xl">
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 text-[9px] opacity-40">
          <span>category_02</span>
          <span>✕</span>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="text-xl font-bold tracking-tight">MV Illustration</div>
          <p className="text-[11px] leading-relaxed opacity-60">
            I draw MV illustrations for<br />
            Vocaloid and Cover videos.
          </p>
          <a 
            href="#" 
            className="bg-white text-black text-[11px] font-bold py-2 px-6 rounded-full w-fit hover:scale-105 transition-transform flex items-center gap-2"
          >
            To MV Illustration List <span>→</span>
          </a>
          <div className="flex justify-end">
            <Barcode className="scale-75 origin-right" />
          </div>
        </div>
      </div>

      {/* Horizontal Scanline Animation */}
      <div 
        className="absolute w-full h-[2px] bg-green-500/30 blur-[1px] shadow-[0_0_10px_#22c55e] z-10"
        style={{
          top: '50%',
          animation: 'scanline-move 8s linear infinite'
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline-move {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}} />

      <div className="absolute bottom-6 left-12 text-[10px] opacity-20 tracking-tighter">
        00.15.36.51
      </div>
    </section>
  );
};
