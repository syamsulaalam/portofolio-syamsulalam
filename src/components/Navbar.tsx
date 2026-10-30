import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import profileImage from '../assets/images/syamsulalamm.jpg';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0d11]/95 border-b border-[#1c2128] backdrop-blur-md py-3.5 shadow-sm'
          : 'bg-[#0b0d11]/80 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group text-sm font-semibold tracking-wider text-[#e6edf3] hover:text-white transition-colors"
        >
          <img
            src={profileImage}
            alt="Syamsul Alam"
            referrerPolicy="no-referrer"
            className="w-6 h-6 rounded-full object-cover border border-emerald-500/50"
          />
          <span className="font-mono text-xs tracking-widest text-[#8b949e] group-hover:text-emerald-400 transition-colors mr-0.5">
            ~/
          </span>
          <span className="tracking-wide">SYAMSUL ALAM</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-emerald-400 font-medium'
                    : 'text-[#8b949e] hover:text-[#e6edf3]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-dropdown"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] rounded border border-[#21262d] transition-colors"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden border-b border-[#1c2128] bg-[#0d1017] px-4 pt-3 pb-4 space-y-1 shadow-lg"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-[#161b22] font-medium'
                    : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
