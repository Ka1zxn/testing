import React from 'react';
import { Barcode } from '../ui/Shared';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-64 relative border-t border-white/5 bg-surface-base">
      <div className="container px-6 grid grid-cols-12 gap-12 relative z-10">
        
        {/* Left: Info */}
        <div className="col-span-5 flex flex-col gap-12">
          <div>
            <h2 className="text-8xl font-bold tracking-tighter mb-4">CONTACT</h2>
            <Barcode className="mb-12" />
            
            <div className="text-[11px] leading-[2.5] opacity-60">
              Please contact me via this form or<br />
              <a href="#" className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all">Twitter(X) DM</a>.<br />
              For requests, please include details, desired deadline, and budget.
            </div>
          </div>

          <div className="flex-1 relative h-[300px] mt-12 overflow-hidden border-t border-dashed border-white/5">
             <div 
               className="absolute inset-x-0 bottom-0 h-full opacity-10"
               style={{
                 backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                 backgroundSize: '20px 20px',
                 transform: 'perspective(1000px) rotateX(45deg) scaleY(2)',
               }}
             />
             {/* Floating elements */}
             <motion.div 
               animate={{ rotate: [-10, -5, -10], y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 left-10 w-20 h-20 bg-pink-500/20 glass p-1 flex items-center justify-center -rotate-12 shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=200&q=80" className="w-full h-full object-cover grayscale brightness-125" alt="Sticker" />
             </motion.div>

             <motion.div 
               animate={{ rotate: [10, 15, 10], y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 glass p-1 flex items-center justify-center rotate-12 shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=200&q=80" className="w-full h-full object-cover grayscale" alt="Sticker" />
             </motion.div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="col-span-7 flex flex-col gap-12 bg-white/5 backdrop-blur-sm p-12 border-l border-white/5 relative">
            <div className="absolute top-12 left-12 text-[10px] opacity-40 tracking-widest font-bold">(FORM)</div>
            
            <form className="flex flex-col gap-10 mt-12">
                <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-bold opacity-60">Name</label>
                    <input 
                        type="text" 
                        placeholder="Meme-chan" 
                        className="bg-white/5 border border-white/10 px-4 py-3 text-[11px] outline-none focus:border-white/40 transition-colors rounded-sm"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-bold opacity-60">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="info@example.com" 
                        className="bg-white/5 border border-white/10 px-4 py-3 text-[11px] outline-none focus:border-white/40 transition-colors rounded-sm"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-[11px] font-bold opacity-60">Inquiry Content</label>
                    <textarea 
                        rows={6}
                        placeholder="Please enter..." 
                        className="bg-white/5 border border-white/10 px-4 py-3 text-[11px] outline-none focus:border-white/40 transition-colors rounded-sm resize-none"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button className="bg-white text-black text-[12px] font-bold py-3 px-12 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Submit
                    </button>
                </div>
            </form>

            <div className="absolute bottom-6 right-6">
                 <Barcode className="opacity-40" />
            </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] opacity-20 tracking-[0.5em] uppercase pointer-events-none">
        © 2025 1:09 KAIZXN PORTFOLIO
      </div>
    </section>
  );
};
