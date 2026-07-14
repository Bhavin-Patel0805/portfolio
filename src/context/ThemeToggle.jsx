import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-all duration-500 ${
        darkMode ? "bg-slate-800" : "bg-sky-400"
      }`}
    >
      {/* Stars */}
      {darkMode && (
        <>
          <span className="absolute top-1 left-2 text-white text-xs">✦</span>
          <span className="absolute top-4 left-4 text-[8px] text-white">
            ✦
          </span>
          <span className="absolute top-2 left-7 text-[10px] text-white">
            ✦
          </span>
        </>
      )}

      {/* Circle */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
          darkMode
            ? "translate-x-8 bg-white"
            : "translate-x-1 bg-yellow-300"
        }`}
      >
        {darkMode ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default ThemeToggle;