import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass text-xs font-medium text-indigo-300 mb-6">
          <Sparkles size={14} /> Available for opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-gradient">Zakya</span>
        </h1>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            A{" "}
            <span className="text-white border-b-2 border-primary">
              Frontend / MERN Developer
            </span>{" "}
            with a eye for clean design and efficient code.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono">
            <Terminal size={18} />
            <span>excited to gain experience and build amazing things.</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}>
          <NavLink
            to="/projects"
            className="bg-primary hover:bg-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-primary/25">
            View Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-8 py-3 rounded-lg font-semibold border border-white/10 glass hover:bg-white/5 transition-all">
            Get in Touch
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
