import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A performance-focused personal portfolio built with React, Tailwind CSS, and Framer Motion. Features a dark-only design, animated sections, accessibility-aware interactions, and optimized UI transitions.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://ambershukla-portfolio.vercel.app",
    github: "https://github.com/sshuklaamberr/amber-portfolio",
  },
  {
    title: "Placement Management System",
    description:
      "A role-based full-stack placement platform with separate dashboards for students, recruiters, and administrators. Designed with secure authentication, REST APIs, and MongoDB-backed data persistence.",
    image: "/projects/placement.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: null,
    github: null,
  },
  {
    title: "Smart Parking Management System",
    description:
      "A parking management system that handles slot availability, booking logic, and administrative control. Built with a focus on real-world constraints, backend logic, and data consistency.",
    image: "/projects/parking.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: null,
    github: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-medium text-center text-white mb-6"
        >
          Featured <span className="text-indigo-400">Projects</span>
        </motion.h2>

        {/* Subheading */}
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          A selection of projects that demonstrate my ability to design,
          build, and reason about real-world software systems.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-white/5 border border-white/10
                rounded-xl overflow-hidden
                hover:border-indigo-400/40
                transition
              "
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full
                                 bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};