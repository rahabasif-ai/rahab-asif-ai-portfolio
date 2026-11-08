import React, { useState } from 'react';
import {
  Brain,
  Cpu,
  Sparkles,
  MessageSquareCode,
  Binary,
  Eye,
  Bot,
  Workflow,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { AI_EXPLORATION_AREAS } from '../data/portfolioData';
import { AIExplorationItem } from '../types/portfolio';

export const AIExplorationSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<AIExplorationItem | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Cpu':
        return Cpu;
      case 'Sparkles':
        return Sparkles;
      case 'MessageSquareCode':
        return MessageSquareCode;
      case 'Binary':
        return Binary;
      case 'Eye':
        return Eye;
      case 'Bot':
        return Bot;
      case 'Workflow':
        return Workflow;
      default:
        return Brain;
    }
  };

  return (
    <section id="ai-exploration" className="py-24 relative overflow-hidden bg-[#101A30]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35D9E8]">
            Domains of Competency
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
            Exploring the World of Artificial Intelligence
          </h2>
          <p className="text-base sm:text-lg text-[#A6B2C8]">
            Deep technical curiosity across key paradigms—from foundational machine learning to autonomous multi-step agents.
          </p>
        </div>

        {/* 8 Specialized AI Exploration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_EXPLORATION_AREAS.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedArea(item)}
                className="group relative glass-panel p-6 rounded-2xl border border-[#3987FF]/20 hover:border-[#35D9E8]/45 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3987FF]/15 cursor-pointer flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedArea(item);
                  }
                }}
                aria-label={`Explore details for ${item.title}`}
              >
                {/* Glow accent in top corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3987FF]/15 via-transparent to-transparent rounded-tr-2xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#101A30] border border-[#3987FF]/30 flex items-center justify-center text-[#35D9E8] group-hover:scale-110 transition-transform duration-300 shadow-md shadow-black/40">
                      <IconComponent className="w-6 h-6 text-[#35D9E8]" />
                    </div>
                    <span className="text-xs font-mono text-[#A6B2C8]/50">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#35D9E8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#3987FF] mt-1 font-mono">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A6B2C8] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#3987FF]/15 flex items-center justify-between text-xs text-[#35D9E8] font-medium group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep-Dive Interactive Modal */}
        {selectedArea && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedArea(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-[#101A30] border border-[#3987FF]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#3987FF]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="absolute top-5 right-5 p-2 text-[#A6B2C8] hover:text-white bg-[#080D1A] rounded-lg border border-[#3987FF]/20 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#080D1A] border border-[#3987FF]/40 flex items-center justify-center text-[#35D9E8] shrink-0">
                  {React.createElement(getIcon(selectedArea.icon), { className: 'w-7 h-7' })}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#35D9E8]">
                    AI Engineering Focus
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedArea.title}
                  </h3>
                  <div className="text-sm text-[#3987FF] font-medium">
                    {selectedArea.tagline}
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-sm text-[#A6B2C8] leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Core Technical Overview
                  </h4>
                  <p className="bg-[#080D1A]/60 p-4 rounded-xl border border-[#3987FF]/15">
                    {selectedArea.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Applied Engineering Implementations
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedArea.practicalApplications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#080D1A]/40 border border-[#3987FF]/10 text-xs sm:text-sm text-[#F4F7FF]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#35D9E8] shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#3987FF]/20 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#3987FF] hover:bg-[#4d94ff] rounded-lg transition-colors"
                >
                  Close Exploration
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
