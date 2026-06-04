import { motion } from 'framer-motion';
import logo from '../assets/loadinglogo.png'; 

function Loader() {
  return (
    <motion.div
      // Changed to a dull, raw concrete/slate tone (bg-[#1C1F22])
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1F22] overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      role="status"
      aria-live="polite"
    >
      
      {/* ================= BACKGROUND ANIMATIONS ================= */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        {/* 1. Industrial Grid Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* 2. Floating Structural Line / "Beams" */}
        <motion.div 
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#FF4D11]/30 to-transparent w-full top-1/3"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent h-full left-1/4"
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 1 }}
        />

        {/* 3. Ambient "Construction Dust" / Floating Sparks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF4D11]/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      {/* ======================================================== */}

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo with heavy industrial spring drop */}
        <motion.img
          src={logo}
          alt="Yopavve"
          className="h-12 w-auto object-contain brightness-110" 
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 120, damping: 12 }
          }}
        />

        {/* Progress Bar (High-contrast Construction Orange on Dark Grey Track) */}
        <div className="w-48 h-1.5 bg-white/5 rounded-none overflow-hidden relative border border-white/5">
          <motion.div
            className="h-full bg-[#FF4D11] w-1/2"
            initial={{ left: '-50%' }}
            animate={{ left: '100%' }}
            transition={{ 
              duration: 1.5, 
              ease: [0.6, 0.05, 0.1, 0.9], // Punchy, jerky mechanical easing
              repeat: Infinity 
            }}
            style={{ position: 'absolute' }}
          />
        </div>

        {/* Status Text */}
        <motion.p
          className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-semibold font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building Experience
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;