/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AIExplorationSection } from './components/AIExplorationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { JourneySection } from './components/JourneySection';
import { EcosystemSection } from './components/EcosystemSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'ai-exploration',
      'skills',
      'projects',
      'roadmap',
      'journey',
      'ecosystem',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080D1A] text-[#F4F7FF] selection:bg-[#3987FF]/30 selection:text-white">
      {/* Interactive Neural Canvas Background with connected digital nodes */}
      <NeuralBackground />

      {/* Fixed Navigation Bar adhering to Top Bar Contract */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <AIExplorationSection />
        <SkillsSection />
        <ProjectsSection />
        <RoadmapSection />
        <JourneySection />
        <EcosystemSection />
        <ContactSection />
      </main>
    </div>
  );
}
