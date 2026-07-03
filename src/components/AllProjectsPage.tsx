import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X, Github, ExternalLink, Smartphone, Play } from "lucide-react";
import { projectsList, Project } from "../data/projects";

interface AllProjectsPageProps {
  onBackToHome: () => void;
}

export default function AllProjectsPage({ onBackToHome }: AllProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projectsList.map((p) => p.category)))];

  const filteredProjects = activeFilter === "All"
    ? projectsList
    : projectsList.filter((p) => p.category === activeFilter);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="min-h-screen bg-[#120806] pt-32 pb-24 relative z-20">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-orange/5 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 mb-8 text-xs uppercase tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold font-sans flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Full Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bebas tracking-wide text-white font-extrabold leading-none">
              All My Works
            </h1>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-brand-orange border-brand-orange text-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOpenModal(project)}
                  className="flex flex-col gap-4 group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-xl group-hover:border-brand-orange/30 group-hover:shadow-brand-orange/10 transition-all duration-500">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120806]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-col gap-1.5 px-2">
                    <h3 className="text-lg font-bold font-sans text-white group-hover:text-brand-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs font-sans">
                      {project.subtitle}
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest font-bold text-white/50 group-hover:border-brand-orange group-hover:text-brand-orange transition-colors">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest font-bold text-brand-orange">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const mediaList = [selectedProject.thumbnail, ...(selectedProject.images || [])];
          return (
            <div className="fixed inset-0 z-[100] overflow-y-auto p-4 md:p-10 flex justify-center items-start">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative my-auto w-full max-w-5xl bg-[#1a0f0d] border border-white/10 rounded-3xl shadow-2xl z-10 overflow-hidden"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 z-30"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 bg-black/60 flex items-center justify-center">
                      {!(selectedProject.video && activeImageIndex === mediaList.length) && (
                        <div
                          className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 pointer-events-none scale-110"
                          style={{ backgroundImage: `url(${mediaList[activeImageIndex]})` }}
                        />
                      )}

                      {selectedProject.video && activeImageIndex === mediaList.length ? (
                        <iframe
                          src={selectedProject.video}
                          title={`${selectedProject.title} Video Preview`}
                          className="w-full h-full border-none z-10"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={mediaList[activeImageIndex]}
                          alt={`${selectedProject.title} media`}
                          className="max-w-full max-h-full object-contain z-10"
                        />
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {mediaList.map((imgUrl, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImageIndex === index
                            ? "border-brand-orange scale-95 shadow-md"
                            : "border-white/10 hover:border-white/30"
                            }`}
                        >
                          <img src={imgUrl} alt="Thumbnail preview" className="w-full h-full object-cover" />
                        </button>
                      ))}
                      {selectedProject.video && (
                        <button
                          onClick={() => setActiveImageIndex(mediaList.length)}
                          className={`relative w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 flex flex-col items-center justify-center bg-black/60 transition-all duration-200 ${activeImageIndex === mediaList.length
                            ? "border-brand-orange scale-95 shadow-md"
                            : "border-white/10 hover:border-white/30"
                            }`}
                        >
                          <Play className="w-6 h-6 text-brand-orange" />
                          <span className="text-[9px] text-white/60 font-bold uppercase mt-1">Video</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full border border-brand-orange/30 text-[10px] uppercase tracking-widest font-bold text-brand-orange bg-brand-orange/5">
                            {selectedProject.category}
                          </span>
                          {selectedProject.status && (
                            <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest font-bold text-white/80 bg-white/5">
                              {selectedProject.status}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold font-sans text-white mt-4 leading-tight">
                          {selectedProject.title}
                        </h2>
                        <p className="text-white/60 text-sm font-sans mt-2 italic">
                          {selectedProject.subtitle}
                        </p>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans mb-3">
                          About the Project
                        </h4>
                        <div className="max-h-40 md:max-h-48 overflow-y-auto custom-scrollbar pr-2">
                          <p className="text-white/80 text-sm font-sans leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold font-sans mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                      {selectedProject.links.live && (
                        <a
                          href={selectedProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Github
                        </a>
                      )}
                      {selectedProject.links.playstore && (
                        <a
                          href={selectedProject.links.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300"
                        >
                          <Smartphone className="w-4 h-4" />
                          Play Store
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </>
  );
}
