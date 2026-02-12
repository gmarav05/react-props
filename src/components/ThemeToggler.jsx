import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggler() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Theme Toggle</h2>
      <p className="text-gray-600 mb-6">
        Using Context to share theme state across components.
      </p>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer"
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
      <p className="mt-4 text-gray-700">
        Current theme: <span className="font-bold">{isDark ? "Dark" : "Light"}</span>
      </p>
    </section>
  );
}

export default ThemeToggler;