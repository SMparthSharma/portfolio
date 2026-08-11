import { motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

interface NavbarProps {
  onBrandClick: () => void;
  onNavClick: (href: string) => void;
  onStartProjectClick: () => void;
}

export default function Navbar({ onBrandClick, onNavClick, onStartProjectClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Know Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onBrandClick();
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300 rounded-full border ${scrolled
        ? "bg-[#120806]/85 backdrop-blur-md border-white/10 shadow-lg shadow-[#ff6b00]/5"
        : "bg-[#120806]/40 backdrop-blur-sm border-white/5"
        }`}
      id="navbar"
    >
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group" id="nav-logo">
          <span className="font-bebas text-2xl tracking-wider text-white group-hover:text-brand-orange transition-colors duration-300">
            SM.PARTH
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" id="nav-desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href === "#about" || link.href === "#services" || link.href === "#projects") {
                  e.preventDefault();
                }
                onNavClick(link.href);
              }}
              className="text-xs tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 relative py-1 group font-sans font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block" id="nav-cta-wrapper">
          <button
            onClick={onStartProjectClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs tracking-wider uppercase font-semibold hover:bg-brand-orange/90 hover:scale-105 shadow-md hover:shadow-[#ff6b00]/20 transition-all duration-300 cursor-pointer"
            id="nav-cta"
          >
            Hire me
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          id="nav-mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 p-6 rounded-3xl bg-[#120806]/95 border border-white/10 backdrop-blur-lg flex flex-col gap-4 shadow-xl shadow-brand-orange/10"
          id="nav-mobile-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href === "#about" || link.href === "#services" || link.href === "#projects") {
                  e.preventDefault();
                }
                setIsOpen(false);
                onNavClick(link.href);
              }}
              className="text-sm tracking-widest text-white/80 uppercase hover:text-white hover:text-brand-orange py-2 border-b border-white/5 transition-colors duration-200 font-sans"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onStartProjectClick();
            }}
            className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-orange text-white text-xs tracking-widest uppercase font-semibold hover:bg-[#e05e00] transition-colors cursor-pointer"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
