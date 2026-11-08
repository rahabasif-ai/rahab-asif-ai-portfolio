import React from 'react';
import { Brain, Code, Cpu, Sparkles, MessageSquare, Workflow, Globe, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const professionalInterests = [
    { title: 'Artificial Intelligence', icon: Brain, desc: 'Heuristic systems, reasoning algorithms, and autonomous agents.' },
    { title: 'Python Development', icon: Code, desc: 'Robust engineering, clean software architectures, and scalable APIs.' },
    { title: 'Machine Learning', icon: Cpu, desc: 'Predictive modeling, data transformations, and statistical pipelines.' },
    { title: 'Generative AI', icon: Sparkles, desc: 'Diffusion models, transformer architectures, and multimodal content.' },
    { title: 'Large Language Models', icon: MessageSquare, desc: 'Context grounding, prompt engineering, and structured outputs.' },
    { title: 'Intelligent Chatbots', icon: MessageSquare, desc: 'Conversational memory, intent routing, and domain knowledge bases.' },
    { title: 'AI Automation', icon: Workflow, desc: 'Event-driven automation, agentic workflows, and process intelligence.' },
    { title: 'Real-World Applications', icon: Globe, desc: 'Engineering practical products that solve tangible user problems.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#EAF2FF] via-[#F4F7FF] to-[#EAF2FF] text-[#0F172A] border-y border-[#3987FF]/15">
      {/* Subtle light background ambient glow */}
      <div
        className="absolute top-1/2 left-10 w-96 h-96 bg-[#18C995]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#3987FF]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
            Professional Identity
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] font-['Outfit']">
            Transforming Ideas into Intelligent Solutions Through Technology.
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Merging computer science rigor with practical machine learning to deliver tangible software solutions.
          </p>
        </div>

        {/* Core Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="light-panel p-8 rounded-2xl border border-[#3987FF]/20 space-y-5 shadow-sm">
              <p className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-relaxed">
                {PERSONAL_INFO.bioLead}
              </p>
              <p className="text-[#334155] leading-relaxed text-base">
                {PERSONAL_INFO.bioExtended}
              </p>
              <p className="text-[#334155] leading-relaxed text-base">
                My software engineering principles center on reliability, readability, and mathematical rigor. Whether formulating specialized prompt pipelines with Gemini models, structuring data schemas in Python, or training neural architectures, I value transparent systems designed for maintainability and direct user impact.
              </p>

              {/* Education Anchor Card */}
              <div className="pt-4 border-t border-[#3987FF]/15 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#3987FF]/15 to-[#18C995]/20 border border-[#18C995]/30 text-[#18C995] shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#18C995]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">
                    Bachelor of Science in Artificial Intelligence
                  </div>
                  <div className="text-xs text-[#18C995] font-mono font-semibold mt-0.5">
                    Academic Degree Program · Active (2025 – Present)
                  </div>
                  <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                    Developing core technical depth in mathematical foundations, discrete algorithm design, probability and statistics, neural computation, and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Focus Points */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-semibold mb-2 px-1">
              Core Technical Focus Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {professionalInterests.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={idx}
                    className="light-panel p-4 rounded-xl border border-[#3987FF]/15 hover:border-[#18C995] transition-all duration-200 group hover:-translate-y-0.5 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-4 h-4 text-[#3987FF] group-hover:text-[#18C995] transition-colors" />
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        {interest.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#475569] leading-snug">
                      {interest.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
