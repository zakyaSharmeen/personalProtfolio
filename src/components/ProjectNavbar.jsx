import React from "react";
import { NavLink } from "react-router-dom";

const ProjectNavbar = () => {
  return (
    <div className="flex  mt-6 ">
      <div
        className="backdrop-blur-md bg-white/10 dark:bg-white/5 
        border border-white/20 rounded-full px-2 py-2 
        flex gap-2 shadow-lg">
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            `px-5 py-2 rounded-full transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-300 hover:text-white"
            }`
          }>
          REACT
        </NavLink>

        <NavLink
          to="/mernproj"
          className={({ isActive }) =>
            `px-5 py-2 rounded-full transition ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-300 hover:text-white"
            }`
          }>
          MERN
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectNavbar;
