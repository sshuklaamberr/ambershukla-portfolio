import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import amberPhoto from "../assets/amber.jpeg";

/* ═══════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

    .hero-display { font-family: 'Bebas Neue', sans-serif; }
    .hero-body    { font-family: 'Plus Jakarta Sans', sans-serif; }

    /* Marquee */
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .marquee-track { animation: marquee 18s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }

    /* Diagonal photo clip */
    .photo-clip {
      clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
    }

    /* Holographic border */
    @keyframes holo {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .holo-border {
      background: linear-gradient(270deg, #4f46e5, #f59e0b, #06b6d4, #ec4899, #4f46e5);
      background-size: 400% 400%;
      animation: holo 4s ease infinite;
    }

    /* Char reveal */
    @keyframes charReveal {
      from { opacity: 0; transform: translateY(80%) rotateX(-40deg); }
      to   { opacity: 1; transform: translateY(0%) rotateX(0deg); }
    }
    .char-reveal { animation: charReveal 0.5s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }

    /* Scanline on photo */
    @keyframes scan {
      from { transform: translateY(-100%); }
      to   { transform: translateY(100%); }
    }
    .scanline {
      background: linear-gradient(to bottom, transparent, rgba(79,70,229,0.15), transparent);
      animation: scan 3s ease-in-out infinite;
    }

    /* Glow pulse */
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 40px 0px rgba(79,70,229,0.5); }
      50%       { box-shadow: 0 0 80px 20px rgba(79,70,229,0.25); }
    }
    .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
  `}</style>
);

/* ═══════════════════════════════════════════════
   TEXT SCRAMBLE
═══════════════════════════════════════════════ */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&";
function useScramble(target, delay = 400) {
  const [text, setText] = useState(Array(target.length).fill("█").join(""));
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setText(
          target.split("").map((ch, i) => {
            if (i < iteration) return ch;
            if (ch === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        if (iteration >= target.length) { clearInterval(interval); done.current = true; }
        iteration += 0.4;
      }, 35);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);

  return text;
}

/* ═══════════════════════════════════════════════
   STAT COUNTER
═══════════════════════════════════════════════ */
function StatCounter({ value, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const ctrl = animate(0, value, {
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => setCount(Math.floor(v)),
        });
        obs.disconnect();
        return ctrl.stop;
      }
    });
    if (nodeRef.current) obs.observe(nodeRef.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={nodeRef} className="text-center">
      <p className="hero-display text-4xl text-white leading-none">{count}{suffix}</p>
      <p className="hero-body text-xs text-gray-500 mt-1 tracking-widest uppercase">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SPLIT CHAR HEADLINE
═══════════════════════════════════════════════ */
function SplitHeadline({ text, className, delay = 0 }) {
  return (
    <span className={className} style={{ display: "inline-block", overflow: "hidden" }}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="char-reveal inline-block"
          style={{ animationDelay: `${delay + i * 0.045}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   TYPED ROLE
═══════════════════════════════════════════════ */
const ROLES = [
  "Full-Stack Developer",
  "DSA Enthusiast",
  "Scalable Systems Builder",
  "Open to Opportunities",
];
function TypedRole() {
  const [idx, setIdx]             = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let t;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed === target) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-amber-400 font-semibold">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.55, ease: "steps(1)" }}
        className="inline-block w-[2px] h-4 bg-amber-400 ml-0.5 align-middle"
      />
    </span>
  );
}

/* ═══════════════════════════════════════════════
   SKILLS MARQUEE
═══════════════════════════════════════════════ */
const SKILLS = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "C++",
  "Data Structures", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "DSA",
  "Express.js", "REST APIs", "Firebase", "System Design",
];

