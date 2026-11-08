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
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F4F7FF] via-[#EAF2FF] to-[#F4F7FF] text-[#0F172A] border-y border-[#3987FF]/15">
      {/* Subtle ambient light gradient */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#18C995]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#3987FF]/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
            Tooling &amp; Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] font-['Outfit']">
            My Development Environment
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
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
                      ? 'bg-white border-[#18C995] shadow-lg shadow-[#18C995]/20 -translate-y-0.5'
                      : 'bg-white/85 border-[#3987FF]/15 hover:border-[#18C995] hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#18C995] text-white shadow-md shadow-[#18C995]/30'
                          : 'bg-[#EAF2FF] text-[#3987FF] border border-[#3987FF]/25 group-hover:text-[#18C995]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#3987FF] transition-colors">
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
            <div className="light-panel p-6 sm:p-8 rounded-2xl border border-[#3987FF]/25 flex-1 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EAF2FF] to-white border border-[#18C995]/40 flex items-center justify-center text-[#18C995] shadow-sm">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#18C995] font-semibold">
                      {activeTool.category}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] font-['Outfit']">
                      {activeTool.name}
                    </h3>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50/80 border border-[#18C995]/30 text-xs font-mono text-[#0F172A]">
                  {activeTool.role}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#64748B] font-semibold">
                    Engineering Utilization &amp; Pipeline
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {activeTool.description}
                  </p>
                </div>
              </div>

              {/* Development Workflow Philosophy */}
              <div className="pt-4 border-t border-[#3987FF]/15 space-y-2 text-xs text-[#475569]">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#18C995]" />
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
