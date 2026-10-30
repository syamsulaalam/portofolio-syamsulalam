import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const THEME_STORAGE_KEY = 'portfolio-theme';

export const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseLight = savedTheme === 'light';
    setIsLight(shouldUseLight);
    document.documentElement.classList.toggle('light', shouldUseLight);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.classList.toggle('light', nextIsLight);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextIsLight ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Aktifkan dark mode' : 'Aktifkan light mode'}
      title={isLight ? 'Aktifkan dark mode' : 'Aktifkan light mode'}
      className="theme-toggle fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22] text-emerald-400 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-[#1f242d] focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
};
