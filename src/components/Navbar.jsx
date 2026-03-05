import React, { useEffect, useState } from "react";
import { Linkedin, Github, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex flex-col items-center gap-3">
      <div className="w-full flex justify-between items-center">
        <NavLink to="/" className="logo">
          ZAKYA.
        </NavLink>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <a
            href="https://www.linkedin.com/in/zakya-sharmeen"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition">
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/zakyaSharmeen"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition">
            <Github size={20} />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-110 transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div
        className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20
  rounded-full px-2 py-2 flex gap-2 shadow-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2 rounded-full transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-300 hover:text-white"
            }`
          }>
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-5 py-2 rounded-full transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-300 hover:text-white"
            }`
          }>
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-5 py-2 rounded-full transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-300 hover:text-white"
            }`
          }>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
