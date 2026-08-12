import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Send, CheckCircle2, DollarSign, Calendar, Info, Layers, Mail, Globe, MapPin, Phone, Github, Linkedin, Instagram, Twitter, IndianRupee } from "lucide-react";
import { aboutMeData } from "../data/aboutme";
import { servicesList } from "../data/services";

interface StartProjectPageProps {
  onBackToHome: () => void;
  initialCategory?: string;
}

export default function StartProjectPage({ onBackToHome, initialCategory }: StartProjectPageProps) {
  const { name, email, website, location, phone, socialLinks } = aboutMeData;

  // Helper to render icons dynamically
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

  // Check if there are any valid social links to show
  const hasSocialLinks = Object.values(socialLinks).some((link) => link !== null && link !== undefined && link !== "");

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Form states
  const [hiringType, setHiringType] = useState<'project' | 'employee'>('project');
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  
  // Project-specific states
  const [projectCategory, setProjectCategory] = useState(initialCategory || servicesList[0]?.title || "React Native App");
  const [budgetCurrency, setBudgetCurrency] = useState<'USD' | 'INR'>('USD');
  const [budget, setBudget] = useState("$2,000 - $5,000");
  const [timeline, setTimeline] = useState("1 - 3 Months");

  // Employee-specific states
  const [targetRole, setTargetRole] = useState("Flutter Developer");
  const [salaryCurrency, setSalaryCurrency] = useState<'INR' | 'USD'>('INR');
  const [salaryRange, setSalaryRange] = useState("5 LPA - 8 LPA");
  const [jobType, setJobType] = useState("Remote");

  // Shared states
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    setError("");
    if (step === 1) {
      if (!clientName.trim()) {
        setError(hiringType === 'project' ? "Please enter your name." : "Please enter recruiter name.");
        return;
      }
      if (!clientEmail.trim() || !clientEmail.includes("@")) {
        setError(hiringType === 'project' ? "Please enter a valid email address." : "Please enter a valid company email.");
        return;
      }
      if (hiringType === 'employee' && !companyName.trim()) {
        setError("Please enter your company name.");
        return;
      }
    }
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setError("");
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!description.trim()) {
      setError(
        hiringType === 'project' 
          ? "Please write a brief description of your project." 
          : "Please write a brief description of the job/role."
      );
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subject = encodeURIComponent(
        hiringType === 'project' 
          ? `Project Inquiry: ${projectCategory}` 
          : `Job Offer: ${targetRole} at ${companyName}`
      );
      
      const bodyText = hiringType === 'project' 
        ? `Hello Parth,\n\nI would like to discuss a new project with you. Here are the details:\n\n` +
          `- Name: ${clientName}\n` +
          `- Email: ${clientEmail}\n` +
          `- Category: ${projectCategory}\n` +
          `- Budget: ${budget}\n` +
          `- Timeline: ${timeline}\n\n` +
          `Project Description:\n${description}\n\n` +
          `Best regards,\n${clientName}`
        : `Hello Parth,\n\nI would like to discuss a job offer/position with you. Here are the details:\n\n` +
          `- Recruiter: ${clientName}\n` +
          `- Company: ${companyName}\n` +
          `- Email: ${clientEmail}\n` +
          `- Role: ${targetRole}\n` +
          `- Salary Range: ${salaryRange}\n` +
          `- Job Type: ${jobType}\n\n` +
          `Job Description:\n${description}\n\n` +
          `Best regards,\n${clientName} (${companyName})`;

      const encodedBody = encodeURIComponent(bodyText);
      const gmailAppUrl = `googlegmail:///co?to=${email}&subject=${subject}&body=${encodedBody}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${encodedBody}`;

      // Check if user is on mobile
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        const start = Date.now();
        window.location.href = gmailAppUrl;
        
        setTimeout(() => {
          // If the page is still active/focused (native app didn't open), fallback to Web Gmail
          if (Date.now() - start < 1500) {
            window.open(gmailWebUrl, "_blank");
          }
        }, 1000);
      } else {
        // Desktop browsers open Web Gmail directly
        window.open(gmailWebUrl, "_blank");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
      {/* Background glow overlay */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header Title */}
        <div className="mb-10 text-center lg:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-extrabold font-sans flex items-center justify-center lg:justify-start gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Project Planner
          </span>
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide text-white leading-none">
            Start Your Project Journey
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans mt-3">
            Provide details about your mobile or web app concept to get an accurate estimation.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-10">

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
{/* 
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
                </a> */}

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

          {/* Right Column: Form Box */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl relative w-full">
          
          {/* Progress Indicators */}
          {!isSubmitted && (
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step >= num
                        ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                        : "bg-white/5 border border-white/10 text-white/40"
                    }`}
                  >
                    {step > num ? <Check className="w-4 h-4" /> : num}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold hidden sm:inline ${
                    step >= num ? "text-white" : "text-white/40"
                  }`}>
                    {num === 1 ? "Basics" : num === 2 ? "Scope" : "Brief"}
                  </span>
                  {num < 3 && <div className="w-12 h-px bg-white/10 hidden sm:block" />}
                </div>
              ))}
            </div>
          )}

          {/* Success Screen */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-6 py-8 text-left"
            >
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">
                {hiringType === 'project' ? "Project Inquiry Received!" : "Job Inquiry Received!"}
              </h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed font-sans">
                {hiringType === 'project' ? (
                  <>
                    Thank you for submitting your project plan. <strong>{name}</strong> will review your details (category: {projectCategory}, budget: {budget}) and get in touch with you at <strong>{clientEmail}</strong> within 24 hours.
                  </>
                ) : (
                  <>
                    Thank you for your job offer details. <strong>{name}</strong> will review the position (role: {targetRole}, type: {jobType}) and get back to you at <strong>{clientEmail}</strong> within 24 hours.
                  </>
                )}
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  setIsSubmitted(false);
                  setClientName("");
                  setClientEmail("");
                  setCompanyName("");
                  setDescription("");
                }}
                className="mt-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer"
              >
                {hiringType === 'project' ? "Plan Another Project" : "Submit Another Offer"}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 text-left">
              
              {error && (
                <div className="px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                  {error}
                </div>
              )}

              {/* STEP 1: BASICS */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  {/* Hiring Purpose Toggle */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      Hiring Purpose
                    </span>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-white/5 border border-white/10 rounded-xl">
                      <button
                        type="button"
                        onClick={() => {
                          setHiringType('project');
                          setError("");
                        }}
                        className={`py-3 rounded-lg text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                          hiringType === 'project'
                            ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        Start a Project
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setHiringType('employee');
                          setError("");
                        }}
                        className={`py-3 rounded-lg text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                          hiringType === 'employee'
                            ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        Hire as Employee
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="planner-name" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      {hiringType === 'project' ? "Your Name" : "Hiring Manager / Recruiter Name"}
                    </label>
                    <input
                      type="text"
                      id="planner-name"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        setError("");
                      }}
                      placeholder={hiringType === 'project' ? "e.g. John Doe" : "e.g. Sarah Jenkins"}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="planner-email" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                      {hiringType === 'project' ? "Your Email" : "Company Email"}
                    </label>
                    <input
                      type="email"
                      id="planner-email"
                      value={clientEmail}
                      onChange={(e) => {
                        setClientEmail(e.target.value);
                        setError("");
                      }}
                      placeholder={hiringType === 'project' ? "e.g. john@example.com" : "e.g. recruiting@company.com"}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>

                  {/* Company Name (Employee Flow Only) */}
                  {hiringType === 'employee' && (
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="planner-company" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="planner-company"
                        value={companyName}
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                          setError("");
                        }}
                        placeholder="e.g. Google, Stripe, etc."
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Project Category / Target Role Selection */}
                  <div className="flex flex-col gap-3 relative">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-brand-orange" />
                      {hiringType === 'project' ? "What type of project is it?" : "Target Role / Open Position"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hiringType === 'project' ? (
                        servicesList.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setProjectCategory(service.title)}
                            className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                              projectCategory === service.title
                                ? "bg-brand-orange/10 border-brand-orange text-white"
                                : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {service.title}
                          </button>
                        ))
                      ) : (
                        ["Flutter Developer", "React Native Developer", "Full Stack Developer", "Other / General IT"].map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => setTargetRole(role)}
                            className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                              targetRole === role
                                ? "bg-brand-orange/10 border-brand-orange text-white"
                                : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {role}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BUDGET & TIMELINE / OFFER DETAILS */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-8"
                >
                  {hiringType === 'project' ? (
                    <>
                      {/* Budget */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2">
                            {budgetCurrency === 'USD' ? (
                              <DollarSign className="w-3.5 h-3.5 text-brand-orange" />
                            ) : (
                              <IndianRupee className="w-3.5 h-3.5 text-brand-orange" />
                            )}
                            Estimated Budget Range
                          </span>
                          {/* Currency Toggle */}
                          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-0.5 rounded-lg">
                            {(['USD', 'INR'] as const).map((curr) => (
                              <button
                                key={curr}
                                type="button"
                                onClick={() => {
                                  setBudgetCurrency(curr);
                                  setBudget(curr === 'USD' ? "$2,000 - $5,000" : "₹50,000 - ₹2,00,000");
                                  setError("");
                                }}
                                className={`px-2 py-1 rounded-md text-[9px] font-bold transition-all duration-200 cursor-pointer ${
                                  budgetCurrency === curr
                                    ? "bg-brand-orange text-white"
                                    : "text-white/40 hover:text-white"
                                }`}
                              >
                                {curr}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {budgetCurrency === 'USD' ? (
                            ["Under $1,000", "$2,000 - $5,000", "$5,000+", "Custom"].map((option) => {
                              const isSelected = option === "Custom"
                                ? !["Under $1,000", "$2,000 - $5,000", "$5,000+"].includes(budget)
                                : budget === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    if (option === "Custom") {
                                      setBudget("");
                                    } else {
                                      setBudget(option);
                                    }
                                  }}
                                  className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                    isSelected
                                      ? "bg-brand-orange/10 border-brand-orange text-white"
                                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })
                          ) : (
                            ["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000+", "Custom"].map((option) => {
                              const isSelected = option === "Custom"
                                ? !["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000+"].includes(budget)
                                : budget === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    if (option === "Custom") {
                                      setBudget("");
                                    } else {
                                      setBudget(option);
                                    }
                                  }}
                                  className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                    isSelected
                                      ? "bg-brand-orange/10 border-brand-orange text-white"
                                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })
                          )}
                        </div>
                        {((budgetCurrency === 'USD' && !["Under $1,000", "$2,000 - $5,000", "$5,000+"].includes(budget)) ||
                          (budgetCurrency === 'INR' && !["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000+"].includes(budget))) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1"
                          >
                            <input
                              type="text"
                              value={budget}
                              onChange={(e) => setBudget(e.target.value)}
                              placeholder={budgetCurrency === 'USD' ? "Enter custom budget (e.g. $8,000)" : "Enter custom budget (e.g. ₹1,00,000)"}
                              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                            />
                          </motion.div>
                        )}
                      </div>

                      {/* Timeline */}
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                          Desired Launch Timeline
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {["Under 1 Month", "1 - 3 Months", "3 - 6 Months", "No specific rush"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setTimeline(option)}
                              className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                timeline === option
                                  ? "bg-brand-orange/10 border-brand-orange text-white"
                                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Salary Range */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2">
                            {salaryCurrency === 'USD' ? (
                              <DollarSign className="w-3.5 h-3.5 text-brand-orange" />
                            ) : (
                              <IndianRupee className="w-3.5 h-3.5 text-brand-orange" />
                            )}
                            Target Annual Salary Range
                          </span>
                           {/* Currency Toggle */}
                          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-0.5 rounded-lg">
                            {(['INR', 'USD'] as const).map((curr) => (
                              <button
                                key={curr}
                                type="button"
                                onClick={() => {
                                  setSalaryCurrency(curr);
                                  setSalaryRange(curr === 'INR' ? "5 LPA - 8 LPA" : "$10k - $20k");
                                  setError("");
                                }}
                                className={`px-2 py-1 rounded-md text-[9px] font-bold transition-all duration-200 cursor-pointer ${
                                  salaryCurrency === curr
                                    ? "bg-brand-orange text-white"
                                    : "text-white/40 hover:text-white"
                                }`}
                              >
                                {curr}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {salaryCurrency === 'INR' ? (
                            ["3 LPA - 5 LPA", "5 LPA - 8 LPA", "8 LPA - 12 LPA", "Custom"].map((option) => {
                              const isSelected = option === "Custom"
                                ? !["3 LPA - 5 LPA", "5 LPA - 8 LPA", "8 LPA - 12 LPA"].includes(salaryRange)
                                : salaryRange === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    if (option === "Custom") {
                                      setSalaryRange("");
                                    } else {
                                      setSalaryRange(option);
                                    }
                                  }}
                                  className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                    isSelected
                                      ? "bg-brand-orange/10 border-brand-orange text-white"
                                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })
                          ) : (
                            ["$10k - $20k", "$20k - $30k", "$30k+", "Custom"].map((option) => {
                              const isSelected = option === "Custom"
                                ? !["$10k - $20k", "$20k - $30k", "$30k+"].includes(salaryRange)
                                : salaryRange === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    if (option === "Custom") {
                                      setSalaryRange("");
                                    } else {
                                      setSalaryRange(option);
                                    }
                                  }}
                                  className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                    isSelected
                                      ? "bg-brand-orange/10 border-brand-orange text-white"
                                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })
                          )}
                        </div>
                        {((salaryCurrency === 'INR' && !["3 LPA - 5 LPA", "5 LPA - 8 LPA", "8 LPA - 12 LPA"].includes(salaryRange)) ||
                          (salaryCurrency === 'USD' && !["$10k - $20k", "$20k - $30k", "$30k+"].includes(salaryRange))) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1"
                          >
                            <input
                              type="text"
                              value={salaryRange}
                              onChange={(e) => setSalaryRange(e.target.value)}
                              placeholder={salaryCurrency === 'INR' ? "Enter custom salary (e.g. 10 LPA)" : "Enter custom salary (e.g. $40k)"}
                              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300"
                            />
                          </motion.div>
                        )}
                      </div>

                      {/* Job Type / Workplace Location */}
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-brand-orange" />
                          Workplace Model
                        </span>
                        <div className="grid grid-cols-3 gap-3">
                          {["Remote", "Hybrid", "Onsite"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setJobType(option)}
                              className={`px-4 py-3.5 rounded-xl border text-xs font-semibold text-center transition-all duration-300 cursor-pointer ${
                                jobType === option
                                  ? "bg-brand-orange/10 border-brand-orange text-white"
                                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* STEP 3: BRIEF */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="planner-desc" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-sans flex items-center gap-2 mb-1">
                      <Info className="w-3.5 h-3.5 text-brand-orange" />
                      {hiringType === 'project' ? "Describe key features & app goals" : "Describe key role responsibilities & goals"}
                    </label>
                    <textarea
                      id="planner-desc"
                      rows={6}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        setError("");
                      }}
                      placeholder={
                        hiringType === 'project'
                          ? "e.g. Building an e-commerce Flutter app that supports secure Stripe checkout, user registration, real-time push notifications, and a styled dark mode..."
                          : "e.g. Seeking a developer to scale our React Native application. Requirements include state management proficiency, custom animations, and API integrations..."
                      }
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/[0.08] transition-all duration-300 resize-none leading-relaxed"
                    />
                  </div>
                </motion.div>
              )}

              {/* Controls Row */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Plan</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}

          </div>

        </div>

      </div>
    </div>
  );
}
