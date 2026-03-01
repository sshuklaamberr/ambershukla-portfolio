import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Platform data ── */
const PLATFORMS = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "@shukl_amber_",
    href: "https://leetcode.com/",
    accent: "#f59e0b",
    accentDim: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.25)",
    description:
      "Daily grinding on algorithm patterns — arrays, hashing, recursion, trees, graphs, and dynamic programming. Every problem is an investment in sharper thinking.",
    stats: [
      { value: "300+", label: "Problems Solved" },
      { value: "Top 15%", label: "Global Rank"  },
      { value: "90+",   label: "Day Streak"      },
    ],
    tags: ["Arrays", "DP", "Graphs", "Trees", "Sliding Window", "Binary Search"],
    media: "/social/leetcode.mp4",
    useVideo: true,
  },
  {
    id: "gfg",
    name: "GeeksforGeeks",
    handle: "@sshuklaamberr",
    href: "https://www.geeksforgeeks.org/",
    accent: "#22c55e",
    accentDim: "rgba(34,197,94,0.08)",
    accentBorder: "rgba(34,197,94,0.25)",
    description:
      "Concept-first learning — topic-wise revision, theoretical CS foundations, and structured reading to understand the 'why' behind every data structure and algorithm.",
    stats: [
      { value: "200+", label: "Articles Read" },
      { value: "150+", label: "Problems Done" },
      { value: "4★",   label: "Coding Score"  },
    ],
    tags: ["OS", "DBMS", "CN", "OOP", "System Design", "Interview Prep"],
    media: "/social/gfg.jpg",
    useVideo: false,
  },
];

const FOCUS_AREAS = [
  { label: "Patterns",     desc: "Two pointers, sliding window, divide & conquer" },
  { label: "Optimization", desc: "Time–space trade-offs & memoization"            },
  { label: "Consistency",  desc: "Daily practice, tracked streaks, mock contests"  },
  { label: "Fundamentals", desc: "Theory-first before jumping to code"             },
];

/* ── Framer variants ── */
const fadeUp = {
  hidden:  { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
             transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

/* ── Platform Card ── */
function PlatformCard({ p, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? p.accentBorder : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.4s ease",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${p.accent}18 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-[3px] w-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${p.accent}, transparent)`,
          opacity: hovered ? 1 : 0.35,
        }}
      />

      <div className="relative p-8 flex flex-col flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">

            {/* Icon — fixed to fill container properly */}
            <div
              className="w-14 h-14 rounded-xl overflow-hidden shrink-0"
              style={{ background: p.accentDim, border: `1px solid ${p.accentBorder}` }}
            >
              {p.useVideo ? (
                <video
                  src={p.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={p.media}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Name + handle */}
            <div>
              <h3
                className="text-2xl text-white leading-none tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {p.name}
              </h3>
              <span
                className="text-xs mt-0.5 block"
                style={{ color: p.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {p.handle}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <motion.span
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className="text-xl mt-1"
            style={{ color: p.accent }}
          >
            →
          </motion.span>
        </div>

        {/* Description */}
        <p
          className="text-sm text-gray-500 leading-relaxed mb-7"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {p.description}
        </p>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-px rounded-xl overflow-hidden mb-7"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {p.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-4 px-2"
                 style={{ background: "rgba(5,5,8,0.6)" }}>
              <span
                className="text-2xl text-white leading-none mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: p.accent }}
              >
                {s.value}
              </span>
              <span
                className="text-[10px] text-gray-600 tracking-wider text-center uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: p.accent,
                background: p.accentDim,
                border: `1px solid ${p.accentBorder}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div
        className="h-px transition-all duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${p.accent}, transparent)`,
          opacity: hovered ? 0.6 : 0,
        }}
      />
    </motion.a>
  );
}

/* ── Focus area pill ── */
function FocusPill({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-xl px-6 py-5 flex items-start gap-4"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 group-hover:scale-150 transition-transform duration-300" />
      <div>
        <p
          className="text-sm text-white font-medium mb-1"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {item.label}
        </p>
        <p
          className="text-xs text-gray-600 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export const PracticeShowcase = () => {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="practice"
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
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)", filter: "blur(70px)" }} />

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
            <span
              className="text-xs tracking-[0.35em] text-amber-400 uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Daily Practice
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.h2
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            >
              DSA<br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>GRIND</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 leading-relaxed max-w-md"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Competitive programming isn't about memorizing solutions — it's about
              training your mind to recognize patterns, reason about complexity,
              and break hard problems into solvable pieces. Here's where I do that work.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Platform cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {PLATFORMS.map((p, i) => (
            <PlatformCard key={p.id} p={p} index={i} />
          ))}
        </div>

        {/* ── Focus areas ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-white/20" />
            <span
              className="text-xs tracking-[0.3em] text-gray-600 uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              My Approach
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FOCUS_AREAS.map((item, i) => (
              <FocusPill key={item.label} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl px-10 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            background: "rgba(245,158,11,0.04)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <div>
            <p
              className="text-2xl text-white mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}
            >
              CONSISTENCY BEATS TALENT.
            </p>
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              One problem a day compounds into interview-ready skills.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              LEETCODE ↗
            </a>
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-5 py-2.5 rounded-full border text-green-400 hover:bg-green-400/10 transition-colors"
              style={{
                borderColor: "rgba(34,197,94,0.3)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              GFG ↗
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};