import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface AboutProps {
  onStartProjectClick: () => void;
}

export default function About({ onStartProjectClick }: AboutProps) {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#120806] bg-noise relative z-20 border-b border-white/5" id="about">
      {/* Background soft glow */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Label with custom line */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                About Me
              </span>
              <div className="flex-grow h-[1px] bg-white/10" />
            </div>
          </div>

          {/* Right Column: Statement Paragraph & Actions */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:text-3xl font-medium font-sans leading-relaxed tracking-tight text-left"
            >
              {aboutMeData.bio[0]}
            </motion.p>

            {/* Buttons row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <button
                onClick={onStartProjectClick}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-orange text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange/90 shadow-lg shadow-[#ff6b00]/10 hover:shadow-[#ff6b00]/25 transition-all duration-300 cursor-pointer"
              >
                Start a Project
                <span className="bg-white text-[#120806] rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors duration-300"
              >
                View My Work
                <ArrowDownRight className="w-4 h-4 text-brand-orange" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
