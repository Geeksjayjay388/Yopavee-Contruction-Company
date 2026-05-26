import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img
          src={logo}
          alt="Yopavve"
          className="h-10 w-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <div className="w-44 h-1.5 bg-white/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#FF4D11] rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
        <motion.p
          className="text-[11px] uppercase tracking-[0.35em] text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading your experience
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;