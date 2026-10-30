import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-[#dbe5f3] bg-[#172f58] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/70">
        <div>
          <span>© 2026 Syamsul Alam</span>
          <span className="mx-2 text-blue-200/40">•</span>
          <span>Designed &amp; built with React</span>
        </div>

        <button
          id="btn-back-to-top"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-blue-100/80 hover:text-white transition-colors cursor-pointer"
        >
          <span>top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
