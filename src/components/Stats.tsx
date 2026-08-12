export default function Stats() {
  const stats = [
    { text: "1+ YEARS EXPERIENCE" },
    { text: "7+ App Deliver" },
    { text: "Play Store" },
    { text: "High App Proformance" },
  ];

  // Duplicate items to ensure smooth infinite loop
  const marqueeItems = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="bg-[#120806] py-8 overflow-hidden border-y border-white/5 relative z-30" id="stats">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="font-bebas text-4xl md:text-5xl tracking-widest text-white font-black select-none">
                {item.text}
              </span>
              <span className="text-brand-orange text-2xl font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
