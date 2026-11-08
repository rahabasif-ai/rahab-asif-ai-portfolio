import React, { useState } from 'react';
import {
  Terminal,
  Binary,
  Sparkles,
  Layers,
  GitBranch,
  Code,
  FileCode2,
  Layout,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { TECH_ECOSYSTEM } from '../data/portfolioData';

export const EcosystemSection: React.FC = () => {
  const [selectedToolIndex, setSelectedToolIndex] = useState<number>(0);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'Binary':
        return Binary;
      case 'Sparkles':
        return Sparkles;
      case 'Layers':
        return Layers;
      case 'GitBranch':
        return GitBranch;
      case 'Code':
        return Code;
      case 'FileCode2':
        return FileCode2;
      case 'Layout':
        return Layout;
      case 'Cloud':
        return Cloud;
      default:
        return Code;
    }
  };

  const activeTool = TECH_ECOSYSTEM[selectedToolIndex];
  const ActiveIcon = getToolIcon(activeTool.iconName);

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#35D9E8]">
            Tooling &amp; Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
            My Development Environment
          </h2>
          <p className="text-base sm:text-lg text-[#A6B2C8]">
            The integrated toolchain leveraged to research, experiment, prototype, build, manage, and deploy production-grade software.
          </p>
        </div>

        {/* 2-Column Split: Interactive Grid on Left + Deep Insight Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Grid: Tool Badges/Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TECH_ECOSYSTEM.map((tool, idx) => {
              const Icon = getToolIcon(tool.iconName);
              const isSelected = selectedToolIndex === idx;

              return (
                <button
                  key={tool.name}
                  type="button"
                  onClick={() => setSelectedToolIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#101A30] border-[#35D9E8] shadow-lg shadow-[#35D9E8]/20 -translate-y-0.5'
                      : 'bg-[#101A30]/50 border-[#3987FF]/20 hover:border-[#3987FF]/50 hover:bg-[#101A30]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#35D9E8] text-[#080D1A]'
                          : 'bg-[#080D1A] text-[#3987FF] border border-[#3987FF]/30 group-hover:text-[#35D9E8]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#A6B2C8]/60">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#35D9E8] transition-colors">
                      {tool.name}
                    </h3>
                    <div className="text-[11px] text-[#3987FF] font-mono truncate">
                      {tool.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Spotlight: Architectural Usage */}
          <div className="lg:col-span-5 flex">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#3987FF]/30 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#080D1A] border border-[#35D9E8]/40 flex items-center justify-center text-[#35D9E8]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#35D9E8]">
                      {activeTool.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-['Outfit']">
                      {activeTool.name}
                    </h3>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#080D1A] border border-[#3987FF]/20 text-xs font-mono text-[#F4F7FF]">
                  {activeTool.role}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#A6B2C8]">
                    Engineering Utilization &amp; Pipeline
                  </div>
                  <p className="text-sm text-[#A6B2C8] leading-relaxed">
                    {activeTool.description}
                  </p>
                </div>
              </div>

              {/* Development Workflow Philosophy */}
              <div className="pt-4 border-t border-[#3987FF]/20 space-y-2 text-xs text-[#A6B2C8]">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#35D9E8]" />
                  <span>Iterative Engineering Protocol</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Rapid mathematical formulation in Python, local execution in VS Code, prompt experimentation in Google AI Studio, structured versioning via Git/GitHub, and lightweight preview deployments via Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
