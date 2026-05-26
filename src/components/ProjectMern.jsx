import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ProjectorIcon } from "lucide-react";
import { g } from "framer-motion/client";
import ProjectNavbar from "./ProjectNavbar";

const projects = [
  {
    title: "workPilot-productManagementWebsite",
    desc: " Developed with MERN stack, Featuring Login,Sign up Access Responsive design",
    image: "/projmern.png",
    tags: ["MONGODB", "EXPRESS", "REACT", "NODE"],
    githublink:
      "https://github.com/zakyaSharmeen/workPilot-productManagementWebsite",
    link: "https://workpilot-productmanagementwebsite-1.onrender.com/",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative glass rounded-2xl overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-indigo-300">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.desc}
      </p>
      <div className="flex gap-4">
        <a
          href={project.githublink}
          target="_blank"
          className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a
          href={project.link}
          target="_blank"
          className="text-gray-400 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectMern = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
        <ProjectNavbar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectMern;
