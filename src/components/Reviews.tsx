import { useState } from 'react';
import { Play, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import reviewVideo from '../assets/video.png';

const reviewsData = [
  {
    id: 1,
    type: "Driveway Installation",
    time: "7 Days ago",
    quote: "“They take responsibility for the tasks assigned to them.”",
    author: "James R., Austin TX",
    description: "We paved their entire driveway — 120 sq.ft. solid base, clean edges, and proper drainage. Done in 2 days. They didn't have to lift a finger.",
    rating: 5.0
  },
  {
    id: 2,
    type: "Patio Paving",
    time: "2 Weeks ago",
    quote: "“Absolutely stunning work. Transformed our backyard.”",
    author: "Sarah M., Dallas TX",
    description: "Installed a beautiful 400 sq.ft. patio with custom stone patterns. The team was professional and finished ahead of schedule.",
    rating: 5.0
  },
  {
    id: 3,
    type: "Walkway Repair",
    time: "1 Month ago",
    quote: "“Quick, efficient, and very reasonably priced.”",
    author: "David L., Houston TX",
    description: "Repaired uneven stones and re-leveled the entire front walkway. It looks brand new and is finally safe to walk on again.",
    rating: 4.9
  }
];

function ReviewCard({ isActive, review }: { isActive?: boolean, review: typeof reviewsData[0] }) {
  return (
    <div className={`flex flex-col md:flex-row border border-gray-200 rounded-xl bg-white p-2 gap-6 h-auto md:h-[400px] transition-all duration-500 ${isActive ? 'shadow-sm scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
      {/* Video Placeholder */}
      <div className="w-full md:w-[45%] rounded-lg relative flex items-center justify-center shrink-0 min-h-[250px] md:min-h-full overflow-hidden bg-gray-100">
        <img src={reviewVideo} alt="Client review video" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <button className="relative z-10 w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center pl-1 shadow-lg hover:bg-black transition-colors cursor-pointer">
          <Play className="w-6 h-6 text-white fill-white" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow py-5 pr-6 pl-4 md:pl-0">
        <div className="flex justify-between items-center mb-6">
          <span className="font-semibold text-[13px] text-black">{review.type}</span>
          <span className="text-gray-500 text-[13px] font-medium">{review.time}</span>
        </div>
        
        <div className="mb-6 border border-gray-200 rounded-[2.5rem] p-6 pb-5">
          <h3 className="text-[1.35rem] font-medium leading-[1.3] text-black mb-3">
            {review.quote}
          </h3>
          <p className="text-gray-400 text-[13px] font-medium">— {review.author}</p>
        </div>
        
        <p className="text-gray-400 text-[13px] leading-relaxed mb-auto pr-4">
          {review.description}
        </p>
        
        <div className="flex items-center gap-2 mt-6">
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-[#FF4D11] fill-[#FF4D11]' : 'text-gray-300 fill-gray-300'}`} />
            ))}
          </div>
          <span className="text-[#FF4D11] font-semibold text-[13px] ml-1">{review.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + reviewsData.length) % reviewsData.length;
  const getNextIndex = () => (currentIndex + 1) % reviewsData.length;

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">See what our clients say about us</h2>
        <p className="text-gray-400 max-w-sm mx-auto text-[15px] leading-snug">
          We have over 400+ positive reviews from real customers. Over 50+ regular customers.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex justify-center items-center py-4">
        <div className="flex items-center justify-center w-[250%] md:w-[150%] xl:w-[120%] gap-4 lg:gap-8">
           {/* Left Faded Card */}
           <div 
             className="hidden md:block w-full max-w-[800px] opacity-30 scale-[0.85] cursor-pointer transition-all hover:opacity-50"
             onClick={prevSlide}
           >
               <ReviewCard review={reviewsData[getPrevIndex()]} />
           </div>

           {/* Center Active Card */}
           <div className="w-[90%] sm:w-[80%] md:w-full max-w-[800px] shrink-0 z-10 transition-all">
               <ReviewCard isActive={true} review={reviewsData[currentIndex]} />
           </div>

           {/* Right Faded Card */}
           <div 
             className="hidden md:block w-full max-w-[800px] opacity-30 scale-[0.85] cursor-pointer transition-all hover:opacity-50"
             onClick={nextSlide}
           >
               <ReviewCard review={reviewsData[getNextIndex()]} />
           </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        >
            <ArrowLeft className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2">
            {reviewsData.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-10 bg-gray-800' : 'w-2 bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
        </div>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        >
            <ArrowRight className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

export default Reviews;
