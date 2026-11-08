import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Database,
  BookOpen,
  TrendingUp,
  BarChart3,
  Bot,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ROADMAP_ITEMS } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState<number>(0);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Database;
      case 1:
        return BookOpen;
      case 2:
        return TrendingUp;
      case 3:
        return BarChart3;
      case 4:
        return Bot;
      default:
        return Compass;
    }
  };

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35D9E8]">
            Future Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
            What&apos;s Next in My AI Engineering Journey?
          </h2>
          <p className="text-base sm:text-lg text-[#A6B2C8]">
            A forward-looking architectural roadmap of planned explorations, research frontiers, and advanced intelligent systems.
          </p>
        </div>

        {/* Futuristic Timeline Container */}
        <div className="relative">
          {/* Connecting glowing spine (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3987FF]/20 via-[#35D9E8]/60 to-[#8957FF]/20 z-0"
            aria-hidden="true"
          />

          {/* Node Milestones Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10 mb-12">
            {ROADMAP_ITEMS.map((item, idx) => {
              const Icon = getIcon(idx);
              const isActive = activeRoadmapIndex === idx;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveRoadmapIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#101A30] border-[#35D9E8] shadow-lg shadow-[#35D9E8]/20 -translate-y-1'
                      : 'bg-[#101A30]/50 border-[#3987FF]/20 hover:border-[#3987FF]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#35D9E8] text-[#080D1A]'
                          : 'bg-[#080D1A] text-[#3987FF] border border-[#3987FF]/30'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#A6B2C8]/60">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#3987FF] mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#3987FF]/15 flex items-center justify-between text-[11px] text-[#35D9E8]">
                    <span>Planned Exploration</span>
                    <span className="text-xs">{isActive ? '●' : '○'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Roadmap Milestone */}
          {ROADMAP_ITEMS[activeRoadmapIndex] && (
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-[#35D9E8]/35 shadow-2xl shadow-[#3987FF]/15 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#35D9E8]/10 border border-[#35D9E8]/30 text-xs font-mono text-[#35D9E8]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PLANNED INITIATIVE · STAGE 0{activeRoadmapIndex + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {ROADMAP_ITEMS[activeRoadmapIndex].title}
                  </h3>

                  <p className="text-base text-[#A6B2C8] leading-relaxed">
                    {ROADMAP_ITEMS[activeRoadmapIndex].description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#080D1A]/80 border border-[#3987FF]/20">
                    <div className="text-xs font-mono uppercase text-[#35D9E8] mb-1">
                      Target Engineering Impact
                    </div>
                    <p className="text-sm text-[#F4F7FF]">
                      {ROADMAP_ITEMS[activeRoadmapIndex].potentialImpact}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="glass-panel p-5 rounded-xl border border-[#3987FF]/20 space-y-4">
                    <div>
                      <div className="text-xs font-mono uppercase text-[#F4F7FF] mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#3987FF]" />
                        <span>Key Focus Areas</span>
                      </div>
                      <ul className="space-y-2">
                        {ROADMAP_ITEMS[activeRoadmapIndex].keyFocusAreas.map((area, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#A6B2C8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#35D9E8] mt-1.5 shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#3987FF]/15">
                      <div className="text-xs font-mono uppercase text-[#F4F7FF] mb-2">
                        Planned Technology Stack
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#35D9E8]">
                        {ROADMAP_ITEMS[activeRoadmapIndex].plannedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#080D1A] border border-[#3987FF]/25 text-[#F4F7FF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
