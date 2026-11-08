import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'AI Focus', href: '#ai-exploration', id: 'ai-exploration' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080D1A]/85 backdrop-blur-md border-b border-[#3987FF]/15 py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] rounded-md px-1 py-0.5"
            aria-label="Rahab Asif - Back to top"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#35D9E8] shadow-[0_0_10px_#35D9E8] transition-transform duration-300 group-hover:scale-125" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-[#F4F7FF] font-['Outfit'] group-hover:text-white transition-colors">
              Rahab Asif
            </span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A6B2C8]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#F4F7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] rounded ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3987FF] via-[#35D9E8] to-[#8957FF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#3987FF] to-[#8957FF] hover:from-[#4a93ff] hover:to-[#996aff] rounded-lg transition-all duration-200 shadow-md shadow-[#3987FF]/20 hover:shadow-[#3987FF]/35 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D9E8]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A6B2C8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] rounded-lg bg-[#101A30]/60 border border-[#3987FF]/20"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase tracking-wider text-[#A6B2C8]/70 px-4 mb-2 font-mono">
              Portfolio Directory
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#3987FF]/15 text-white font-semibold border border-[#3987FF]/30'
                    : 'text-[#A6B2C8] hover:text-white hover:bg-[#101A30]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#3987FF]/20">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3987FF] to-[#8957FF] rounded-xl shadow-lg"
            >
              <span>Contact Rahab Asif</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#A6B2C8] hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#A6B2C8] hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="text-[#A6B2C8] hover:text-white transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
