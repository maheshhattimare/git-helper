import { GitBranch } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ theme, onToggleTheme }) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <GitBranch className="w-6 h-6 text-foreground" />
            <h1 className="text-xl font-semibold text-foreground">
              Git Helper
            </h1>
          </div>
          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted hover:text-foreground hover:bg-secondary/50"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/learn"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted hover:text-foreground hover:bg-secondary/50"
                }`
              }
            >
              Learn Git
            </NavLink>
          </nav>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
