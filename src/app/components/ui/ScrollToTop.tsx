import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[20px] md:bottom-[32px] right-[20px] md:right-[32px] bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full size-[48px] md:size-[56px] flex items-center justify-center shadow-lg cursor-pointer z-50 transition-all duration-300"
    >
      <ArrowUp className="size-[20px] md:size-[24px] text-white" />
    </motion.button>
  );
}