function SkillMarquee() {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
           style={{ background: "linear-gradient(to right, #050508, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
           style={{ background: "linear-gradient(to left, #050508, transparent)" }} />
      <div className="marquee-track flex gap-10 w-max">
        {doubled.map((skill, i) => (
          <span key={i} className="hero-body text-xs tracking-widest uppercase text-gray-500 whitespace-nowrap flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-amber-400/60 inline-block" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PHOTO CARD
═══════════════════════════════════════════════ */
function PhotoCard({ src }) {
  const ref   = useRef(null);
  const rotX  = useMotionValue(0);
  const rotY  = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 140, damping: 22 });
  const sRotY = useSpring(rotY, { stiffness: 140, damping: 22 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    rotY.set(((e.clientX - rect.left - rect.width / 2)  / rect.width)  * 18);
    rotX.set(-((e.clientY - rect.top  - rect.height / 2) / rect.height) * 18);
  };
  const onLeave = () => { rotX.set(0); rotY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: "preserve-3d", perspective: 900 }}
      initial={{ opacity: 0, x: 60, filter: "blur(20px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="holo-border p-[3px] rounded-2xl glow-pulse">
        <div className="rounded-2xl overflow-hidden relative" style={{ width: 340, height: 420 }}>
          <img src={src} alt="Amber Shukla"
               className="w-full h-full object-cover object-top photo-clip" />

          <div className="scanline absolute inset-x-0 top-0 h-1/3 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-md"
               style={{ background: "linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.0) 100%)" }}>
            <p className="hero-display text-2xl text-white tracking-wider">AMBER SHUKLA</p>
            <p className="hero-body text-xs text-amber-400/80 tracking-widest mt-0.5">B.Tech CSE · SRM University</p>
          </div>

          {["top-3 left-3 border-t-2 border-l-2","top-3 right-3 border-t-2 border-r-2",
            "bottom-3 left-3 border-b-2 border-l-2","bottom-3 right-3 border-b-2 border-r-2"].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 border-amber-400/60 ${cls}`} />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full hero-body font-medium"
        style={{ boxShadow: "0 0 20px rgba(79,70,229,0.6)" }}
      >
        ✦ Available for hire
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 bg-[#0d0d1a] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full hero-body flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        India · Remote OK
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════ */
export const HeroSection = () => {
  const scrambled = useScramble("AMBER SHUKLA", 600);

  return (
    <>
      <GlobalStyles />

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-[68px]"
        style={{ background: "#050508" }}
      >
        {/* ── Grid bg — pixel-perfect match to all other sections ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Glow blobs — same as ProjectsSection / ContactSection ── */}
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center py-12">

            {/* LEFT */}
            <div className="hero-body flex flex-col">

              {/* Eyebrow — same amber tag style as Projects & Contact headers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-[1px] bg-amber-400" />
                <span className="text-xs tracking-[0.35em] text-amber-400 uppercase">Portfolio 2025</span>
              </motion.div>

              {/* Scramble name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="hero-display text-6xl sm:text-8xl lg:text-9xl text-white leading-none mb-2 tracking-wide"
              >
                {scrambled}
              </motion.div>

              {/* Split subtitle */}
              <div
                className="hero-display text-2xl sm:text-4xl lg:text-5xl leading-none mb-8"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                <SplitHeadline text="CRAFTING DIGITAL" delay={0.9} />
                {" "}
                <SplitHeadline text="EXPERIENCES" delay={1.3} className="text-indigo-400/60" />
              </div>

              {/* Typed role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="text-base sm:text-lg mb-6 h-7"
              >
                <TypedRole />
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="text-gray-500 max-w-md text-sm leading-relaxed mb-14"
              >
                B.Tech CSE student obsessed with writing clean, performant code.
                I build full-stack products from scratch and solve problems on LeetCode daily.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex gap-10 border-t border-white/5 pt-8"
              >
                <StatCounter value={5}   label="Projects Built" />
                <StatCounter value={300} label="LeetCode Solved" />
                <StatCounter value={2}   label="Years Coding" />
              </motion.div>
            </div>

            {/* RIGHT — PHOTO */}
            <PhotoCard src={amberPhoto} />
          </div>
        </div>

        {/* ── SKILLS MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="relative z-10"
        >
          <SkillMarquee />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};