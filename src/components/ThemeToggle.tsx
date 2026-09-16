import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      id="global-theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center p-1 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#181818]/90 border-white/15 text-[#A8A49C] hover:border-white/25'
          : 'bg-[#FAF8F5]/90 border-[#D9D6CF] text-[#6F6D68] hover:border-[#B89A68]/50 shadow-2xs'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="flex items-center gap-0.5 relative z-10">
        {/* Sun indicator */}
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            !isDark
              ? 'bg-amber-100 text-amber-600 shadow-xs scale-105'
              : 'text-[#888888] hover:text-white opacity-70 hover:opacity-100'
          }`}
        >
          <Sun className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>

        {/* Moon indicator */}
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isDark
              ? 'bg-[#2a2a2a] text-amber-300 shadow-xs scale-105'
              : 'text-[#666666] hover:text-black opacity-70 hover:opacity-100'
          }`}
        >
          <Moon className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      </div>
    </button>
  );
};
