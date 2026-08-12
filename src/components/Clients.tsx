import { motion } from "motion/react";

export default function Clients() {
  const clients = [
    { name: "Flutter", logo: "FLUTTER" },
    { name: "React Native", logo: "REACT NATIVE" },
    { name: "Android", logo: "ANDROID" },
    { name: "Ios", logo: "IOS" },
    { name: "Firebase", logo: "FIREBASE" },
    { name: "Supabase", logo: "SUPABASE" },
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
              {client.name === "Flutter" && (
                <span className="font-bebas text-3xl tracking-widest text-white/60 hover:text-white transition-colors duration-300">
                  Flutter
                </span>
              )}
              {client.name === "React Native" && (
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full border-2 border-white/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </div>
                  <span className="font-sans text-xs tracking-[0.25em] font-black text-white/60 hover:text-white transition-colors duration-300">
                    React Native
                  </span>
                </div>
              )}
              {client.name === "Android" && (
                <span className="font-sans text-2xl tracking-tighter font-extrabold lowercase text-white/60 hover:text-white transition-colors duration-300">
                  Android<span className="text-brand-orange">.</span>
                </span>
              )}
              {client.name === "Ios" && (
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[10px] tracking-widest text-white/40 uppercase font-bold">Ios</span>
                  <span className="font-serif text-xl italic tracking-wider text-white/60 hover:text-white transition-colors duration-300">
                    Ios
                  </span>
                </div>
              )}
              {client.name === "Firebase" && (
                <div className="flex items-center gap-1">
                  <span className="font-sans text-sm tracking-widest font-black text-white/60 hover:text-white transition-colors duration-300">
                    Firebase
                  </span>
                </div>
              )}
              {client.name === "Supabase" && (
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-brand-orange rounded-sm rotate-45" />
                  <span className="font-sans text-lg tracking-widest font-bold text-white/60 hover:text-white transition-colors duration-300">
                    Supabase
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
