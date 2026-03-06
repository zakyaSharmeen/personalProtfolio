import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { g } from "framer-motion/client";

const projects = [
  {
    title: "Shopping Website",
    desc: " Developed with React and CSS, integrated Formspree for contact forms and Redux Toolkit for state management. Responsive design",
    image: "/img1-shopping.png",
    tags: ["React", "Redux Toolkit", "Formspree"],
    githublink: "https://github.com/zakyaSharmeen/react-e-commerce-website",
    link: "https://react-e-commerce-website-final.vercel.app/",
  },
  {
    title: "AI Assistant Website",
    desc: "AI chatbot built using  API key via OpenRouter integration. Responsive design.",
    image: "/img2-bot.png",
    tags: ["React", "OpenRouter API key"],
    githublink: "https://github.com/zakyaSharmeen/react-ai-assistant",
    link: "https://react-ai-assistant-856p.vercel.app/",
  },
  {
    title: "Food Ordering Website",
    desc: "Built using React, TailwindCSS, and Redux Toolkit for state management. Responsive design.",
    image: "/img3-rtk-food.png",
    tags: ["React", "TailwindCSS", "Redux Toolkit"],
    githublink:
      "https://github.com/zakyaSharmeen/reactPracticalDay-9-redux-toolkit",
    link: "https://react-practical-day-9-redux-toolkit.vercel.app/",
  },
  {
    title: "Authentication System",
    desc: "Login and signup interface built with React and TailwindCSS. Responsive design.",
    image: "/img4-login.png",
    tags: ["React", "TailwindCSS"],
    githublink:
      "https://github.com/zakyaSharmeen/reactPracticalDay-10-Authentication-login-signup-",
    link: "https://react-practical-authentication-logi.vercel.app/",
  },
  {
    title: "Form Validation Website",
    desc: "Form validation project implemented using React and TailwindCSS. Responsive design.",
    image: "/img5-validation.png",
    tags: ["React", "TailwindCSS"],
    githublink:
      "https://github.com/zakyaSharmeen/reactPracticalDay-7-FormValidation",
    link: "https://react-practical-form-validation.vercel.app/",
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

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
