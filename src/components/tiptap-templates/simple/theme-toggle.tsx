import { Button } from "@/components/ui/button";
import { MoonStarIcon, SunIcon } from "lucide-react";
import * as React from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  React.useEffect(() => {
    const initialDarkMode =
      !!document.querySelector('meta[name="color-scheme"][content="dark"]') ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(initialDarkMode);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((isDark) => !isDark);

  return (
    <Button
      onClick={toggleDarkMode}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      size={"icon"}
      variant={"ghost"}
    >
      {isDarkMode ? (
        <MoonStarIcon className="tiptap-button-icon" />
      ) : (
        <SunIcon className="tiptap-button-icon" />
      )}
    </Button>
  );
}
