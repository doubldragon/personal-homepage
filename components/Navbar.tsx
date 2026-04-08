import { useState, useEffect } from "react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "";
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "";
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 bg-theme-surface">
      <div className="px-6 h-14 flex items-center justify-between">

        <span className="font-semibold text-theme-text">Brandon Spencer</span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-theme-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-theme-text transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="hover:text-theme-text transition-colors">
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3 text-theme-muted">
          <button onClick={toggleTheme} className="hover:text-theme-text transition-colors">
            {dark ? "Light" : "Dark"}
          </button>
          <button onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu"
                  className="hover:text-theme-text transition-colors">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-theme-surface px-6 py-4 flex flex-col gap-4 text-sm text-theme-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="hover:text-theme-text transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
