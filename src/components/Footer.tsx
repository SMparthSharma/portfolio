import { motion } from "motion/react";
import { ArrowUpRight, Phone, MessageSquare, Mail, Globe } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface FooterProps {
  onStartProjectClick: () => void;
  onNavClick: (href: string) => void;
}

export default function Footer({ onStartProjectClick, onNavClick }: FooterProps) {
  const { name, email, phone } = aboutMeData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { name: "Dribbble", href: "#", icon: "🏀" },
    // { name: "Behance", href: "#", icon: "🎨" },
    // { name: "LinkedIn", href: "#", icon: "💼" },
  ];

  return (
    <footer className="bg-[#120806] bg-noise pt-24 pb-12 relative overflow-hidden z-20" id="footer">
      {/* Huge bottom glowing light behind footer text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[180px] bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-20 border-b border-white/5">

          {/* Column 1: Statement and CTA button */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <h3 className="text-3xl md:text-4xl font-bold font-sans text-white leading-tight tracking-tight">
              Not just building an App, <br /> but real business results.
            </h3>
            <button
              onClick={onStartProjectClick}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-orange text-white text-xs uppercase tracking-widest font-bold hover:bg-[#e05e00] shadow-lg transition-all duration-300 cursor-pointer"
            >
              Start a Project
              <span className="bg-white text-[#120806] rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold font-sans">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Know Me", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#all-projects" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="text-white/60 hover:text-white text-sm font-sans transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold font-sans">
              Contact System
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60 font-sans">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4 text-brand-orange" />
                <span>{name}'s Telegram</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>{email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Decorative Text (SMPARTH) */}
        <div className="py-10 flex justify-center items-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bebas text-[16vw] md:text-[14vw] leading-none tracking-tight text-white/10 select-none text-center font-extrabold"
          >
            {aboutMeData.title}
          </motion.h1>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-brand-orange/20 border border-white/10 hover:border-brand-orange/40 flex items-center justify-center text-sm transition-all duration-300"
                title={social.name}
              >
                <span>{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <p className="text-white/40 text-xs font-sans tracking-wide">
            ©{currentYear}, SMPARTH - All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
