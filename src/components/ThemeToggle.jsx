import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-md border border-border hover:bg-secondary transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-muted" />
      ) : (
        <Sun className="w-5 h-5 text-muted" />
      )}
    </button>
  );
}
