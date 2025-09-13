import React, { useEffect } from "react";

const themes = [
    "corporate",
    "business",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];

function getInitialTheme() {
  return localStorage.getItem("theme") || "cupcake";
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <select
      className="select select-bordered select-sm w-auto"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      aria-label="Select theme"
      title="Select theme"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  );
}
