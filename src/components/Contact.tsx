import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface ContactProps {
  onNavClick?: (href: string) => void;
}

export default function Contact({ onNavClick }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Both web design and development");
  const [description, setDescription] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please fill in your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!acceptPolicy) {
      setError("You must accept the Privacy Policy to proceed.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setDescription("");
      setAcceptPolicy(false);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-[#120806] bg-noise relative z-20 border-b border-white/5" id="contact">
      {/* Background glow overlay */}
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Left Column - Headline and Info */}
          <div className="md:col-span-5 flex flex-col gap-5 justify-start">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Contact me
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight tracking-tight">
              Start Your Project
            </h2>
            <p className="text-white/60 text-sm md:text-base font-sans max-w-sm leading-relaxed">
              I'll help you plan and build a website that actually performs.
            </p>
          </div>

          {/* Right Column - Premium Minimalist Form */}
          <div className="md:col-span-7">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-brand-orange/30 backdrop-blur-md flex flex-col items-center text-center gap-4 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-sans text-white">Project Details Received!</h3>
                <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. {aboutMeData.name} will review your submission and respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {error && (
                  <div className="px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                    {error}
                  </div>
                )}

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative flex flex-col gap-2">
                    <label htmlFor="name-input" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexander Robert"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div className="relative flex flex-col gap-2">
                    <label htmlFor="email-input" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@agency.com"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* Interested In select dropdown */}
                <div className="relative flex flex-col gap-2">
                  <label htmlFor="interest-select" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                    I am interested in
                  </label>
                  <select
                    id="interest-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Both web design and development" className="bg-[#120806] text-white">
                      Both web design and development
                    </option>
                    <option value="Only UI/UX Web Design" className="bg-[#120806] text-white">
                      Only UI/UX Web Design
                    </option>
                    <option value="Only Frontend Web Development" className="bg-[#120806] text-white">
                      Only Frontend Web Development
                    </option>
                    <option value="Ecommerce / WooCommerce Scaling" className="bg-[#120806] text-white">
                      Ecommerce / WooCommerce Scaling
                    </option>
                  </select>
                </div>

                {/* Project Description input */}
                <div className="relative flex flex-col gap-2">
                  <label htmlFor="project-desc" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                    Tell me about your project
                  </label>
                  <textarea
                    id="project-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a brief summary of what you are building..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accept-policy"
                    checked={acceptPolicy}
                    onChange={(e) => setAcceptPolicy(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-transparent text-brand-orange focus:ring-brand-orange focus:ring-offset-[#120806] cursor-pointer"
                  />
                  <label htmlFor="accept-policy" className="text-xs text-white/50 font-sans select-none cursor-pointer">
                    By submitting this form I accept the{" "}
                    <a
                      href="#privacy"
                      onClick={(e) => {
                        if (onNavClick) {
                          e.preventDefault();
                          onNavClick("#privacy");
                        }
                      }}
                      className="text-white hover:text-brand-orange transition-colors"
                    >
                      Privacy Policy
                    </a>{" "}
                    of this site.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-brand-orange text-white text-xs uppercase tracking-widest font-bold hover:bg-[#e05e00] disabled:bg-brand-orange/50 shadow-lg shadow-[#ff6b00]/10 transition-all duration-300"
                  >
                    {isSubmitting ? "Submitting..." : "Send Project Details"}
                    <span className="bg-white text-[#120806] rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
