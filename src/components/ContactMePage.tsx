import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, MapPin, Globe, Phone, Send, CheckCircle2, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface ContactMePageProps {
  onBackToHome: () => void;
}

export default function ContactMePage({ onBackToHome }: ContactMePageProps) {
  const { name, email, website, location, socialLinks, phone } = aboutMeData;

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [description, setDescription] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formName.trim()) {
      setError("Please fill in your name.");
      return;
    }
    if (!formEmail.trim() || !formEmail.includes("@")) {
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
      setFormName("");
      setFormEmail("");
      setDescription("");
      setAcceptPolicy(false);
    }, 1500);
  };

  const renderSocialIcon = (key: string) => {
    switch (key) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const hasSocialLinks = Object.values(socialLinks).some((link) => link !== null && link !== undefined && link !== "");

  return (
    <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
      {/* Background glow overlay */}
      <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Title */}
        <div className="mb-16 text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-extrabold font-sans flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white leading-none">
            Let's Start a Project
          </h1>
          <p className="text-white/60 text-sm md:text-base font-sans max-w-2xl mt-4 leading-relaxed">
            Have an idea or a project in mind? Fill out the form or reach out directly. I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full text-left">

            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
                Contact Information
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-300"
                >
                  <span className="p-3 rounded-xl bg-white/5 text-brand-orange border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">Email Me</span>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{email}</span>
                  </div>
                </a>

                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-300"
                >
                  <span className="p-3 rounded-xl bg-white/5 text-brand-orange border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Globe className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">Website</span>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{website}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="p-3 rounded-xl bg-white/5 text-brand-orange border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">Location</span>
                    <span className="text-sm font-medium text-white/80">{location}</span>
                  </div>
                </div>

                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-4 group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-300"
                  >
                    <span className="p-3 rounded-xl bg-white/5 text-brand-orange border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">Call Me</span>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{phone}</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Socials Connection */}
            {hasSocialLinks && (
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col gap-4">
                <h3 className="text-xs uppercase tracking-wider text-white/40 font-bold font-sans">
                  Follow My Work
                </h3>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(socialLinks).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
                        title={`${name}'s ${platform}`}
                      >
                        {renderSocialIcon(platform)}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white">Message Sent Successfully!</h3>
                  <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. I have received your submission and will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {error && (
                    <div className="px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="form-name-input" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name-input"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Parth Sharma"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="form-email-input" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="form-email-input"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. parth@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>


                  {/* Description Input */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="form-desc-input" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Description
                    </label>
                    <textarea
                      id="form-desc-input"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Share details about what you're building, budget, or timelines..."
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Policy Acceptance Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="form-policy-check"
                      checked={acceptPolicy}
                      onChange={(e) => setAcceptPolicy(e.target.checked)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-brand-orange focus:ring-0 focus:ring-offset-0 mt-0.5 cursor-pointer accent-brand-orange"
                    />
                    <label htmlFor="form-policy-check" className="text-xs text-white/60 font-sans leading-relaxed select-none cursor-pointer">
                      I agree to the privacy policy and consent to being contacted regarding my project request.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-brand-orange/10 hover:scale-[1.01] cursor-pointer disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Project</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
