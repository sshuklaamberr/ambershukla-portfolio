import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ── Skills Data ── */
const SKILLS = [
  // Core CS
  { name: "C++",                      category: "core",  level: 88, icon: "⚡", desc: "Primary language for DSA & competitive programming" },
  { name: "Java",                     category: "core",  level: 75, icon: "☕", desc: "OOP concepts, collections & backend fundamentals"    },
  { name: "Data Structures",          category: "core",  level: 85, icon: "🌲", desc: "Arrays, trees, graphs, heaps, tries & more"           },
  { name: "Algorithms",               category: "core",  level: 82, icon: "🧠", desc: "Sorting, searching, DP, greedy & graph algorithms"    },
  { name: "Problem Solving",          category: "core",  level: 84, icon: "🎯", desc: "500+ problems solved on LeetCode & GFG"               },
  { name: "System Design",            category: "core",  level: 60, icon: "🏗️", desc: "Fundamentals of scalable architecture & design"       },

  // Tech Stack
  { name: "React",                    category: "tech",  level: 85, icon: "⚛️", desc: "Hooks, context, performance optimization"             },
  { name: "JavaScript",               category: "tech",  level: 82, icon: "🟨", desc: "ES6+, async/await, DOM & modern patterns"             },
  { name: "Node.js",                  category: "tech",  level: 75, icon: "🟢", desc: "REST APIs, middleware & server-side logic"             },
  { name: "Tailwind CSS",             category: "tech",  level: 88, icon: "🎨", desc: "Utility-first styling, animations & responsive UI"    },
  { name: "MongoDB",                  category: "tech",  level: 70, icon: "🍃", desc: "Schema design, aggregation & CRUD operations"         },
  { name: "Git & GitHub",             category: "tech",  level: 80, icon: "🐙", desc: "Version control, branching & collaboration"           },
  { name: "Express.js",               category: "tech",  level: 72, icon: "🚀", desc: "Routing, middleware & RESTful architecture"           },
  { name: "Python",                   category: "tech",  level: 65, icon: "🐍", desc: "Scripting, automation & data handling"                },
];

const CATEGORIES = [
  { id: "core", label: "Core CS"     },
  { id: "tech", label: "Tech Stack"  },
];

/* ── Framer variants ── */
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const fadeUp   = {
  hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
             transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const cardAnim = {
  hidden:  { opacity: 0, scale: 0.9, y: 24 },
  visible: { opacity: 1, scale: 1,   y: 0,
             transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.85, y: -16,
             transition: { duration: 0.3,  ease: "easeIn" } },
};

/* ── Animated skill bar ── */
function SkillBar({ level, accent, inView }) {
  return (
    <div className="relative h-1 rounded-full overflow-hidden"
         style={{ background: "rgba(255,255,255,0.06)" }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: `linear-gradient(to right, ${accent}, ${accent}99)` }}
      />
    </div>
  );
}

/* ── Skill Card ── */
function SkillCard({ skill, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const accent = skill.category === "core" ? "#4f46e5" : "#f59e0b";
  const accentDim    = skill.category === "core" ? "rgba(79,70,229,0.1)"  : "rgba(245,158,11,0.1)";
  const accentBorder = skill.category === "core" ? "rgba(79,70,229,0.28)" : "rgba(245,158,11,0.28)";

  return (
    <motion.div
      ref={ref}
      variants={cardAnim}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
      style={{
        background: hovered ? accentDim : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? accentBorder : "rgba(255,255,255,0.06)"}`,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${accent}18 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ background: accentDim, border: `1px solid ${accentBorder}` }}
        >
          {skill.icon}
        </div>

        {/* Level badge */}
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full"
          style={{
            color: accent,
            background: accentDim,
            border: `1px solid ${accentBorder}`,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Name */}
      <div>
        <h3
          className="text-xl text-white leading-none tracking-wide mb-1"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {skill.name}
        </h3>
        <p
          className="text-xs text-gray-600 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {skill.desc}
        </p>
      </div>

      {/* Skill bar */}
      <SkillBar level={skill.level} accent={accent} inView={inView} />

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500 rounded-b-2xl"
        style={{
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(to right, ${accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

/* ── Main ── */
export const SkillsSection = () => {
  const [active, setActive]   = useState("core");
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const filtered = SKILLS.filter((s) => s.category === active);

  /* Overall stats */
  const avgLevel = Math.round(SKILLS.reduce((a, s) => a + s.level, 0) / SKILLS.length);

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden scroll-mt-[68px]"
      style={{ background: "#050508" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(70px)" }} />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* ── Header ── */}
        <motion.div
          ref={headRef}
          variants={stagger}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-xs tracking-[0.35em] text-amber-400 uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              My Arsenal
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.h2
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            >
              TECH<br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>SKILLS</span>
            </motion.h2>

            <motion.div variants={fadeUp}>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-6"
                 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                A curated set of tools I've sharpened through real projects,
                daily practice, and a genuine obsession with building things
                that actually work under pressure.
              </p>

              {/* Mini stat bar */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden"
                     style={{ background: "rgba(255,255,255,0.05)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={headInView ? { width: `${avgLevel}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(to right, #4f46e5, #f59e0b)" }}
                  />
                </div>
                <span className="text-xs text-gray-600 shrink-0"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  avg. {avgLevel}% proficiency
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="relative px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 overflow-hidden"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.12em",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.35)",
                  background: isActive
                    ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? "rgba(79,70,229,0.5)" : "rgba(255,255,255,0.06)"}`,
                  boxShadow: isActive ? "0 0 20px rgba(79,70,229,0.35)" : "none",
                }}
              >
                {cat.label}
                {/* Count bubble */}
                <span
                  className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {cat.id === "all"
                    ? SKILLS.length
                    : SKILLS.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}

          {/* Divider + total label */}
          <div className="ml-auto hidden sm:flex items-center gap-2">
            <span className="text-xs text-gray-700"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {filtered.length} skill{filtered.length !== 1 ? "s" : ""} shown
            </span>
          </div>
        </motion.div>

        {/* ── Skills grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { num: `${SKILLS.length}+`, label: "Technologies",   accent: "#4f46e5" },
            { num: "2+",               label: "Years in Stack",  accent: "#f59e0b" },
            { num: "100%",             label: "Self-Driven",     accent: "#06b6d4" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl px-8 py-6 flex items-center gap-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-4xl text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: item.accent }}
              >
                {item.num}
              </span>
              <span
                className="text-xs text-gray-600 tracking-widest uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};