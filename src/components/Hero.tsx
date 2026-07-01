import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface HeroProps {
  onStartProjectClick: () => void;
}

export default function Hero({ onStartProjectClick }: HeroProps) {
  const { name } = aboutMeData;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#120806] bg-noise" id="home">
      {/* Background Radial Orange Glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-8xl mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center relative">
        {/* Header Text overlay - "SMPARTH" behind portrait */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-bebas text-[18vw] leading-none tracking-tighter text-white font-extrabold flex justify-between w-full opacity-90 text-center select-none"
          >
            <span className="text-left leading-none tracking-tight block w-1/2">SM.PARTH</span>
            <span className="text-right leading-none tracking-tight block w-1/2">SHARMA</span>
          </motion.h1>
        </div>

        {/* Center Portrait Overlay */}
        <div className="relative w-full max-w-lg mx-auto aspect-[3/4] z-10 flex items-center justify-center my-4 md:my-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[75%] md:w-[85%] aspect-[3/4] rounded-3xl overflow-hidden group "
          >
            <img
              src="https://mfrxdoxsrwclivjvzbtc.supabase.co/storage/v1/object/sign/assets/profile/person.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMjBkYjQzMS0wZWU3LTQ3ZDAtODY1Mi1kMTZiYThlYmMwNWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcHJvZmlsZS9wZXJzb24ucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkwOTgzOCwiZXhwIjoxODE0NDQ1ODM4fQ.iOk8CJy384Mp0PWgIsEURzx2-KW3xAsiX8BOJul4UdQ"
              alt={`${name} Portfolio Portrait`}
              referrerPolicy="no-referrer"
              className="w-full  object-cover grayscale brightness-110 contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Floating Greeting at top of Portrait */}
        <div className="absolute top-[15%] left-20 -translate-x-1/2 z-20 pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 tracking-widest text-xs uppercase bg-[#120806]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 font-sans"
          >
            Hi, I am
          </motion.p>
        </div>
      </div>

      {/* Bottom Hero Stats & Text Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative z-20">
        {/* Left Bottom Section: Description & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-5 max-w-md"
          id="hero-left"
        >
          <div className="flex items-center gap-2 text-brand-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs uppercase tracking-widest font-semibold font-sans">✦ Trusted by 7+ clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white leading-tight tracking-tight">
            Person that turns your ideas into reality
          </h2>
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onStartProjectClick}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-orange text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange/90 shadow-lg shadow-[#ff6b00]/10 hover:shadow-[#ff6b00]/25 transition-all duration-300 cursor-pointer"
              id="hero-cta"
            >
              Start a Project
              <span className="bg-white text-[#120806] rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/75 hover:text-white transition-colors duration-300"
              id="hero-secondary-cta"
            >
              View My Work
              <ArrowDownRight className="w-4 h-4 text-brand-orange" />
            </a>
          </div>
        </motion.div>

        {/* Right Bottom Section: Client satisfaction card & specs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col items-start md:items-end justify-end"
          id="hero-right"
        >
          <div className="w-full max-w-sm rounded-3xl p-5 bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Stacked Avatars */}
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Satisfied client ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-[#120806] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
            </div>

            <p className="text-white/80 text-xs font-sans leading-relaxed">
              <span className="font-semibold text-white">99.6% Of My Clients Are Satisfied</span> — Be One Of Them Today.
            </p>

            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[10px] uppercase tracking-widest font-semibold text-white/60">
                Free Consultation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[10px] uppercase tracking-widest font-semibold text-white/60">
                24h Response
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
