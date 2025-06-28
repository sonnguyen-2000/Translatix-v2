import React, { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("theme-toggle");
    const root = document.documentElement;

    const applyTheme = (theme) => {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (prefersDark) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }

    const handleToggle = (event) => {
      toggleBtn.classList.add("toggled");
      setTimeout(() => toggleBtn.classList.remove("toggled"), 500);

      const newTheme =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";

      if (!document.startViewTransition) {
        applyTheme(newTheme);
        return;
      }

      const x = event.clientX || window.innerWidth / 2;
      const y = event.clientY || window.innerHeight / 2;

      document.startViewTransition(() => {
        applyTheme(newTheme);
      });
    };

    toggleBtn.addEventListener("click", handleToggle);

    return () => toggleBtn.removeEventListener("click", handleToggle);
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        id="theme-toggle"
        className="p-2 h-12 w-12 flex items-center justify-center rounded-full border border-slate-500/10 bg-slate-800/20 dark:bg-white/10 backdrop-blur-md text-xl cursor-pointer"
        aria-label="Toggle theme">
        <span id="theme-toggle-icon">🌓</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
