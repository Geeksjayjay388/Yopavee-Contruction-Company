import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Calculator() {
  const [sqFt, setSqFt] = useState<string>('');

  const calculatePrice = () => {
    const num = parseFloat(sqFt);
    if (isNaN(num)) return '$0.00';
    // Assume $15 per sq ft for the estimate
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num * 15);
  };

  return (
    <section className="bg-[#151515] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between py-16 lg:py-24 gap-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl leading-[1.2]">
            Get an <span className="text-[#FF4D11]">instant price</span><br className="hidden md:block" /> estimate for your project
          </h2>
          <p className="text-gray-400 max-w-[280px] text-[15px] leading-snug">
            Enter your project size and get a rough idea of the cost
          </p>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-white/10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-12 lg:py-16 gap-12">
          
          {/* Input Area */}
          <div className="flex items-end gap-4 w-full max-w-[400px]">
            <input 
              type="number"
              placeholder="Write the number of Sq Ft"
              value={sqFt}
              onChange={(e) => setSqFt(e.target.value)}
              className="bg-transparent border-b-[1.5px] border-white/40 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors w-full text-lg appearance-none"
            />
            <button className="text-white hover:text-[#FF4D11] transition-colors pb-2 shrink-0 cursor-pointer">
              <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Price Display */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] text-gray-300 font-medium">Approximate price:</span>
            <div className="border border-white/20 rounded-md px-6 py-3.5 min-w-[220px]">
              <span className="text-xl font-medium tracking-wide">
                {sqFt ? calculatePrice() : '$159.95'}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Separator */}
        <div className="w-full h-[1px] bg-white/10 mb-12"></div>
        
      </div>
    </section>
  );
}

export default Calculator;
