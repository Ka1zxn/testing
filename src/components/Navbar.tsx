import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { label: 'HOME', href: '#' },
  { label: 'WORKS', href: '#works' },
  { label: 'PROFILE', href: '#profile' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-6 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <nav className="flex items-center gap-2 pointer-events-auto">
        {/* Main Menu Box */}
        <div className="glass px-1 py-1 rounded-sm flex gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "px-4 py-1.5 text-[11px] font-medium tracking-widest transition-all rounded-[4px]",
                "hover:bg-white hover:text-black",
                item.label === 'HOME' && "bg-white text-black"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Outer Social Buttons (Visible in screenshots) */}
        <div className="fixed top-6 right-6 flex gap-3 pointer-events-auto">
          <a 
            href="#" 
            className="glass px-4 py-1.5 rounded-full text-[11px] tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            Twitter <span className="rotate-[-45deg] scale-75">→</span>
          </a>
          <a 
            href="#" 
            className="glass px-4 py-1.5 rounded-full text-[11px] tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            Instagram <span className="rotate-[-45deg] scale-75">→</span>
          </a>
        </div>

        {/* Logo (Top Left) */}
        <div className="fixed top-6 left-6 pointer-events-auto">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-bold text-xl tracking-tighter leading-none hover:bg-white hover:text-black transition-all cursor-pointer">
            1:09
          </div>
        </div>
      </nav>
    </header>
  );
};
