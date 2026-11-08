import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Bot,
  HardHat,
  Sprout,
  Send,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  // Interactive Simulator States for the Modal
  const [simQuery, setSimQuery] = useState('');
  const [simResults, setSimResults] = useState<{
    type: string;
    content: any;
  } | null>(null);

  const filteredProjects =
    filter === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.status === filter);

  // Trigger interactive preview inside modal
  const handleRunSimulation = (project: Project, preset?: string) => {
    if (project.id === 'prepwise-ai') {
      const topic = preset || simQuery || 'Convolutional Neural Networks';
      setSimResults({
        type: 'prepwise',
        content: {
          topic,
          summary: `Executive Summary: ${topic} utilize localized kernel filters and pooling layers to achieve spatial translation invariance in computer vision.`,
          keyConcepts: [
            'Convolution kernel: Matrix filter sliding over input receptive field.',
            'Feature maps: Activation outputs capturing edges, textures, or shapes.',
            'Pooling: Dimensionality reduction preserving dominant invariant features.',
          ],
          generatedMCQ: {
            question: `In ${topic}, what is the primary role of a stride parameter?`,
            options: [
              'A) It determines the number of pixels the kernel slides per step.',
              'B) It initializes random weights in dense layers.',
              'C) It computes backpropagation loss gradients.',
              'D) It calculates softmax normalization across classes.',
            ],
            correct: 'A',
            explanation:
              'Stride dictates step size during spatial convolution across height and width.',
          },
        },
      });
    } else if (project.id === 'uniassist-chatbot') {
      const query = preset || simQuery || 'What are the admission requirements for the BS in AI?';
      setSimResults({
        type: 'uniassist',
        content: {
          query,
          reply:
            'The Bachelor of Science in Artificial Intelligence requires foundational proficiency in Mathematics (Calculus & Linear Algebra) and Computer Science basics. Applications require certified high school transcripts, statement of technical interest, and prerequisite entrance evaluations.',
          confidence: '98.4% Semantic Match',
          relevantDepartments: ['Department of Computing', 'Faculty of Artificial Intelligence', 'Admissions Office'],
        },
      });
    } else if (project.id === 'buildtrack-ai') {
      setSimResults({
        type: 'buildtrack',
        content: {
          projectPhase: 'Phase 2: Structural Framing & HVAC',
          budgetHealth: 'On Track (Variance -2.4%)',
          riskScore: 'Low Risk',
          aiInsight:
            'Material delivery log for high-tensile steel is 3 days ahead of schedule. Recommending shifting structural inspection milestone earlier to reduce crane rental costs.',
        },
      });
    } else if (project.id === 'agroflow-ai') {
      setSimResults({
        type: 'agroflow',
        content: {
          zone: 'Sector 4B - Winter Wheat',
          soilMoisture: '28% (Deficit threshold: 25%)',
          temperature: '22.4°C',
          recommendation:
            'Initiate 45-minute subsurface drip irrigation at 19:00 to minimize solar evaporation. Soil nitrogen levels optimal.',
        },
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080D1A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
              Portfolio Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
              Featured AI Engineering Projects
            </h2>
            <p className="text-base text-[#A6B2C8] max-w-xl">
              Concrete implementations and conceptual architectures demonstrating intelligent data processing, conversational agents, and predictive workflows.
            </p>
          </div>

          {/* Status Filter Tabs (Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101A30] border border-[#3987FF]/25 rounded-xl shrink-0">
            {['All', 'Completed', 'In Progress', 'Planned Exploration'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  filter === st
                    ? 'bg-gradient-to-r from-[#3987FF] to-[#18C995] text-white shadow-sm'
                    : 'text-[#A6B2C8] hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-[#3987FF]/20 hover:border-[#18C995]/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#18C995]/20"
            >
              {/* Media Container with Abstract High-Resolution Visual */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#080D1A]">
                <img
                  src={project.image}
                  alt={`${project.name} abstract visual representation`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101A30] via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Status indicator unboxed overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border ${project.statusColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 z-10">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#35D9E8]">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#35D9E8] transition-colors font-['Outfit']">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-[#A6B2C8] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features List */}
                  <div>
                    <div className="text-xs font-mono uppercase text-[#F4F7FF] mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#3987FF]" />
                      <span>Key Architectural Features</span>
                    </div>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#A6B2C8] leading-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18C995] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Unboxed Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#A6B2C8]">
                      {project.techStack.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-[#F4F7FF]">{tech}</span>
                          {i < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-[#3987FF]/40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Zone */}
                <div className="pt-6 border-t border-[#3987FF]/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-[#A6B2C8] hover:text-white bg-[#080D1A] rounded-lg border border-[#3987FF]/20 hover:border-[#3987FF] transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveDemoUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(project);
                          setSimResults(null);
                          handleRunSimulation(project);
                        }}
                        className="inline-flex items-center gap-1 text-xs text-[#18C995] hover:text-white transition-colors"
                        aria-label={`Open interactive preview for ${project.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Interactive Demo</span>
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(project);
                      setSimResults(null);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#3987FF] via-[#18C995] to-[#3987FF] hover:bg-[length:200%_auto] rounded-lg transition-all duration-300 shadow-md shadow-[#18C995]/20 hover:shadow-[#18C995]/40"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail & Architecture Deep Dive Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#101A30] border border-[#3987FF]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#3987FF]/30 my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-[#A6B2C8] hover:text-white bg-[#080D1A] rounded-lg border border-[#3987FF]/20 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#35D9E8]">
                    {selectedProject.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono border ${selectedProject.statusColor}`}
                  >
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                  {selectedProject.name}
                </h3>
                <p className="text-sm sm:text-base text-[#A6B2C8] leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Architecture Blueprint Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#080D1A]/70 border border-[#3987FF]/20 space-y-2">
                  <div className="text-xs font-mono uppercase text-[#35D9E8]">
                    Problem Statement
                  </div>
                  <p className="text-xs text-[#A6B2C8] leading-relaxed">
                    {selectedProject.architectureDetails.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#080D1A]/70 border border-[#3987FF]/20 space-y-2">
                  <div className="text-xs font-mono uppercase text-[#8957FF]">
                    AI &amp; Algorithmic Approach
                  </div>
                  <p className="text-xs text-[#A6B2C8] leading-relaxed">
                    {selectedProject.architectureDetails.aiApproach}
                  </p>
                </div>
              </div>

              {/* System Design & Data Pipeline */}
              <div className="p-4 rounded-xl bg-[#080D1A]/50 border border-[#3987FF]/15 space-y-3 mb-6">
                <div className="text-xs font-mono uppercase text-[#F4F7FF]">
                  Data Pipeline &amp; System Flow
                </div>
                <div className="text-xs font-mono text-[#35D9E8] bg-[#080D1A] p-2.5 rounded-lg border border-[#3987FF]/20 overflow-x-auto">
                  {selectedProject.architectureDetails.dataPipeline}
                </div>
                <div className="space-y-1 pt-1">
                  {selectedProject.architectureDetails.systemDesign.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#A6B2C8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Simulation / Live Preview Zone */}
              <div className="p-5 rounded-xl bg-[#080D1A] border border-[#3987FF]/30 space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#35D9E8]" />
                    <span className="text-sm font-bold text-white">
                      Interactive Feature Simulator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3987FF]">
                    Client-Side Interactive Sandbox
                  </span>
                </div>

                {selectedProject.id === 'prepwise-ai' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#A6B2C8]">
                      Select an academic topic to simulate instant question generation and summary extraction:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Neural Attention Mechanism',
                        'Gradient Descent & Loss Functions',
                        'Convolutional Neural Networks',
                      ].map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => handleRunSimulation(selectedProject, topic)}
                          className="px-3 py-1.5 rounded-lg text-xs bg-[#101A30] border border-[#3987FF]/30 hover:border-[#35D9E8] text-[#F4F7FF] transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>

                    {simResults?.type === 'prepwise' && (
                      <div className="mt-3 p-4 rounded-lg bg-[#101A30]/80 border border-[#35D9E8]/30 space-y-3 text-xs">
                        <div className="font-semibold text-[#35D9E8]">
                          {simResults.content.summary}
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono uppercase text-[#A6B2C8]">
                            Extracted Concept Highlights:
                          </div>
                          {simResults.content.keyConcepts.map((c: string, i: number) => (
                            <div key={i} className="text-[#A6B2C8]">
                              • {c}
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-[#3987FF]/20">
                          <div className="font-medium text-white mb-1.5">
                            Sample Generated Question:
                          </div>
                          <div className="font-medium text-[#F4F7FF] mb-2">
                            {simResults.content.generatedMCQ.question}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
                            {simResults.content.generatedMCQ.options.map((opt: string, i: number) => (
                              <div
                                key={i}
                                className={`p-1.5 rounded text-[11px] ${
                                  opt.startsWith('A)')
                                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-semibold'
                                    : 'bg-[#080D1A] text-[#A6B2C8]'
                                }`}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                          <div className="text-[11px] text-[#A6B2C8] italic">
                            Explanation: {simResults.content.generatedMCQ.explanation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject.id === 'uniassist-chatbot' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#A6B2C8]">
                      Simulate a conversational student query to test intent routing:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'What are the admission requirements for the BS in AI?',
                        'Where is the computing lab located?',
                        'When is course registration for the upcoming semester?',
                      ].map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => handleRunSimulation(selectedProject, prompt)}
                          className="px-3 py-1.5 rounded-lg text-xs bg-[#101A30] border border-[#3987FF]/30 hover:border-[#35D9E8] text-[#F4F7FF] transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>

                    {simResults?.type === 'uniassist' && (
                      <div className="mt-3 p-4 rounded-lg bg-[#101A30]/80 border border-[#3987FF]/30 space-y-2 text-xs">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#35D9E8]">
                          <span>Query: &quot;{simResults.content.query}&quot;</span>
                          <span>{simResults.content.confidence}</span>
                        </div>
                        <div className="text-white leading-relaxed bg-[#080D1A] p-3 rounded-lg border border-[#3987FF]/20">
                          {simResults.content.reply}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject.id === 'buildtrack-ai' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#A6B2C8]">
                      Synthesize construction site operational metrics:
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRunSimulation(selectedProject)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#3987FF] text-white hover:bg-[#4791ff] transition-colors"
                    >
                      Run Milestone Variance Diagnostic
                    </button>

                    {simResults?.type === 'buildtrack' && (
                      <div className="mt-3 p-4 rounded-lg bg-[#101A30]/80 border border-[#35D9E8]/30 space-y-2 text-xs">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded bg-[#080D1A] border border-[#3987FF]/20">
                            <div className="text-[10px] text-[#A6B2C8]">Phase</div>
                            <div className="font-semibold text-white">Phase 2</div>
                          </div>
                          <div className="p-2 rounded bg-[#080D1A] border border-[#3987FF]/20">
                            <div className="text-[10px] text-[#A6B2C8]">Budget Health</div>
                            <div className="font-semibold text-emerald-400">-2.4% Var</div>
                          </div>
                          <div className="p-2 rounded bg-[#080D1A] border border-[#3987FF]/20">
                            <div className="text-[10px] text-[#A6B2C8]">Risk Status</div>
                            <div className="font-semibold text-[#35D9E8]">Low Risk</div>
                          </div>
                        </div>
                        <p className="text-[#A6B2C8] leading-relaxed pt-2">
                          {simResults.content.aiInsight}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject.id === 'agroflow-ai' && (
                  <div className="space-y-3">
                    <p className="text-xs text-[#A6B2C8]">
                      Simulate precision soil and microclimate telemetry:
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRunSimulation(selectedProject)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#8957FF] text-white hover:bg-[#9b6eff] transition-colors"
                    >
                      Process Soil Telemetry Vector
                    </button>

                    {simResults?.type === 'agroflow' && (
                      <div className="mt-3 p-4 rounded-lg bg-[#101A30]/80 border border-[#8957FF]/30 space-y-2 text-xs">
                        <div className="flex justify-between items-center text-[#35D9E8] font-mono">
                          <span>{simResults.content.zone}</span>
                          <span>Moisture: {simResults.content.soilMoisture}</span>
                        </div>
                        <p className="text-[#A6B2C8] bg-[#080D1A] p-2.5 rounded border border-[#3987FF]/20">
                          {simResults.content.recommendation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3987FF]/20">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#080D1A] hover:bg-[#152342] border border-[#3987FF]/30 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#3987FF] hover:bg-[#4d94ff] rounded-lg transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
