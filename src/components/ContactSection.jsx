import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
  ArrowUpRight,
  Copy,
  Check,
  Send,
} from "lucide-react";

/* ── Variants (mirrors ProjectsSection) ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Copy-to-clipboard hook ── */
function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return [copied, copy];
}

/* ── Single contact info row ── */
function InfoRow({ icon: Icon, label, value, href, copyText, accent }) {
  const [copied, copy] = useCopy(copyText || value);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start gap-5 p-5 rounded-2xl"
      style={{
        background: hovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
        border: `1px solid ${hovered ? accent + "40" : "rgba(255,255,255,0.06)"}`,
        transition: "all 0.35s ease",
      }}
    >
      <div
        className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-1"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm text-white/80 hover:text-white transition-colors duration-200 truncate block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {value}
          </a>
        ) : (
          <span className="text-sm text-white/80 truncate block"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {value}
          </span>
        )}
      </div>

      {copyText && (
        <button
          onClick={copy}
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            background: copied ? `${accent}25` : "rgba(255,255,255,0.04)",
            border: `1px solid ${copied ? accent + "50" : "rgba(255,255,255,0.08)"}`,
          }}
          title="Copy"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="check" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Check size={12} style={{ color: accent }} />
              </motion.span>
            ) : (
              <motion.span key="copy" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Copy size={12} className="text-white/30" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}
    </motion.div>
  );
}

/* ── Social pill ── */
function SocialPill({ href, icon: Icon, label, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-5 py-3 rounded-full text-sm"
      style={{
        background: hovered ? `${accent}18` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? accent + "45" : "rgba(255,255,255,0.08)"}`,
        color: hovered ? accent : "rgba(255,255,255,0.5)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <Icon size={15} />
      {label}
    </motion.a>
  );
}

/* ── Right panel – Email CTA card ── */
function EmailCard({ accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? accent + "50" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.4s ease",
        minHeight: 420,
      }}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
           style={{ background: `radial-gradient(circle at 30% 30%, ${accent}12 0%, transparent 65%)`, opacity: hovered ? 1 : 0 }} />

      <div className="h-[2px] w-full transition-all duration-500"
           style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)`, opacity: hovered ? 0.7 : 0.2 }} />

      <div className="relative flex flex-col flex-1 p-10 lg:p-12 justify-between">
        <span className="text-8xl font-bold leading-none select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: `${accent}15`, letterSpacing: "0.04em", lineHeight: 1 }}>
          SAY<br />HI
        </span>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block"
                style={{ color: accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Open to opportunities
          </span>

          <h3 className="text-4xl lg:text-5xl text-white leading-none mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
            LET'S BUILD<br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>SOMETHING</span>
          </h3>

          <div className="flex items-center gap-2 mb-5">
            <div className="w-4 h-px" style={{ background: accent }} />
            <span className="text-xs text-gray-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Internships · Freelance · Collaboration
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm"
             style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            I actively check my inbox and respond within 24–48 hours.
            Whether it's a quick question or a full project brief — I'd love to hear from you.
          </p>

          <motion.a
            href="mailto:shuklaamber01@gmail.com"
            whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${accent}45` }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium text-white"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "box-shadow 0.3s ease" }}
          >
            <Send size={14} />
            Send an Email
            <ArrowUpRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export const ContactSection = () => {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const bodyRef    = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-40px" });

  const ACCENT_MAIN = "#4f46e5";

  const contactItems = [
    { icon: Mail,   label: "Email",    value: "shuklaamber01@gmail.com", href: "mailto:shuklaamber01@gmail.com", copyText: "shuklaamber01@gmail.com", accent: ACCENT_MAIN },
    { icon: Phone,  label: "Phone",    value: "+91 8957339340",           href: "tel:+918957339340",              copyText: "+918957339340",            accent: ACCENT_MAIN },
    { icon: MapPin, label: "Location", value: "Kanpur, Uttar Pradesh, India", href: null, copyText: null,         accent: ACCENT_MAIN },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/shuklaaamber/", icon: Linkedin, label: "LinkedIn", accent: "#4f46e5" },
    { href: "https://github.com/sshuklaamberr",          icon: Github,   label: "GitHub",   accent: "#f59e0b" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden scroll-mt-[68px]"
      style={{ background: "#050508" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }} />

      {/* Glow blobs */}
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div ref={headRef} variants={stagger} initial="hidden" animate={headInView ? "visible" : "hidden"} className="mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-xs tracking-[0.35em] text-amber-400 uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.h2 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
                       style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
              GET IN<br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>TOUCH</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-sm text-gray-500 leading-relaxed max-w-md"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              I'm open to internship opportunities, freelance projects, and
              meaningful technical collaborations. If you have an idea or a
              role that fits — let's talk.
            </motion.p>
          </div>
        </motion.div>

        {/* Body grid */}
        <motion.div ref={bodyRef} variants={stagger} initial="hidden" animate={bodyInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <InfoRow key={item.label} {...item} />
            ))}

            {/* Social pills */}
            <motion.div variants={fadeUp} className="mt-2 p-5 rounded-2xl"
                        style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-4"
                 style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => <SocialPill key={s.label} {...s} />)}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 px-5 py-3.5 rounded-full self-start"
                        style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10b981" }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#10b981" }} />
              </span>
              <span className="text-xs" style={{ color: "#10b981", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Available for new opportunities
              </span>
            </motion.div>
          </div>

          {/* Right column */}
          <EmailCard accent={ACCENT_MAIN} />
        </motion.div>

      </div>
    </section>
  );
};