import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Practice", href: "#practice" },
  { name: "Skills",   href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

/* ─── Active-link underline indicator ─── */
function NavLink({ item, activeSection }) {
  const isActive = activeSection === item.href.replace("#", "");

  return (
    <a
      href={item.href}
      className="relative group text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: isActive ? "#f59e0b" : "rgba(255,255,255,0.5)",
      }}
    >
      {item.name}

      {/* Active underline */}
      <span
        className="absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300"
        style={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0 }}
      />
      {/* Hover underline */}
      <span className="absolute -bottom-1 left-0 h-px bg-amber-400/50 w-0 group-hover:w-full transition-all duration-300" />
    </a>
  );
}

export const Navbar = () => {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isMenuOpen,    setIsMenuOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll spy ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navItems.map((i) => i.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll on mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(5,5,8,0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(18px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 h-[68px] flex items-center justify-between">

          {/* ── Brand ── */}
          <a href="#home" className="flex items-center gap-0.5"
             style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="text-2xl text-white tracking-widest leading-none">AS</span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-amber-400 text-2xl leading-none"
            >.</motion.span>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} activeSection={activeSection} />
            ))}
          </div>

          {/* ── Desktop Right ── */}
          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-xs text-gray-600"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              />
              Available
            </span>
            <a href="/resume.pdf" download
               className="text-xs px-5 py-2 rounded-full border border-amber-400/30 text-amber-400 hover:border-amber-400/70 hover:bg-amber-400/10 transition-all duration-300 tracking-widest uppercase"
               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Resume ↓
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-amber-400/40 transition-colors duration-200"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={15} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: "#050508" }}
          >
            {/* Subtle grid lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute left-0 right-0 border-t border-white/[0.04]"
                     style={{ top: `${(i + 1) * 16.66}%` }} />
              ))}
            </div>

            {/* Glow blob */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
                 style={{ background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

            {/* Mirror top bar */}
            <div className="flex items-center justify-between px-8 h-[68px] border-b border-white/[0.06] shrink-0">
              <a href="#home" onClick={() => setIsMenuOpen(false)}
                 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                 className="text-2xl text-white tracking-widest">
                AS<span className="text-amber-400">.</span>
              </a>
              <button onClick={() => setIsMenuOpen(false)}
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white">
                <X size={15} />
              </button>
            </div>

            {/* Nav links — big Bebas style */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                >
                  <span
                    className="text-5xl text-white/75 group-hover:text-amber-400 transition-colors duration-200"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {item.name}
                  </span>
                  <motion.span
                    className="text-white/20 group-hover:text-amber-400 transition-colors duration-200 text-xl"
                    whileHover={{ x: 4 }}
                  >→</motion.span>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="px-10 py-8 flex items-center justify-between border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-2"
                   style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">Available for hire</span>
              </div>
              <a href="/resume.pdf" download
                 className="text-xs text-amber-400 border border-amber-400/30 px-4 py-2 rounded-full hover:bg-amber-400/10 transition-colors tracking-widest"
                 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                RESUME ↓
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};