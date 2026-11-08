import React, { useState, useEffect } from 'react';
import {
  Calendar,
  GraduationCap,
  Code2,
  Cpu,
  Boxes,
  Sparkles,
  Rocket,
  Edit3,
  RotateCcw,
  Check,
  X,
} from 'lucide-react';
import { PROFESSIONAL_JOURNEY } from '../data/portfolioData';
import { JourneyMilestone } from '../types/portfolio';

export const JourneySection: React.FC = () => {
  const [journey, setJourney] = useState<JourneyMilestone[]>(() => {
    const saved = localStorage.getItem('rahab_portfolio_journey_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && !parsed[0].period.includes('2023')) {
          return parsed;
        }
      } catch {
        return PROFESSIONAL_JOURNEY;
      }
    }
    return PROFESSIONAL_JOURNEY;
  });

  const [editingMilestone, setEditingMilestone] = useState<{
    index: number;
    milestone: JourneyMilestone;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem('rahab_portfolio_journey_v2', JSON.stringify(journey));
  }, [journey]);

  const getMilestoneIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return GraduationCap;
      case 1:
        return Code2;
      case 2:
        return Cpu;
      case 3:
        return Sparkles;
      case 4:
        return Rocket;
      default:
        return Calendar;
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMilestone === null) return;
    const updated = [...journey];
    updated[editingMilestone.index] = editingMilestone.milestone;
    setJourney(updated);
    setEditingMilestone(null);
  };

  const handleResetJourney = () => {
    setJourney(PROFESSIONAL_JOURNEY);
    localStorage.removeItem('rahab_portfolio_journey');
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#101A30]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
              Academic &amp; Engineering Path
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
              My Professional Journey
            </h2>
            <p className="text-base text-[#A6B2C8] max-w-xl">
              A transparent, chronological record of education, programming milestones, and applied AI exploration.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleResetJourney}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#A6B2C8] hover:text-white bg-[#080D1A] border border-[#3987FF]/20 rounded-lg transition-colors"
              title="Reset dates to default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Timeline</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-[#18C995]/30 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {journey.map((item, idx) => {
            const Icon = getMilestoneIcon(idx);

            return (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Node on vertical line */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    item.active
                      ? 'bg-[#18C995] text-[#080D1A] border-white shadow-lg shadow-[#18C995]/30 scale-110'
                      : 'bg-[#101A30] text-[#3987FF] border-[#3987FF]/40 group-hover:border-[#18C995]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Date display (Desktop left-offset or inside card) */}
                <div className="md:absolute md:-left-36 md:top-2 text-xs sm:text-sm font-mono font-semibold text-[#18C995] mb-1.5 md:mb-0">
                  {item.period}
                </div>

                {/* Milestone Content Card */}
                <div className="glass-panel p-6 rounded-2xl border border-[#3987FF]/20 group-hover:border-[#18C995]/70 transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#18C995] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#3987FF] font-mono mt-0.5">
                        {item.institutionOrContext}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setEditingMilestone({ index: idx, milestone: { ...item } })}
                      className="p-1.5 rounded-lg text-[#A6B2C8] hover:text-[#35D9E8] hover:bg-[#080D1A] transition-colors"
                      title="Edit milestone date or text"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-sm text-[#A6B2C8] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[#3987FF]/15">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.focusHighlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs text-[#F4F7FF] bg-[#080D1A]/80 px-2.5 py-1 rounded-md border border-[#3987FF]/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Quick Editor Modal */}
        {editingMilestone && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setEditingMilestone(null)}
          >
            <form
              onSubmit={handleSaveEdit}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#101A30] border border-[#3987FF]/40 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#3987FF]/20 pb-3">
                <h4 className="text-base font-bold text-white font-['Outfit']">
                  Edit Journey Milestone
                </h4>
                <button
                  type="button"
                  onClick={() => setEditingMilestone(null)}
                  className="p-1 text-[#A6B2C8] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1">
                  Time Period / Date
                </label>
                <input
                  type="text"
                  value={editingMilestone.milestone.period}
                  onChange={(e) =>
                    setEditingMilestone({
                      ...editingMilestone,
                      milestone: { ...editingMilestone.milestone, period: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1">
                  Milestone Title
                </label>
                <input
                  type="text"
                  value={editingMilestone.milestone.title}
                  onChange={(e) =>
                    setEditingMilestone({
                      ...editingMilestone,
                      milestone: { ...editingMilestone.milestone, title: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingMilestone.milestone.description}
                  onChange={(e) =>
                    setEditingMilestone({
                      ...editingMilestone,
                      milestone: { ...editingMilestone.milestone, description: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8]"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingMilestone(null)}
                  className="px-4 py-2 text-xs text-[#A6B2C8] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#3987FF] hover:bg-[#4d94ff] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
