import React from "react";
import { motion } from "motion/react";
import { Zap, TrendingUp, Box, HelpCircle } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

export default function HowIHelp() {
  const { howIHelp = [] } = aboutMeData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Zap className="w-6 h-6 text-brand-orange" />;
      case "trending-up":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case "box":
        return <Box className="w-6 h-6 text-indigo-400" />;
      default:
        return <HelpCircle className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#120806] bg-noise relative z-20 border-b border-white/5" id="how-i-help">
      {/* Accent lighting glow */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-left">
        {/* Header Block */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            My Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-white font-extrabold leading-tight">
            How I Help You Grow
          </h2>
          <p className="text-white/60 text-sm md:text-base font-sans max-w-xl mt-3 leading-relaxed">
            I combine clean engineering principles with deliberate design choices to build mobile experiences that deliver real, measurable business results.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howIHelp.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 backdrop-blur-sm flex flex-col gap-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.03]"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold font-sans text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
