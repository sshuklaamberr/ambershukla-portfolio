import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ArrowUpRight, Globe, Zap, ShoppingCart, Briefcase, Users, CreditCard } from "lucide-react";

/* ── Projects Data ── */
const PROJECTS = [
  {
    id: "portfolio",
    number: "01",
    title: "Developer Portfolio",
    subtitle: "Personal Branding",
    description:
      "A performance-focused personal portfolio built with React, Tailwind CSS, Framer Motion, and Three.js. Features a neural network 3D background, text scramble effects, magnetic buttons, animated skill bars, and cinematic section reveals.",
    image: "/projects/portfolio.png",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    accent: "#4f46e5",
    live: "https://ambershukla-portfolio.vercel.app",
    github: "https://github.com/sshuklaamberr/ambershukla-portfolio",
    year: "2025",
    role: "Design & Development",
    services: null,
  },
  {
    id: "hypernest",
    number: "02",
    title: "HyperNest Media",
    subtitle: "Digital Media Agency",
    description:
      "A full-service digital media agency delivering bold web experiences to clients across India and abroad. From portfolio sites to full e-commerce platforms — we design, build, and scale.",
    image: "/projects/hypernest.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Firebase", "Razorpay", "Google Auth"],
    accent: "#f59e0b",
    live: "https://hypernestmedia.vercel.app",
    github: null,
    year: "2025",
    role: "Full-Stack Development",
    services: [
      { icon: Globe,        label: "Portfolio Sites",     desc: "Stunning personal & professional portfolios" },
      { icon: Briefcase,    label: "Business Websites",   desc: "Corporate presence with lead generation" },
      { icon: ShoppingCart, label: "E-Commerce",          desc: "Full-stack stores with Razorpay payments" },
      { icon: Zap,          label: "Landing Pages",       desc: "High-converting campaign pages" },
      { icon: Users,        label: "Foreign Clients",     desc: "Serving clients across USA, UK & UAE" },
      { icon: CreditCard,   label: "Payment Integration", desc: "Razorpay, UPI & international gateways" },
    ],
    stack: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "CSS Animations"],
      backend:  ["Firebase", "Google Auth", "Firestore", "Cloud Functions", "Razorpay"],
    },
  },
];

/* ── Variants ── */
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
             transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Project 01 — Portfolio card ── */
function PortfolioCard({ project }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.4s ease",
      }}
    >
      {/* Full-width image */}
      <div className="relative overflow-hidden w-full" style={{ height: 500 }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-top"
        />

        {/* Gradient */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.1) 0%, rgba(5,5,8,0.45) 50%, rgba(5,5,8,0.97) 100%)" }} />

        {/* Badges */}
        <div className="absolute top-5 left-5 text-xs px-3 py-1.5 rounded-full"
             style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}40`, color: project.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {project.year}
        </div>
        <div className="absolute top-5 right-5 text-xs px-3 py-1.5 rounded-full"
             style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {project.role}
        </div>

        {/* Ghost number */}
        <span className="absolute bottom-6 right-8 leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "10rem", color: `${project.accent}10`, lineHeight: 1 }}>
          {project.number}
        </span>

        {/* Hover glow */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
             style={{ background: `radial-gradient(ellipse at 50% 100%, ${project.accent}18 0%, transparent 60%)`, opacity: hovered ? 1 : 0 }} />
      </div>

      {/* Content strip */}
      <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-8 px-8 lg:px-12 pt-7 pb-8">
        <div className="flex-1">
          <span className="text-xs tracking-[0.3em] uppercase mb-2 block"
                style={{ color: project.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {project.subtitle}
          </span>
          <h3 className="text-4xl lg:text-5xl text-white leading-none mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-5"
             style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}28` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white"
            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`, fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: hovered ? `0 0 24px ${project.accent}40` : "none", transition: "box-shadow 0.4s ease" }}>
            Live Site <ArrowUpRight size={14} />
          </motion.a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors duration-200"
             style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Github size={15} /> Source
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500"
           style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`, opacity: hovered ? 0.6 : 0 }} />
    </motion.div>
  );
}

