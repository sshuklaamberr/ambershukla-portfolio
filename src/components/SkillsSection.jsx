import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },

  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "SQL", category: "backend" },

  // Tools & Other
  { name: "Git / GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Data Structures & Algorithms", category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center text-center border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg text-primary">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};