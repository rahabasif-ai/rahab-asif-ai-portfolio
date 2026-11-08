import React, { useState, useEffect } from 'react';
import {
  Code,
  Cpu,
  Globe,
  Wrench,
  Sliders,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';
import { INITIAL_SKILLS } from '../data/portfolioData';
import { Skill, SkillCategory } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(() => {
    const saved = localStorage.getItem('rahab_portfolio_skills');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_SKILLS;
      }
    }
    return INITIAL_SKILLS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedSkillToEdit, setSelectedSkillToEdit] = useState<Skill | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('rahab_portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  const categories: { label: string; value: string; icon: React.ElementType }[] = [
    { label: 'All Disciplines', value: 'All', icon: Sparkles },
    { label: 'Programming', value: 'Programming', icon: Code },
    { label: 'AI & Machine Learning', value: 'AI and Machine Learning', icon: Cpu },
    { label: 'Web Development', value: 'Web Development', icon: Globe },
    { label: 'Developer Tools', value: 'Developer Tools', icon: Wrench },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === (activeCategory as SkillCategory));

  const handleUpdateLevel = (skillName: string, newLevel: number) => {
    setSkills((prev) =>
      prev.map((s) => (s.name === skillName ? { ...s, level: newLevel } : s))
    );
    if (selectedSkillToEdit && selectedSkillToEdit.name === skillName) {
      setSelectedSkillToEdit((prev) => (prev ? { ...prev, level: newLevel } : null));
    }
  };

  const handleResetSkills = () => {
    setSkills(INITIAL_SKILLS);
    localStorage.removeItem('rahab_portfolio_skills');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden text-[#F4F7FF]">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/3 right-10 w-80 h-80 bg-[#18C995]/8 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#3987FF]/8 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F7FF] font-['Outfit']">
              Technical Skills &amp; Abilities
            </h2>
            <p className="text-base text-[#A6B2C8] max-w-xl">
              An organized inventory of programming languages, machine learning frameworks, web technologies, and developer tooling.
            </p>
          </div>

          {/* Quick Edit Mode Toggle button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                isEditing
                  ? 'bg-[#18C995]/20 border-[#18C995] text-[#18C995] shadow-md shadow-[#18C995]/20'
                  : 'bg-[#101A30] border-[#3987FF]/30 text-[#F4F7FF] hover:border-[#18C995] shadow-sm'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#18C995]" />
              <span>{isEditing ? 'Done Customizing' : 'Customize Skill Levels'}</span>
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={handleResetSkills}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium bg-[#101A30] border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors shadow-sm"
                title="Reset to default levels"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            {saveSuccess && (
              <span className="text-xs text-[#18C995] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Reset
              </span>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Segmented Control) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#101A30]/90 border border-[#3987FF]/20 rounded-xl overflow-x-auto mb-10 max-w-full shadow-sm">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#3987FF] to-[#18C995] text-white shadow-md'
                    : 'text-[#A6B2C8] hover:text-white hover:bg-[#1b2848]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`glass-panel p-5 rounded-xl border transition-all duration-200 group ${
                isEditing
                  ? 'border-[#18C995]/70 hover:border-[#18C995]'
                  : 'border-[#3987FF]/15 hover:border-[#18C995] hover:shadow-lg hover:shadow-[#18C995]/10'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-base font-bold text-[#F4F7FF] group-hover:text-[#3987FF] transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-[#3987FF] font-mono mt-0.5">
                    {skill.category}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-bold font-mono text-[#F4F7FF] tabular-nums">
                    {skill.level}%
                  </span>
                  <div className="text-[10px] uppercase font-mono text-[#A6B2C8]/70">
                    {skill.familiarity}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#A6B2C8] mb-4 leading-relaxed line-clamp-2">
                {skill.description}
              </p>

              {/* Progress-style visual indicator */}
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-[#080D1A] rounded-full overflow-hidden p-0.5 border border-[#3987FF]/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#3987FF] via-[#18C995] to-[#35D9E8] transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Inline Slider when in editing mode */}
                {isEditing && (
                  <div className="pt-2 flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#A6B2C8]">Adjust:</span>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleUpdateLevel(skill.name, parseInt(e.target.value, 10))}
                      className="w-full h-1.5 bg-[#080D1A] rounded-lg appearance-none cursor-pointer accent-[#18C995]"
                    />
                    <span className="text-xs font-mono text-[#18C995] font-bold w-8 text-right">
                      {skill.level}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-[#A6B2C8]/70 font-mono">
          Skill levels represent calibrated self-assessments across academic coursework and practical project builds.
        </div>
      </div>
    </section>
  );
};
