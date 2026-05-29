import { motion } from 'framer-motion';
import { fadeUpItem, sectionMotionProps, staggerContainer } from '../lib/motion';

export default function Process() {
  return (
    <motion.section
      {...sectionMotionProps}
      id="work-process"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 scroll-mt-24"
    >
      <motion.div variants={staggerContainer} className="max-w-4xl mx-auto pl-4 lg:pl-12">
        <h4 className="text-gray-500 mb-16 text-2xl md:text-3xl font-medium">Our Work Process</h4>
        
        <div className="flex flex-col gap-16">
          <motion.div
            variants={fadeUpItem}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex items-start gap-8 md:gap-12"
          >
            <span className="text-8xl md:text-[8rem] font-light text-black leading-[0.75] shrink-0 w-16 md:w-24">1</span>
            <p className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-[#1A1A1A] tracking-tight">
              You reach out - We respond within 24<br className="hidden md:block"/> hours and schedule a free visit.
            </p>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div
            variants={fadeUpItem}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex items-start gap-8 md:gap-12"
          >
            <span className="text-8xl md:text-[8rem] font-light text-black leading-[0.75] shrink-0 w-16 md:w-24">2</span>
            <p className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-[#1A1A1A] tracking-tight">
              We assess and quote - No hidden<br className="hidden md:block"/> fees, no surprises. Just a clear price.
            </p>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div
            variants={fadeUpItem}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex items-start gap-8 md:gap-12"
          >
            <span className="text-8xl md:text-[8rem] font-light text-[#FF4D11] leading-[0.75] shrink-0 w-16 md:w-24">3</span>
            <p className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-gray-500 italic tracking-tight">
              We show up and deliver - On<br className="hidden md:block"/> time, clean, exactly as agreed.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
