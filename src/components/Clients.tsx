import { motion } from "motion/react";

export default function Clients() {
  const clients = [
    { name: "SMART STEP", logo: "SMART STEP" },
    { name: "DIXIE DOWNS", logo: "DIXIE DOWNS" },
    { name: "rogue", logo: "rogue" },
    { name: "Perfect", logo: "Perfect" },
    { name: "ED.PET", logo: "ED.PET" },
    { name: "Trava", logo: "Trava" },
  ];

  return (
    <section className="py-8 bg-[#120806] border-b border-white/5 relative z-20" id="clients">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center filter grayscale contrast-200 hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              {client.name === "SMART STEP" && (
                <span className="font-bebas text-3xl tracking-widest text-white/60 hover:text-white transition-colors duration-300">
                  SMART STEP
                </span>
              )}
              {client.name === "DIXIE DOWNS" && (
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full border-2 border-white/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                  <span className="font-sans text-xs tracking-[0.25em] font-black text-white/60 hover:text-white transition-colors duration-300">
                    DIXIE DOWNS
                  </span>
                </div>
              )}
              {client.name === "rogue" && (
                <span className="font-sans text-2xl tracking-tighter font-extrabold lowercase text-white/60 hover:text-white transition-colors duration-300">
                  rogue<span className="text-brand-orange">.</span>
                </span>
              )}
              {client.name === "Perfect" && (
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[10px] tracking-widest text-white/40 uppercase font-bold">THE</span>
                  <span className="font-serif text-xl italic tracking-wider text-white/60 hover:text-white transition-colors duration-300">
                    Perfect
                  </span>
                </div>
              )}
              {client.name === "ED.PET" && (
                <div className="flex items-center gap-1">
                  <span className="font-sans text-sm tracking-widest font-black text-white/60 hover:text-white transition-colors duration-300">
                    ED.PET
                  </span>
                </div>
              )}
              {client.name === "Trava" && (
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-brand-orange rounded-sm rotate-45" />
                  <span className="font-sans text-lg tracking-widest font-bold text-white/60 hover:text-white transition-colors duration-300">
                    Trava
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
