import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data ── */
const BLOCKS = [
  {
    label: "01",
    title: "Core CS",
    description: "Building a rock-solid foundation in computer science fundamentals and algorithmic thinking.",
    tags: ["C++", "Java", "Data Structures", "Algorithms", "OOP"],
    accent: "#4f46e5",
  },
  {
    label: "02",
    title: "Development",
    description: "Translating ideas into fast, scalable, and visually refined full-stack web applications.",
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB", "REST APIs"],
    accent: "#f59e0b",
  },
  {
    label: "03",
    title: "Preparation",
    description: "Disciplined, interview-oriented learning with a focus on clean code and real-world readiness.",
    tags: ["LeetCode", "Git & GitHub", "System Design", "Clean Code"],
    accent: "#06b6d4",
  },
];

const TRAITS = [
  { value: "300+", label: "Problems Solved" },
  { value: "5+",  label: "Projects Built"  },
  { value: "2",    label: "Years Coding"    },
  { value: "∞",    label: "Curiosity"       },
];

/* ── Stagger container ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Block card ── */
function BlockCard({ block, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-7 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 40%, ${block.accent}14 0%, transparent 70%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: block.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {block.label}
        </span>
        {/* Animated corner accent */}
        <div
          className="w-6 h-6 rounded-full opacity-30 group-hover:opacity-80 transition-all duration-500 group-hover:scale-125"
          style={{ background: block.accent }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-3xl text-white mb-3 leading-none tracking-wider"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {block.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-gray-500 leading-relaxed mb-5"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {block.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {block.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: block.accent,
              borderColor: `${block.accent}30`,
              background: `${block.accent}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom border reveal on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, ${block.accent}, transparent)` }}
      />
    </motion.div>
  );
}

/* ── Main ── */
export const AboutSection = () => {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const traitRef   = useRef(null);
  const traitView  = useInView(traitRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden scroll-mt-[68px]"
      style={{ background: "#050508" }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* ── Section label ── */}
        <motion.div
          ref={headRef}
          variants={stagger}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span
              className="text-xs tracking-[0.35em] text-amber-400 uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Who I Am
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.h2
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            >
              ABOUT<br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>ME</span>
            </motion.h2>

            <motion.div variants={fadeUp}>
              <p
                className="text-gray-400 leading-relaxed text-sm max-w-lg mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                I'm <span className="text-white font-medium">Amber Shukla</span>, a B.Tech CSE student
                at SRM University obsessed with building things that are both technically
                sound and beautifully crafted. I approach every problem with curiosity,
                discipline, and a drive to ship real, working products.
              </p>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(79,70,229,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white"
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Open to Internships
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >→</motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          ref={traitRef}
          initial={{ opacity: 0, y: 24 }}
          animate={traitView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0 }}
              animate={traitView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="group flex flex-col items-center justify-center py-8 px-4 relative"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(79,70,229,0.08) 0%, transparent 70%)" }}
              />
              <span
                className="text-4xl lg:text-5xl text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              >
                {t.value}
              </span>
              <span
                className="text-xs text-gray-600 tracking-widest uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── 3-column block cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BLOCKS.map((block, i) => (
            <BlockCard key={block.title} block={block} index={i} />
          ))}
        </div>

        {/* ── Bottom quote bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-2xl px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-xl sm:text-2xl text-white/70 italic"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            "GREAT CODE IS WRITTEN TWICE — ONCE FOR THE MACHINE, ONCE FOR THE READER."
          </p>
          <a
            href="/resume.pdf"
            download
            className="shrink-0 text-xs px-5 py-2.5 rounded-full border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.15em" }}
          >
            DOWNLOAD CV ↓
          </a>
        </motion.div>

      </div>
    </section>
  );
};