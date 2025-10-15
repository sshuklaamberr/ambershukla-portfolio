import { motion, AnimatePresence } from "framer-motion";
import amberPhoto from "../assets/amber.jpeg"; // ✅ Make sure image exists
import { useState, useEffect } from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden"
    >
      {/* Left Side - Animated Photo with Glow */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex justify-center md:justify-end w-full md:w-5/12 mb-8 md:mb-0 md:mr-8"
      >
        {/* Glowing Gradient Aura */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/40 to-indigo-400/30 blur-3xl" />
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-xl"
          animate={{
            rotate: [0, 1, -1, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={amberPhoto}
            alt="Amber Shukla"
            className="rounded-full shadow-2xl border-4 border-indigo-400 object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Text and Role Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center md:text-left w-full md:w-7/12 space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Hi, I’m{" "}
          <span className="text-indigo-500 dark:text-indigo-400">
            Amber Shukla
          </span>
        </h1>

        {/* Smooth Role Fade Animation */}
        <div className="h-8 md:h-10 overflow-hidden flex items-center justify-center md:justify-start">
          <AnimatedRole />
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          B.Tech CSE student @ SRM University | React & Tailwind enthusiast <br />
          DSA lover, building clean, scalable, and efficient web apps
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="cosmic-button px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-100 transition-all duration-300"
          >
            Contact Me
          </motion.a>

          <motion.a
            href="/path-to-your-resume.pdf" // <-- replace with your resume link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-100 transition-all duration-300"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

/* 🔁 Animated Role Text (Smooth Fade + Slide) */
const AnimatedRole = () => {
  const roles = ["Software Developer", "Web Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-2xl md:text-3xl font-semibold text-indigo-500 dark:text-indigo-300"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
};