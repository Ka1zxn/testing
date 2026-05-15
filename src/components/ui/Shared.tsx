import React from 'react';

export const Barcode: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-end gap-[2px] h-6 ${className}`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="bg-current"
          style={{
            width: Math.random() > 0.5 ? '2px' : '4px',
            height: `${40 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
};

export const Noise: React.FC = () => {
  return <div className="noise-overlay" aria-hidden="true" />;
};

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const Window: React.FC<WindowProps> = ({ title, children, className, onClose }) => {
  return (
    <div className={`glass flex flex-col overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5">
        <span className="text-[10px] font-mono tracking-wider opacity-60 uppercase">{title}</span>
        <button 
          onClick={onClose}
          className="hover:opacity-100 opacity-40 transition-opacity"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>
      <div className="flex-1 relative bg-black/20">
        {children}
      </div>
    </div>
  );
};
