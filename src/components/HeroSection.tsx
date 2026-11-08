import React from 'react';
import { ArrowRight, Compass, Sparkles, Terminal, Cpu, Sparkle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient radial gradients - subtle and refined, avoiding harsh neon */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[400px] bg-gradient-to-tr from-[#3987FF]/10 via-[#762D43]/10 to-[#35D9E8]/8 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#3987FF]/8 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Introduction & Directives */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">
            {/* 1. Correct Portfolio Title Kicker: "AI Engineer Portfolio" */}
            <div className="animate-hero-intro inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A30]/90 border border-white/10 text-xs font-mono text-[#35D9E8] w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#35D9E8] shrink-0" />
              <span className="tracking-wide text-[#F4F7FF]">AI Engineer Portfolio</span>
            </div>

            {/* 2. Structured Introduction Arrangement:
                Hi, I'm
                RAHAB ASIF
                AI ENGINEER | PYTHON DEVELOPER
                Building Intelligent Solutions. Creating Impact Through AI. */}
            <div className="space-y-3">
              {/* "Hi, I'm" - small, visually subtle */}
              <div className="animate-hero-intro text-base sm:text-lg font-medium text-[#A6B2C8] tracking-wide">
                Hi, I&apos;m
              </div>

              {/* "RAHAB ASIF" - largest and most prominent */}
              <h1 className="animate-hero-name text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F4F7FF] font-['Outfit']">
                RAHAB ASIF
              </h1>

              {/* "AI ENGINEER | PYTHON DEVELOPER" directly below */}
              <div className="animate-hero-role text-lg sm:text-xl md:text-2xl font-semibold tracking-wider font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#35D9E8] via-[#3987FF] to-[#B85A70]">
                {PERSONAL_INFO.role}
              </div>
            </div>

            {/* 3. Headline: "Building Intelligent Solutions. Creating Impact Through AI." */}
            <div className="animate-hero-headline space-y-4 max-w-2xl">
              <p className="text-xl sm:text-2xl text-[#F4F7FF] font-medium leading-relaxed border-l-2 border-[#3987FF] pl-4 py-1">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-base text-[#A6B2C8] leading-relaxed">
                Focused on architecting intelligent systems, advancing machine learning pipelines,
                and engineering dependable, practical AI-powered solutions that bridge research with real-world utility.
              </p>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#3987FF] to-[#8957FF] hover:from-[#4791ff] hover:to-[#996eff] rounded-xl shadow-md hover:shadow-lg hover:shadow-[#3987FF]/20 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D9E8]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-[#F4F7FF] bg-[#101A30] hover:bg-[#152342] border border-white/10 hover:border-[#35D9E8]/40 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
              >
                <Compass className="w-4 h-4 text-[#35D9E8]" />
                <span>Discover My Journey</span>
              </a>
            </div>

            {/* Clean unboxed technical metadata */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#A6B2C8] font-mono">
              <span className="flex items-center gap-1.5 text-[#F4F7FF]">
                <Terminal className="w-3.5 h-3.5 text-[#35D9E8]" /> Python Core
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="flex items-center gap-1.5 text-[#F4F7FF]">
                <Cpu className="w-3.5 h-3.5 text-[#3987FF]" /> Machine Learning
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Generative AI</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Autonomous Agents</span>
            </div>
          </div>

          {/* Right Column: Premium Animated Portrait Card with Actual Photograph */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="animate-hero-portrait relative w-56 sm:w-60 lg:w-64 max-w-[260px] group">
              {/* Elegant layered background card with subtle burgundy & deep blue glow */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#762D43]/40 via-[#101A30] to-[#3987FF]/20 blur-sm opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Secondary subtle burgundy hairline frame offset */}
              <div
                className="absolute inset-0 rounded-2xl border border-[#B85A70]/30 translate-x-1.5 translate-y-1.5 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                aria-hidden="true"
              />

              {/* Main Premium Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#101A30] border-2 border-[#762D43]/80 group-hover:border-[#B85A70] shadow-xl shadow-black/50 transition-all duration-300">
                {/* Photo container - clearly visible, not awkwardly cropped */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#080D1A]">
                  <img
                    src="/assets/rahab_portrait.jpg"
                    alt="Rahab Asif – AI Engineer and Python Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle lower vignette scrim for contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-80 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Corner Accent Detail inspired by red dupatta embroidery */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#101A30]/80 backdrop-blur-md border border-[#B85A70]/50 flex items-center justify-center text-[#D98B9A] shadow-sm">
                    <Sparkle className="w-3 h-3" />
                  </div>
                </div>

                {/* Subdued Bottom Card Details */}
                <div className="p-3.5 bg-[#101A30]/95 backdrop-blur-md border-t border-[#762D43]/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#F4F7FF] font-['Outfit'] tracking-wide">
                      Rahab Asif
                    </div>
                    <div className="text-[11px] font-mono text-[#35D9E8]">
                      AI Engineer
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#B85A70] shadow-[0_0_6px_#B85A70]" title="Active" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