/* ── Project 02 — HyperNest full showcase card ── */
function HyperNestCard({ project }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [activeService, setActiveService] = useState(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.4s ease",
      }}
    >
      {/* Full-width image */}
      <div className="relative overflow-hidden w-full" style={{ height: 500 }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.1) 0%, rgba(5,5,8,0.45) 50%, rgba(5,5,8,0.97) 100%)" }} />

        <div className="absolute top-5 left-5 text-xs px-3 py-1.5 rounded-full"
             style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}40`, color: project.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {project.year}
        </div>
        <div className="absolute top-5 right-5 text-xs px-3 py-1.5 rounded-full"
             style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {project.role}
        </div>

        {/* Agency badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 left-8 flex items-center gap-2.5 px-4 py-2.5 rounded-full"
          style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", backdropFilter: "blur(12px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#f59e0b" }} />
          <span className="text-xs font-medium" style={{ color: "#f59e0b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Serving India · USA · UK · UAE
          </span>
        </motion.div>

        <span className="absolute bottom-6 right-8 leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "10rem", color: `${project.accent}10`, lineHeight: 1 }}>
          {project.number}
        </span>

        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
             style={{ background: `radial-gradient(ellipse at 50% 100%, ${project.accent}15 0%, transparent 60%)`, opacity: hovered ? 1 : 0 }} />
      </div>

      {/* ── Main content ── */}
      <div className="px-8 lg:px-12 pt-8 pb-10">

        {/* Title row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase mb-2 block"
                  style={{ color: project.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {project.subtitle}
            </span>
            <h3 className="text-4xl lg:text-5xl text-white leading-none mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl"
               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {project.description}
            </p>
          </div>

          {project.live && (
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white self-start"
              style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`, fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: hovered ? `0 0 28px ${project.accent}45` : "none", transition: "box-shadow 0.4s ease" }}>
              Visit Agency <ArrowUpRight size={14} />
            </motion.a>
          )}
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "linear-gradient(to right, rgba(245,158,11,0.2), rgba(255,255,255,0.06), transparent)" }} />

        {/* ── Services grid ── */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-5"
             style={{ color: "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Services Offered
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.services.map((service, i) => {
              const Icon = service.icon;
              const isActive = activeService === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                  className="relative flex flex-col gap-2 p-4 rounded-xl cursor-default transition-all duration-300"
                  style={{
                    background: isActive ? `${project.accent}12` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isActive ? project.accent + "40" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                         style={{ background: `${project.accent}18` }}>
                      <Icon size={13} style={{ color: project.accent }} />
                    </div>
                    <span className="text-xs font-medium text-white"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {service.label}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed"
                     style={{ color: "rgba(255,255,255,0.32)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* ── Tech stack ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
          {/* Frontend */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
               style={{ color: "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Frontend
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.frontend.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full"
                      style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}28`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
               style={{ color: "rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Backend & Services
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.backend.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full"
                      style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full"
                  style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500"
           style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`, opacity: hovered ? 0.6 : 0 }} />
    </motion.div>
  );
}

/* ── Main ── */
export const ProjectsSection = () => {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden scroll-mt-[68px]"
             style={{ background: "#050508" }}>

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
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
              Selected Work
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.h2 variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
              FEATURED<br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>PROJECTS</span>
            </motion.h2>

            <motion.p variants={fadeUp}
              className="text-sm text-gray-500 leading-relaxed max-w-md"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A selection of projects that demonstrate my ability to design,
              build, and ship real-world software — from agency sites to
              full-stack platforms.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-8 mb-6">
          <PortfolioCard project={PROJECTS[0]} />
          <HyperNestCard project={PROJECTS[1]} />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-2xl px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="text-2xl text-white mb-1"
               style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}>
              WANT TO BUILD SOMETHING TOGETHER?
            </p>
            <p className="text-xs text-gray-600"
               style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              I'm open to internships, freelance work, and exciting collaborations.
            </p>
          </div>
          <motion.a href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(79,70,229,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-7 py-3 rounded-full text-sm font-medium text-white flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Let's Talk <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};