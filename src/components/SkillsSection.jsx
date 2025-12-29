import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  { name: "C++", category: "core" },
  { name: "Data Structures & Algorithms", category: "core" },
  { name: "Java", category: "core" },

  { name: "JavaScript", category: "tech" },
  { name: "React", category: "tech" },
  { name: "Tailwind CSS", category: "tech" },
  { name: "Node.js", category: "tech" },
  { name: "Express.js", category: "tech" },
  { name: "MongoDB", category: "tech" },
  { name: "Git & GitHub", category: "tech" },
];

const categories = ["core", "tech"];
const GRID_SIZE = 8;

const flipVariants = {
  initial: { rotateY: 80, opacity: 0 },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: {
    rotateY: -80,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  const visibleSkills = skills.filter(
    (s) => s.category === activeCategory
  );

  const paddedSkills = [
    ...visibleSkills,
    ...Array(GRID_SIZE - visibleSkills.length).fill(null),
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-black overflow-hidden scroll-mt-[90px]"
    >
      <div className="container mx-auto max-w-5xl px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center text-white">
          Technical <span className="text-indigo-400">Skills</span>
        </h2>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "px-6 py-2 min-w-[120px] rounded-full text-sm font-medium border transition",
                activeCategory === c
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-[0_0_18px_rgba(99,102,241,0.45)]"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
              )}
            >
              {c === "core" ? "Core CS" : "Tech Stack"}
            </button>
          ))}
        </div>

        {/* Stable Grid */}
        <div className="perspective-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {paddedSkills.map((skill, i) =>
                skill ? (
                  <div
                    key={skill.name}
                    className={cn(
                      "p-6 rounded-xl border text-center transition hover:-translate-y-2",
                      skill.category === "core"
                        ? "bg-indigo-500/10 border-indigo-400/40 shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                        : "bg-white/5 border-white/10 shadow-[0_0_18px_rgba(255,255,255,0.15)]"
                    )}
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                ) : (
                  <div key={i} className="opacity-0 pointer-events-none" />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};