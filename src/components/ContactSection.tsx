import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ArrowUp,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden bg-[#080D1A] border-t border-[#3987FF]/20">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#3987FF]/10 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#18C995] font-semibold">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Outfit']">
            Let&apos;s Connect and Build Something Intelligent.
          </h2>
          <p className="text-base sm:text-lg text-[#A6B2C8]">
            Open for technical dialogue, research collaborations, engineering initiatives, and exploring high-impact AI opportunities.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Connections */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-[#3987FF]/25 space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Professional Channels
              </h3>
              <p className="text-sm text-[#A6B2C8] leading-relaxed">
                Feel free to reach out directly via email or connect with me on GitHub and LinkedIn to follow my ongoing AI exploration and project updates.
              </p>

              {/* Direct Links */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#101A30]/80 border border-[#3987FF]/25 flex items-center justify-between gap-3 group hover:border-[#18C995]/60 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-[#080D1A] text-[#18C995] border border-[#18C995]/30 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono uppercase text-[#A6B2C8]">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.socials.email}`}
                        className="text-sm font-medium text-white hover:text-[#35D9E8] transition-colors truncate block"
                      >
                        {PERSONAL_INFO.socials.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-[#A6B2C8] hover:text-white hover:bg-[#080D1A] transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#101A30]/80 border border-[#3987FF]/25 flex items-center justify-between gap-3 hover:border-[#35D9E8]/40 transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#080D1A] text-[#3987FF] border border-[#3987FF]/20 group-hover:text-[#35D9E8] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#A6B2C8]">Professional Network</div>
                      <div className="text-sm font-medium text-white group-hover:text-[#35D9E8] transition-colors">
                        LinkedIn Profile
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#3987FF] group-hover:text-white font-mono transition-colors">
                    Connect →
                  </span>
                </a>

                {/* GitHub Item */}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#101A30]/80 border border-[#3987FF]/25 flex items-center justify-between gap-3 hover:border-[#35D9E8]/40 transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#080D1A] text-[#8957FF] border border-[#3987FF]/20 group-hover:text-[#35D9E8] transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#A6B2C8]">Code Repositories</div>
                      <div className="text-sm font-medium text-white group-hover:text-[#35D9E8] transition-colors">
                        GitHub Profile
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#8957FF] group-hover:text-white font-mono transition-colors">
                    Explore →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-[#3987FF]/25">
              <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B2C8] mb-6">
                Fill in the form below to initiate a conversation or inquire about technical collaborations.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-white">
                    Message Dispatched Successfully
                  </div>
                  <p className="text-xs text-[#A6B2C8]">
                    Thank you for reaching out! I will review your message and respond promptly at your provided email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8] transition-colors placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8] transition-colors placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Inquiring about AI Engineering Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8] transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A6B2C8] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your goals, project details, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#3987FF]/30 text-white text-sm focus:outline-none focus:border-[#35D9E8] transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#3987FF] via-[#18C995] to-[#3987FF] hover:bg-[length:200%_auto] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#18C995]/25 hover:shadow-[#18C995]/45 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Clean Footer Bar */}
        <div className="pt-8 border-t border-[#3987FF]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6B2C8]">
          <div className="flex items-center gap-2 text-sm text-[#F4F7FF] font-['Outfit'] font-medium">
            <span>Rahab Asif</span>
            <span className="text-[#3987FF]" aria-hidden="true">|</span>
            <span className="text-[#35D9E8]">AI Engineer</span>
            <span className="text-[#3987FF]" aria-hidden="true">|</span>
            <span className="text-[#A6B2C8]">AI Innovator</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#35D9E8] hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
