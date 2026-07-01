import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Github, Linkedin, Instagram, Twitter, Award, BookOpen, Film, Eye, Download, X } from "lucide-react";
import { aboutMeData } from "../data/aboutme";
import dartIcon from "../assets/icons/dart.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import flutterIcon from "../assets/icons/flutter.svg";

interface AboutMePageProps {
  onBackToHome: () => void;
}

export default function AboutMePage({ onBackToHome }: AboutMePageProps) {
  const { name, role, avatar, videoUrl, bio, skills, coreSkills = [], experience, socialLinks, resumeUrl, email, website, location, experienceYears, projectsCompleted, specialty } = aboutMeData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Helper to render skill icons dynamically
  const renderSkillIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "react":
      case "reactnative":
      case "react native":
        return (
          <svg className="w-8 h-8 text-[#61DAFB] group-hover:rotate-180 transition-transform duration-1000" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );
      case "typescript":
      case "ts":
        return (
          <svg className="w-8 h-8 text-[#3178C6] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <text x="12" y="16.5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TS</text>
          </svg>
        );
      case "flutter":
        return (
          <img
            src={flutterIcon}
            alt="Flutter"
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        );
      case "dart":
        return (
          <img
            src={dartIcon}
            alt="Dart"
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        );
      case "firebase":
        return (
          <img
            src={firebaseIcon}
            alt="Firebase"
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        );
      case "bloc":
        return (
          <svg className="w-8 h-8 text-[#0288D1] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 17.25L4.5 15.6v-6.2L11 12.85v6.4zm1-8.1L5.5 8.1 12 4.5l6.5 3.6-6.5 3.05zm7 4.95l-6.5 3.65v-6.4l6.5-3.05v6.2z"/>
          </svg>
        );
      case "riverpod":
        return (
          <svg className="w-8 h-8 text-[#00B0FF] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5" />
            <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2" />
          </svg>
        );
      case "androidstudio":
      case "android studio":
        return (
          <svg className="w-8 h-8 text-[#3DDC84] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 9.48l1.44-2.5a.51.51 0 0 0-.18-.7.52.52 0 0 0-.7.18l-1.47 2.54A10.15 10.15 0 0 0 12 8c-1.8 0-3.48.47-4.93 1.3L5.6 6.78a.52.52 0 0 0-.7-.18.51.51 0 0 0-.18.7l1.44 2.5A9.96 9.96 0 0 0 2 18h20a9.96 9.96 0 0 0-4.4-8.52zM7 14.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
          </svg>
        );
      case "figma":
        return (
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4h4V2H8z" fill="#F24E1E" />
            <path d="M12 2h4a4 4 0 0 1 0 8h-4V2z" fill="#A259FF" />
            <path d="M12 10h4a4 4 0 0 1 0 8h-4v-8z" fill="#1ABC9C" />
            <path d="M8 18a4 4 0 0 0 0 8h4v-8H8z" fill="#0ACF83" />
            <path d="M8 10a4 4 0 0 0-4 4a4 4 0 0 0 4 4h4v-8H8z" fill="#FF7262" />
          </svg>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center rounded bg-white/10 text-white font-bold text-xs uppercase">
            {iconName.slice(0, 2)}
          </div>
        );
    }
  };

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

  return (
    <>
      <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Profile Info, Socials, Stats, Tech Stack & Resume */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-brand-orange/20 shadow-2xl shadow-brand-orange/10"
              >
                <img
                  src={avatar}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-2"
              >
                <h1 className="text-3xl md:text-5xl font-bebas tracking-wide text-white leading-none">
                  {name}
                </h1>
                <p className="text-brand-orange text-sm md:text-base font-sans font-bold tracking-wider uppercase">
                  {role}
                </p>
              </motion.div>

              {/* Conditionally render social links if they are not null */}
              {hasSocialLinks && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-3 w-full"
                >
                  {Object.entries(socialLinks).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-md flex items-center justify-center"
                        title={`${name}'s ${platform}`}
                      >
                        {renderSocialIcon(platform)}
                      </a>
                    );
                  })}
                </motion.div>
              )}

              {/* Quick Details & Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mt-4 text-left relative overflow-hidden"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center gap-2 relative">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest pl-2">
                    Available for Work
                  </span>
                </div>

                <div className="h-px bg-white/5" />

                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">
                      Experience
                    </span>
                    <span className="text-base font-bebas text-white tracking-wider">
                      {experienceYears}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">
                      Projects
                    </span>
                    <span className="text-base font-bebas text-white tracking-wider">
                      {projectsCompleted}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">
                      Location
                    </span>
                    <span className="text-xs font-sans text-white font-medium">
                      {location}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold font-sans">
                      Specialty
                    </span>
                    <span className="text-xs font-sans text-white font-medium">
                      {specialty}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs tracking-widest uppercase text-center transition-all duration-300 shadow-md shadow-brand-orange/10 hover:scale-[1.02] cursor-pointer"
                >
                  Let's Work Together
                </a>

              </motion.div>

              {/* Tech Stack Cards */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mt-4 text-left"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans">
                    Core Tech Stack
                  </h4>
                  <p className="text-[11px] text-white/60 font-sans mt-1">
                    The principal tools and frameworks powering my development workflows:
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {coreSkills.map((skill, index) => (
                    <div
                      key={index}
                      style={{
                        "--hover-border": `${skill.color}66`, // 40% opacity
                        "--hover-bg": `${skill.color}0d`,     // 5% opacity
                      } as React.CSSProperties}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--hover-border)] hover:bg-[var(--hover-bg)] transition-all duration-300 group cursor-pointer"
                    >
                      {renderSkillIcon(skill.icon)}
                      <span className="text-[9px] text-white/70 font-semibold font-sans mt-2">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Resume Preview Document Card */}
              {resumeUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mt-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans">
                      Resume Preview
                    </h4>
                    {resumeUrl.pdf && (
                      <a
                        href={resumeUrl.pdf}
                        download={`${name}_Resume.pdf`}
                        className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
                        title="Download Resume PDF"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Interactive Resume Card Mock */}
                  <div
                    onClick={() => setIsResumeOpen(true)}
                    className="group relative aspect-[1/1.414] w-full rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/30 overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:shadow-brand-orange/5"
                  >
                    <img
                      src={resumeUrl.image}
                      alt="Resume Preview Thumbnail"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <span className="p-3 rounded-full bg-brand-orange text-white shadow-lg">
                        <Eye className="w-5 h-5" />
                      </span>
                      <span className="text-xs text-white font-bold uppercase tracking-wider font-sans">
                        View Full Resume
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT COLUMN: Video, Bio, Skills & Timeline */}
            <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">

              {/* Intro Video (Render only if present) */}
              {videoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans flex items-center gap-2">
                    <Film className="w-4 h-4 text-brand-orange" />
                    Video Introduction
                  </h3>
                  <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                    <iframe
                      src={videoUrl}
                      title={`${name} Intro Video`}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}

              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans">
                  My Story
                </h3>
                <div className="flex flex-col gap-4 text-white/80 text-base font-sans leading-relaxed">
                  {bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>

              <hr className="border-white/5" />

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-orange" />
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                    >
                      <h4 className="text-sm uppercase tracking-wider text-brand-orange font-bold font-sans mb-4">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <hr className="border-white/5" />

              {/* Experience / Timeline Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange" />
                  Professional Journey
                </h3>

                <div className="relative border-l border-white/10 pl-6 ml-2 flex flex-col gap-8 w-full">
                  {experience.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-[#120806]" />

                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-xs font-mono text-brand-orange font-bold">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-white font-sans">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-xs font-sans italic">
                          {item.subtitle}
                        </p>
                        <p className="text-white/80 text-sm font-sans mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && resumeUrl && (
          <div className="fixed inset-0 z-[110] overflow-y-auto p-4 md:p-10 flex justify-center items-start">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-0"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative my-auto w-full max-w-4xl bg-zinc-950 text-white border border-white/10 rounded-3xl shadow-2xl z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-white/60 font-sans">
                  Resume Viewer
                </span>
                <div className="flex items-center gap-3">
                  {resumeUrl.pdf && (
                    <a
                      href={resumeUrl.pdf}
                      download={`${name}_Resume.pdf`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-orange hover:bg-[#e05e00] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  )}
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Resume Image Render */}
              <div className="p-4 md:p-8 overflow-y-auto max-h-[80vh] flex justify-center items-start bg-[#120806]">
                <img
                  src={resumeUrl.image}
                  alt={`${name} Resume`}
                  className="max-w-full h-auto rounded-xl border border-white/5 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
