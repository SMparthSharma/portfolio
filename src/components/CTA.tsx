export default function CTA() {
  const text = "LET'S WORK TOGETHER ";
  const tickerItems = [...Array(12)].map(() => text);

  return (
    <section className="bg-[#120806] py-8 md:py-12 overflow-hidden border-y border-white/5 relative z-30" id="cta-ticker">
      <div className="flex whitespace-nowrap overflow-hidden select-none pointer-events-none">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="font-bebas text-7xl md:text-[10rem] tracking-tighter text-white font-extrabold leading-none">
                {item}
              </span>
              <span className="text-brand-orange text-5xl md:text-8xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
