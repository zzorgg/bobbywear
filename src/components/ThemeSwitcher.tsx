import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';
import type { Theme } from '@/types';

const themes: Theme[] = [
  'corporate',
  'business',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'caramellatte',
  'abyss',
  'silk',
];

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme');
  return (stored as Theme) || 'cupcake';
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div className="flex items-center gap-2">
      <Palette className="w-4 h-4 text-base-content/70" />
      <select
        className="select select-bordered select-sm w-auto max-w-xs"
        value={theme}
        onChange={handleThemeChange}
        aria-label="Select theme"
        title="Select theme"
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}