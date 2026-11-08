import React from 'react';
import { ArrowRight, Compass, Sparkles, Terminal, Cpu, Sparkle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient radial gradients - subtle and refined */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[400px] bg-gradient-to-tr from-[#3987FF]/12 via-[#18C995]/10 to-[#762D43]/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#18C995]/8 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Introduction & Directives */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">
            {/* Portfolio Title Kicker: "AI Engineer Portfolio" */}
            <div className="animate-hero-intro inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A30]/90 border border-[#18C995]/30 text-xs font-mono text-[#18C995] w-fit shadow-sm shadow-[#18C995]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#18C995] shrink-0" />
              <span className="tracking-wide text-[#F4F7FF]">AI Engineer Portfolio</span>
            </div>

            {/* Structured Introduction Arrangement */}
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
              <div className="animate-hero-role text-lg sm:text-xl md:text-2xl font-semibold tracking-wider font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#18C995] via-[#3987FF] to-[#35D9E8]">
                {PERSONAL_INFO.role}
              </div>
            </div>

            {/* Headline: "Building Intelligent Solutions. Creating Impact Through AI." */}
            <div className="animate-hero-headline space-y-4 max-w-2xl">
              <p className="text-xl sm:text-2xl text-[#F4F7FF] font-medium leading-relaxed border-l-2 border-[#18C995] pl-4 py-1">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-base text-[#A6B2C8] leading-relaxed">
                Focused on architecting intelligent systems, advancing machine learning pipelines,
                and engineering dependable, practical AI-powered solutions that bridge research with real-world utility.
              </p>
            </div>

            {/* Interactive Action Buttons with selective neon glows */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#3987FF] via-[#18C995] to-[#3987FF] hover:bg-[length:200%_auto] rounded-xl shadow-lg shadow-[#18C995]/25 hover:shadow-[#18C995]/45 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C995]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-[#F4F7FF] bg-[#101A30] hover:bg-[#152342] border border-[#3987FF]/30 hover:border-[#18C995]/60 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
              >
                <Compass className="w-4 h-4 text-[#18C995]" />
                <span>Discover My Journey</span>
              </a>
            </div>

            {/* Clean unboxed technical metadata */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#A6B2C8] font-mono">
              <span className="flex items-center gap-1.5 text-[#F4F7FF]">
                <Terminal className="w-3.5 h-3.5 text-[#18C995]" /> Python Core
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

          {/* Right Column: Animated Suspended Floating Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="animate-hero-portrait-entry relative flex flex-col items-center">
              {/* Decorative hanging connector / bracket above the card */}
              <div className="flex flex-col items-center -mb-2 z-20 relative pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#18C995] border border-white shadow-[0_0_10px_#18C995]" />
                <div className="w-0.5 h-3.5 bg-gradient-to-b from-[#18C995] to-[#3987FF]" />
                <div className="w-8 h-2 rounded-t-lg bg-[#101A30] border-t-2 border-x-2 border-[#18C995]/80" />
              </div>

              {/* Floating card with smooth pendulum motion and hover lift */}
              <div className="animate-floating-portrait relative w-44 sm:w-48 lg:w-52 max-w-[210px] group cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                {/* Outer selective neon aura */}
                <div
                  className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#18C995]/30 via-[#3987FF]/25 to-[#762D43]/25 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Portrait Card: Dual Electric Blue + Emerald Green Border with subtle burgundy accent */}
                <div className="relative rounded-2xl overflow-hidden bg-[#101A30] border-2 border-[#18C995]/80 group-hover:border-[#3987FF] shadow-2xl shadow-black/60 transition-all duration-300">
                  {/* Photo container - clean vertical portrait, clearly visible */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#080D1A]">
                    <img
                      src={PERSONAL_INFO.portraitImage}
                      alt="Rahab Asif – AI Engineer and Python Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="eager"
                    />
                    {/* Subtle lower contrast vignette */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-75 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Corner Accent Detail inspired by red dupatta embroidery */}
                    <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#101A30]/85 backdrop-blur-md border border-[#B85A70]/60 flex items-center justify-center text-[#D98B9A] shadow-sm">
                      <Sparkle className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* Subdued Bottom Card Details */}
                  <div className="p-3 bg-[#101A30]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#F4F7FF] font-['Outfit'] tracking-wide text-xs sm:text-sm">
                        Rahab Asif
                      </div>
                      <div className="text-[10px] font-mono text-[#18C995] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18C995] animate-pulse" />
                        <span>AI Engineer</span>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#3987FF] shadow-[0_0_8px_#3987FF]" title="Available for AI Innovation" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
