import { motion } from "framer-motion";
import amberPhoto from "../assets/amber.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video (served from /public) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative container mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 px-4 py-1 rounded-full text-sm font-medium
                           bg-indigo-500/10 text-indigo-400">
            Preparing for Tech Interviews
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I’m{" "}
            <span className="text-indigo-400">Amber Shukla</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            B.Tech CSE student at SRM University. Focused on Data Structures,
            Algorithms, and building scalable web applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-indigo-600 text-white
                         font-medium hover:bg-indigo-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/20
                         text-white hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT — PHOTO (optional, still clean) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute w-96 h-96 rounded-full
                          bg-indigo-500/20 blur-[120px]" />

          <div className="relative rounded-full p-1
                          bg-gradient-to-br from-indigo-500 to-purple-500">
            <img
              src={amberPhoto}
              alt="Amber Shukla"
              className="rounded-full object-cover
                         w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                         border-4 border-black shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};