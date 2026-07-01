import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { aboutMeData } from "../data/aboutme";

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicyPage({ onBackToHome }: PrivacyPolicyPageProps) {
  const { name, email, website } = aboutMeData;
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
      {/* Background glow overlay */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Header Title */}
        <div className="mb-12 text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-orange font-extrabold font-sans flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-brand-orange animate-pulse" />
            Legal Document
          </span>
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wide text-white leading-none">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans mt-3">
            Last updated: July 1, 2026. Learn how I collect, use, and protect your project details.
          </p>
        </div>

        {/* Content Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl flex flex-col gap-8 text-left font-sans text-white/80 leading-relaxed text-sm">
          
          {/* Section 1 */}
          <section className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-orange" />
              1. Information Collection
            </h3>
            <p>
              I only collect project and contact details that you explicitly submit through the Project Planner or Contact forms on {website}. This includes:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-white/70">
              <li>Your name and email address so I can respond to your request.</li>
              <li>Project scope specifications, categories, budgets, and descriptions.</li>
            </ul>
          </section>

          <hr className="border-white/5" />

          {/* Section 2 */}
          <section className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand-orange" />
              2. How I Use Your Information
            </h3>
            <p>
              Your details are used strictly to evaluate your project scope, provide accurate timeline/cost estimations, and contact you directly with propositions.
            </p>
            <p className="font-semibold text-white/90">
              I do not sell, rent, or distribute your email or project descriptions to third-party advertisers or agencies.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Section 3 */}
          <section className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-orange" />
              3. Data Security & Storage
            </h3>
            <p>
              Any details sent through the online forms are stored in a secure repository. I employ standard security protocols to safeguard all project descriptions and personal contact details from unauthorized access.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Section 4 */}
          <section className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange" />
              4. Contact & Opt-Out
            </h3>
            <p>
              If you wish to update or delete any project inquiry details previously submitted, please contact me directly at:
            </p>
            <a
              href={`mailto:${email}`}
              className="text-brand-orange hover:underline font-semibold"
            >
              {email}
            </a>
          </section>

          {/* Footer Notice */}
          <div className="pt-6 border-t border-white/5 mt-4 text-xs text-white/40 flex justify-between items-center">
            <span>&copy; {currentYear} {name}. All rights reserved.</span>
            <span>robinsweb.dev</span>
          </div>

        </div>
      </div>
    </div>
  );
}
