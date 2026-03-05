import React from "react";
import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleDownload = () => {
    const cvUrl = "/zakyaProtfolio.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Zakya_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's Connect</h2>

        <p className="text-gray-400 text-lg mb-12">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Formspree Form */}
        <form
          action="https://formspree.io/f/xaqpwpov"
          method="POST"
          className="flex flex-col items-center gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-[500px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full md:w-[500px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full md:w-[500px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"></textarea>

          <input type="hidden" name="_subject" value="New Portfolio Message" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-primary hover:bg-indigo-600 px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 transition-all w-full md:w-auto">
              <Mail size={20} />
              Send Message
            </motion.button>

            <motion.button
              type="button"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold border border-white/10 glass hover:bg-white/5 transition-all w-full md:w-auto">
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="mt-16 flex gap-8 justify-center items-center">
          <a
            href="https://github.com/zakyaSharmeen"
            className="text-gray-500 hover:text-white transition-colors"
            target="_blank">
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/zakya-sharmeen"
            className="text-gray-500 hover:text-white transition-colors"
            target="_blank">
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>

      <footer className="mt-32 text-gray-600 text-sm">
        © 2026 Designed & Built by Zakya
      </footer>
    </section>
  );
};

export default Contact;
