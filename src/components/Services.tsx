import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { servicesList } from "../data/services";

interface ServicesProps {
  onStartProjectClick: () => void;
  onNavigateToServices: () => void;
}

export default function Services({ onStartProjectClick, onNavigateToServices }: ServicesProps) {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#120806] bg-noise relative z-20 border-b border-white/5" id="services">
      {/* Background glow */}
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              My Services
            </span>
          </div>
          <div>
            <button
              onClick={onNavigateToServices}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-orange text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange/90 shadow-md transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>


        {/* Services Rows list */}
        <div className="flex flex-col border-t border-white/10">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={onNavigateToServices}
              className="group border-b border-white/10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.01] px-4 -mx-4 transition-colors duration-300 cursor-pointer"
            >
              {/* Number and Title column */}
              <div className="flex items-start gap-6 md:gap-10 md:w-[45%]">
                <span className="font-bebas text-lg md:text-xl text-brand-orange tracking-widest font-bold pt-2">
                  {service.num}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bebas text-4xl md:text-5xl text-white group-hover:text-brand-orange transition-colors duration-300 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-sans max-w-sm md:max-w-md">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Tags column */}
              <div className="flex flex-wrap gap-2 md:w-[35%] pt-2 md:pt-0">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] tracking-wider text-white/50 group-hover:border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow circle button column */}
              <div className="md:w-[10%] flex justify-end pt-4 md:pt-0 w-full">
                <div className="w-11 h-11 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
