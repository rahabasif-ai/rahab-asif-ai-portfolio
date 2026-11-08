import React, { useState } from 'react';
import {
  Compass,
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
    <section id="roadmap" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#EAF2FF] via-[#F4F7FF] to-[#EAF2FF] text-[#0F172A] border-y border-[#3987FF]/15">
      {/* Subtle ambient light gradient */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#18C995]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#3987FF]/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
            Future Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] font-['Outfit']">
            What&apos;s Next in My AI Engineering Journey?
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            A forward-looking architectural roadmap of planned explorations, research frontiers, and advanced intelligent systems.
          </p>
        </div>

        {/* Futuristic Timeline Container */}
        <div className="relative">
          {/* Connecting glowing spine (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3987FF]/30 via-[#18C995] to-[#3987FF]/30 z-0"
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
                      ? 'bg-white border-[#18C995] shadow-lg shadow-[#18C995]/20 -translate-y-1'
                      : 'bg-white/80 border-[#3987FF]/15 hover:border-[#18C995] hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#18C995] text-white shadow-md shadow-[#18C995]/30'
                          : 'bg-[#EAF2FF] text-[#3987FF] border border-[#3987FF]/25'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#64748B]">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#3987FF] font-semibold mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-sm font-bold text-[#0F172A] line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#3987FF]/15 flex items-center justify-between text-[11px] text-[#18C995] font-semibold">
                    <span>Planned Exploration</span>
                    <span className="text-xs">{isActive ? '●' : '○'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Roadmap Milestone */}
          {ROADMAP_ITEMS[activeRoadmapIndex] && (
            <div className="light-panel p-6 sm:p-10 rounded-2xl border border-[#18C995]/40 shadow-xl shadow-[#18C995]/10 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-[#18C995]/40 text-xs font-mono text-[#18C995] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#18C995]" />
                    <span>PLANNED INITIATIVE · STAGE 0{activeRoadmapIndex + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-['Outfit']">
                    {ROADMAP_ITEMS[activeRoadmapIndex].title}
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed">
                    {ROADMAP_ITEMS[activeRoadmapIndex].description}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-[#18C995]/30 shadow-sm">
                    <div className="text-xs font-mono uppercase text-[#18C995] font-semibold mb-1">
                      Target Engineering Impact
                    </div>
                    <p className="text-sm text-[#0F172A] font-medium">
                      {ROADMAP_ITEMS[activeRoadmapIndex].potentialImpact}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="bg-white p-5 rounded-xl border border-[#3987FF]/20 space-y-4 shadow-sm">
                    <div>
                      <div className="text-xs font-mono uppercase text-[#0F172A] font-semibold mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#3987FF]" />
                        <span>Key Focus Areas</span>
                      </div>
                      <ul className="space-y-2">
                        {ROADMAP_ITEMS[activeRoadmapIndex].keyFocusAreas.map((area, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#18C995] mt-1.5 shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#3987FF]/15">
                      <div className="text-xs font-mono uppercase text-[#0F172A] font-semibold mb-2">
                        Planned Technology Stack
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        {ROADMAP_ITEMS[activeRoadmapIndex].plannedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#EAF2FF] border border-[#3987FF]/25 text-[#0F172A] font-medium"
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
