import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

import instagram from "../assets/social/instagram.svg";
import linkedin from "../assets/social/linkedin.svg";
import github from "../assets/social/github.svg";
import leetcode from "../assets/social/leetcode.svg";

/* ── Variants (mirrors ProjectsSection / ContactSection) ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Data ── */
const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shukla_amber_",
    icon: instagram,
    accent: "#e1306c",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shuklaaamber/",
    icon: linkedin,
    accent: "#0a66c2",
  },
  {
    label: "GitHub",
    href: "https://github.com/sshuklaamberr",
    icon: github,
    accent: "#f0f6fc",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/",
    icon: leetcode,
    accent: "#ffa116",
  },
];

/* ── Nav link with hover underline ── */
function NavLink({ label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-xs tracking-[0.15em] uppercase transition-colors duration-200"
      style={{
        color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {label}
      {/* Animated underline */}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-0.5 left-0 right-0 h-px origin-left"
        style={{ background: "#4f46e5" }}
      />
    </a>
  );
}

/* ── Social icon button ── */
function SocialBtn({ label, href, icon, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.94 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
      style={{
        background: hovered ? `${accent}18` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? accent + "55" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 16px ${accent}30` : "none",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <img
        src={icon}
        alt={label}
        className="w-4 h-4 transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0.45 }}
      />
    </motion.a>
  );
}

/* ── Back to top button ── */
function BackToTop() {
  const [hovered, setHovered] = useState(false);
  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      onClick={scrollUp}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-300"
      style={{
        background: hovered ? "rgba(79,70,229,0.15)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(79,70,229,0.5)" : "rgba(255,255,255,0.08)"}`,
        color: hovered ? "#a5b4fc" : "rgba(255,255,255,0.3)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: "0.1em",
      }}
    >
      <ArrowUp size={11} />
      Back to top
    </motion.button>
  );
}

/* ── Main ── */
export const Footer = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Grid bg — identical to rest of portfolio */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(79,70,229,0.5), rgba(245,158,11,0.35), transparent)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* ── Main footer body ── */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="pt-16 pb-8"
        >
          {/* Top row: brand + nav + socials */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

            {/* Brand */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <span
                className="text-4xl leading-none text-white"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                AMBER<span style={{ color: "rgba(255,255,255,0.2)" }}>.</span>
              </span>
              <p
                className="text-[11px] text-gray-600 max-w-[180px] leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Designing & building things for the web.
              </p>
            </motion.div>

            {/* Nav links */}
            <motion.nav
              variants={fadeUp}
              className="flex flex-wrap gap-x-8 gap-y-3"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </motion.nav>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <SocialBtn key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="h-px mb-7"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />

          {/* Bottom row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Copyright */}
            <p
              className="text-[11px]"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              © {new Date().getFullYear()} Amber Shukla. All rights reserved.
            </p>

            {/* Status + back-to-top */}
            <div className="flex items-center gap-4">
              {/* Availability pill */}
              <div
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.07)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#10b981" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ background: "#10b981" }}
                  />
                </span>
                <span
                  className="text-[10px] tracking-[0.1em]"
                  style={{
                    color: "#10b981",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Available for work
                </span>
              </div>

              <BackToTop />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};