import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        // positioning
        "fixed top-3 right-10 md:right-5 z-50",
        // shape & color
        "p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110",
        // animation & transitions
        "transition-all duration-300 ease-in-out",
        // focus for accessibility
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-indigo-700 transition-transform duration-300" />
      )}
    </button>
  );
};