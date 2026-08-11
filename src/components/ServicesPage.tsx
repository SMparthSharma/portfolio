import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Smartphone, Cpu, Palette, Activity, Check, ArrowRight } from "lucide-react";
import { servicesList, Service } from "../data/services";

interface ServicesPageProps {
  onBackToHome: () => void;
  onNavigateToStartProject: (initialCategory?: string) => void;
}

export default function ServicesPage({ onBackToHome, onNavigateToStartProject }: ServicesPageProps) {
  
  // Helper to render icons dynamically
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-brand-orange" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-[#02569B]" />; // Flutter Blue
      case "Palette":
        return <Palette className="w-8 h-8 text-emerald-400" />;
      case "Activity":
        return <Activity className="w-8 h-8 text-indigo-400" />;
      default:
        return <Smartphone className="w-8 h-8 text-brand-orange" />;
    }
  };

  const getPlatformBadgeStyles = (platform: Service['platform']) => {
    switch (platform) {
      case "Flutter":
        return "bg-[#02569B]/10 border-[#02569B]/20 text-[#02569B]";
      case "React Native":
        return "bg-[#61DAFB]/10 border-[#61DAFB]/20 text-[#61DAFB]";
      case "Both":
        return "bg-brand-orange/10 border-brand-orange/20 text-brand-orange";
      default:
        return "bg-white/5 border-white/10 text-white/60";
    }
  };

  return (
    <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
      {/* Background glow overlay */}
      <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-5%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Title / Intro */}
        <div className="mb-16 text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-extrabold font-sans flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Specialized Mobile Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-none">
            High-Performance Mobile Apps
          </h1>
          <p className="text-white/60 text-sm md:text-base font-sans max-w-2xl mt-4 leading-relaxed">
            I build responsive, fluid, and robust iOS & Android applications using Flutter and React Native. From conceptual design to App Store releases, I deliver complete end-to-end mobile products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 backdrop-blur-sm flex flex-col justify-between gap-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/5 text-left group"
            >
              <div className="flex flex-col gap-6">
                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-orange/20 transition-all duration-300">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="font-bebas text-3xl text-white/20 group-hover:text-brand-orange/30 transition-colors">
                    {service.num}
                  </span>
                </div>

                {/* Service Details */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold font-sans text-white group-hover:text-brand-orange transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider ${getPlatformBadgeStyles(service.platform)}`}>
                      {service.platform}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                {/* Detailed Features */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] uppercase tracking-wider text-white/40 font-bold font-sans">
                    What's Included
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {service.detailedFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-sans leading-relaxed">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Row */}
              <div className="flex flex-col gap-6 pt-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] tracking-wider text-white/50 group-hover:border-white/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                {/* <button
                  onClick={() => onNavigateToStartProject(service.title)}
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-brand-orange text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button> */}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
