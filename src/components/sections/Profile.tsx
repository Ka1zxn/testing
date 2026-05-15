import React from 'react';
import { motion } from 'motion/react';
import { Window, Barcode } from '../ui/Shared';

const HISTORY = [
  { year: '2025', title: 'Y2K Plush Exhibition' },
  { year: '2024', title: 'Ikebukuro PARCO Emotions 2024' },
  { year: '2024', title: '404 China Exhibition' },
  { year: '2024', title: 'Chokaigi (Super Artist Exhibition)' },
  { year: '2023', title: 'Vaporwave Exhibition' },
  { year: '2025', title: 'Cute is XX Exhibition' },
  { year: '2025', title: 'Drowning in Ribbons Exhibition' },
];

export const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-32 relative overflow-hidden">
      <div className="container px-6 grid grid-cols-12 gap-12">
        
        {/* Left Column: Info */}
        <div className="col-span-4 flex flex-col gap-12 relative z-10">
          <div>
            <h2 className="text-6xl font-bold tracking-tighter mb-4">PROFILE_</h2>
            <Barcode className="mb-12" />
            
            <div className="flex flex-col gap-8">
                <div className="text-[11px] leading-relaxed">
                    <span className="font-bold block mb-1">1:09(kaizxn)</span>
                    <span className="opacity-60">Illustrator / Designer</span>
                </div>

                <p className="text-[11px] leading-[2.2] opacity-60">
                    I am a freelance illustrator.<br />
                    Based in Tokyo, participating in many events.<br />
                    Mainly creating illustrations with neon colors and clear lines.<br />
                    For work inquiries,<br />
                    please use the form on the CONTACT page.
                </p>

                <div className="flex gap-3">
                    <a href="#" className="glass px-6 py-2 rounded-full text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Twitter ↗</a>
                    <a href="#" className="glass px-6 py-2 rounded-full text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Instagram ↗</a>
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="col-span-8 relative h-[600px]">
           {/* Distorted Grid */}
           <div 
             className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '40px 40px',
               transform: 'perspective(1000px) rotateY(-15deg) skewY(10deg) scale(1.5)',
             }}
           />

           {/* Overlapping Profile Windows */}
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="relative z-10 flex h-full items-center justify-center translate-x-12"
           >
              <Window title="profile.jpg" className="w-[340px] aspect-square absolute translate-x-[-120px] translate-y-[-80px] z-20">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&q=80" className="w-full h-full object-cover grayscale brightness-125" alt="Profile" />
              </Window>
              <Window title="profile.jpg" className="w-[280px] aspect-[4/5] absolute translate-x-[80px] translate-y-[-20px] z-30">
                <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80" className="w-full h-full object-cover grayscale brightness-110" alt="Profile" />
              </Window>
              <Window title="profile.jpg" className="w-[180px] aspect-[3/4] absolute translate-x-[220px] translate-y-[100px] z-10 opacity-60">
                <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80" className="w-full h-full object-cover grayscale" alt="Profile" />
              </Window>
           </motion.div>
        </div>

        {/* Bottom Details */}
        <div className="col-span-12 grid grid-cols-12 gap-12 mt-24 pt-24 border-t border-white/5 border-dashed">
            
            {/* Empty space for design rhythm */}
            <div className="col-span-6 border-r border-white/5 pr-12 relative overflow-hidden h-[300px]">
                <div 
                  className="absolute inset-x-0 bottom-0 h-40 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    transform: 'perspective(1000px) rotateX(60deg) scaleY(2)',
                  }}
                />
                {/* Sticker */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-12 left-12 w-24 h-24 bg-pink-500/10 border border-white/10 rounded backdrop-blur transform -rotate-12 flex items-center justify-center p-2"
                >
                    <img src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=200&q=80" className="w-full h-full object-cover grayscale brightness-125" alt="Sticker" />
                </motion.div>
            </div>

            {/* Links */}
            <div className="col-span-2">
                <div className="text-[10px] opacity-40 tracking-widest mb-8 font-bold">(LINKS)</div>
                <div className="flex flex-col gap-3">
                    {['Twitter', 'Instagram', 'BOOTH'].map((link) => (
                         <a key={link} href="#" className="text-[11px] hover:underline underline-offset-4 active:opacity-50 transition-all font-medium">
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            {/* History */}
            <div className="col-span-4">
                 <div className="text-[10px] opacity-40 tracking-widest mb-8 font-bold">(HISTORY)</div>
                 <div className="flex flex-col gap-3 max-h-[200px] overflow-y-auto pr-4 scrollbar-hide">
                    {HISTORY.map((item, i) => (
                        <div key={i} className="flex gap-4 text-[11px] leading-relaxed">
                            <span className="opacity-40 tabular-nums">{item.year}</span>
                            <span className="opacity-80">{item.title}</span>
                        </div>
                    ))}
                 </div>
                 <div className="flex justify-end mt-12">
                     <Barcode className="scale-75 origin-right opacity-60" />
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};
