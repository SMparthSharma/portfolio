import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsList } from "../data/testimonials";

export default function Testimonials() {
  const testimonials = testimonialsList;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#120806] bg-noise relative z-20 border-b border-white/5" id="testimonials">
      {/* Background radial orange glow */}
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight tracking-tight">
              Trusted by <br className="hidden md:block" /> Clients Worldwide
            </h2>
          </div>
          
          {/* Arrow Buttons */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300 active:scale-95"
              id="test-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300 active:scale-95"
              id="test-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Testimonials List */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none"
          id="testimonials-container"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[380px] max-w-[380px] snap-start flex-shrink-0 rounded-3xl p-6 md:p-8 bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between gap-6 group hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                {/* Rating score and stars */}
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-3xl tracking-widest text-white leading-none">
                    {test.rating}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-white/80 text-sm md:text-base font-sans font-medium leading-relaxed italic group-hover:text-white transition-colors duration-300">
                  "{test.text}"
                </p>
              </div>

              {/* Divider and Client Profile */}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-brand-orange/40 transition-colors"
                  />
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                      {test.name}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-white/50">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
