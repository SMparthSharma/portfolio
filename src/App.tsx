import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AllProjectsPage from "./components/AllProjectsPage";
import AboutMePage from "./components/AboutMePage";
import ServicesPage from "./components/ServicesPage";
import StartProjectPage from "./components/StartProjectPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import HowIHelp from "./components/HowIHelp";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects' | 'about-me' | 'services' | 'start-project' | 'privacy-policy'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToAllProjects = () => {
    setCurrentPage('all-projects');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToAboutMe = () => {
    setCurrentPage('about-me');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToStartProject = (initialCategory?: string) => {
    setSelectedCategory(initialCategory);
    setCurrentPage('start-project');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    if (href === "#about") {
      navigateToAboutMe();
    } else if (href === "#services") {
      navigateToServices();
    } else if (href === "#all-projects" || href === "#projects") {
      navigateToAllProjects();
    } else if (href === "#privacy" || href === "#privacy-policy") {
      navigateToPrivacyPolicy();
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for page transition to update DOM, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#120806] text-white font-sans overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Background grain noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-50" />

      {/* Navigation */}
      <Navbar 
        onBrandClick={navigateToHome} 
        onNavClick={handleNavClick} 
        onStartProjectClick={navigateToStartProject}
      />

      {currentPage === 'home' ? (
        /* Main Content Layout */
        <main>
          {/* 1. Hero Section */}
          <Hero onStartProjectClick={navigateToStartProject} />

          {/* 2. Stats Ticker Strip */}
          <Stats />

          {/* 3. About Section */}
          <About onStartProjectClick={navigateToStartProject} />

          {/* 4. Client Logos */}
          <Clients />

          {/* 5. Recent Projects */}
          <Projects onSeeAllWorks={navigateToAllProjects} />

           {/* 6. Services */}
          <Services onStartProjectClick={navigateToStartProject} onNavigateToServices={navigateToServices} />

          {/* 6.5 Approach Section */}
          <HowIHelp />

          {/* 7. Testimonials */}
          <Testimonials />

          {/* 8. Giant CTA Ticker */}
          <CTA />
        </main>
      ) : currentPage === 'all-projects' ? (
        <AllProjectsPage onBackToHome={navigateToHome} />
      ) : currentPage === 'about-me' ? (
        <AboutMePage onBackToHome={navigateToHome} />
      ) : currentPage === 'services' ? (
        <ServicesPage onBackToHome={navigateToHome} onNavigateToStartProject={navigateToStartProject} />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicyPage onBackToHome={navigateToHome} />
      ) : (
        <StartProjectPage onBackToHome={navigateToHome} initialCategory={selectedCategory} />
      )}

      {/* Footer */}
      <Footer onStartProjectClick={navigateToStartProject} onNavClick={handleNavClick} />
    </div>
  );
}




