import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import ThemeToggle from "../context/ThemeToggle";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md ${
        darkMode ? "bg-black text-white" : "bg-white/80 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#Contact" className="hover:text-cyan-400">Contact</a></li>

          <ThemeToggle/>
        </ul>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <ul className="flex flex-col gap-5 text-center">
            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;