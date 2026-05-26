import { useState } from 'react';
import { motion } from 'framer-motion';
import stats from "../assets/statsimages.png";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUpItem, sectionMotionProps, staggerContainer } from '../lib/motion';

function Stats() {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <motion.section {...sectionMotionProps} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Side: Images */}
                <motion.div variants={fadeUpItem} className="w-full lg:col-span-5 lg:pr-6">
                    <img src={stats} alt="Team at work" className="w-[85%] mx-auto lg:w-full h-auto object-contain rounded-lg" />
                </motion.div>
                
                {/* Right Side: Quote and Author */}
                <motion.div variants={fadeUpItem} className="flex flex-col gap-8 lg:col-span-7">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-none font-medium text-[#1A1A1A] tracking-tight">
                        I built my team around one rule - don't leave until the client is happy. Every person on my crew takes your project personally, not just professionally.
                    </h2>
                    
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shadow-sm shrink-0">
                            <img 
                                src="https://i.pravatar.cc/150?u=robert_williams" 
                                alt="Robert Williams" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Name and Title */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-lg text-black">Robert Williams</span>
                            <span className="text-gray-500 text-lg">- CEO of Yopavve</span>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            {/* Stats Cards Section */}
            <motion.div variants={staggerContainer} className="mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Top Row Cards */}
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex flex-col justify-between gap-12 bg-white">
                    <h3 className="text-[2.5rem] font-medium text-black leading-none">8+ years</h3>
                    <p className="text-gray-500 text-[15px] leading-snug max-w-[220px]">
                        We have been working with paving stones since 2017
                    </p>
                </motion.div>
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex flex-col justify-between gap-12 bg-white">
                    <h3 className="text-[2.5rem] font-medium text-black leading-none">500+</h3>
                    <p className="text-gray-500 text-[15px] leading-snug max-w-[220px]">
                        Projects delivered on time and on budget.
                    </p>
                </motion.div>
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex flex-col justify-between gap-12 bg-white">
                    <h3 className="text-[2.5rem] font-medium text-black leading-none">98%</h3>
                    <p className="text-gray-500 text-[15px] leading-snug max-w-[220px]">
                        98% clients would hire us again — and most already have.
                    </p>
                </motion.div>

                {/* Bottom Row Cards */}
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex items-center min-h-[140px] bg-white">
                    <h3 className="text-3xl font-medium text-black italic leading-tight">50,000+ Sq Ft<br/>Installed</h3>
                </motion.div>
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex items-center min-h-[140px] bg-white">
                    <h3 className="text-3xl font-medium text-black italic leading-tight">200+ Happy<br/>Homeowners</h3>
                </motion.div>
                <motion.div variants={fadeUpItem} className="border border-gray-200 rounded-xl p-8 flex items-center min-h-[140px] bg-white">
                    <h3 className="text-3xl font-medium text-black italic leading-tight">5 years of<br/>Warranty</h3>
                </motion.div>
            </motion.div>

            {/* Before / After Section */}
            <motion.div variants={fadeUpItem} className="mt-24 lg:mt-32 w-full mx-auto flex flex-col gap-8 pb-10">
                {/* Images Container */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md overflow-hidden shadow-lg select-none">
                    {/* After Image (Background) */}
                    <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                    
                    {/* Before Image (Foreground, clipped) */}
                    <img 
                        src={beforeImg} 
                        alt="Before" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    />
                    
                    {/* Separator Line */}
                    <div 
                        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10"
                        style={{ left: `calc(${sliderPosition}% - 2px)` }}
                    ></div>

                    {/* Center Drag Handle */}
                    <div 
                        className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 pointer-events-none border border-gray-100"
                        style={{ left: `calc(${sliderPosition}% - 24px)` }}
                    >
                        <ChevronLeft className="w-5 h-5 text-black" strokeWidth={2.5} />
                        <ChevronRight className="w-5 h-5 text-black -ml-2" strokeWidth={2.5} />
                    </div>

                    {/* Invisible Range Input for Dragging */}
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPosition} 
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <button className="px-10 py-2.5 border border-gray-300 rounded-md text-gray-800 font-medium bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto text-lg shadow-sm">
                        Before
                    </button>
                    
                    <div className="flex items-center gap-4 sm:gap-6">
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm">
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm">
                            <ArrowRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    <button className="px-10 py-2.5 bg-[#FF4D11] text-white rounded-md font-medium hover:bg-[#e6450f] transition-colors w-full sm:w-auto text-lg shadow-sm">
                        After
                    </button>
                </div>
            </motion.div>

        </motion.section>
    )
}

export default Stats;