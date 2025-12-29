import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-black overflow-hidden scroll-mt-[90px]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)]
            bg-[size:56px_56px]
          "
        />
      </div>

      <div className="relative container mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-3xl font-medium mb-12 text-center text-white"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6 text-gray-300"
          >
            {/* Highlight line */}
            <p className="text-base md:text-lg leading-relaxed">
              I’m <span className="text-white font-medium">Amber Shukla</span>, a
              B.Tech Computer Science student at SRM University focused on
              building strong problem-solving and software fundamentals.
            </p>

            {/* Short bullets instead of long paragraph */}
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                • Strong focus on{" "}
                <span className="text-white">
                  C++, Java, and Data Structures & Algorithms
                </span>
              </li>
              <li>
                • Emphasis on writing optimized, readable solutions and
                understanding time–space trade-offs
              </li>
              <li>
                • Applying CS fundamentals through real-world web projects
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="
                  inline-block px-6 py-2.5 rounded-full
                  bg-indigo-600 text-white text-sm font-medium
                  hover:bg-indigo-700 transition
                "
              >
                Open to Internships
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Cleaner, more visual blocks */}
          <div className="space-y-5">

            {[
              {
                title: "Core CS",
                points: [
                  "C++ & Java",
                  "Data Structures & Algorithms",
                  "Problem Solving",
                ],
              },
              {
                title: "Development",
                points: [
                  "React & JavaScript",
                  "Tailwind CSS",
                  "Backend Fundamentals",
                ],
              },
              {
                title: "Preparation",
                points: [
                  "Clean Code Practices",
                  "Git & GitHub",
                  "Interview-Oriented Learning",
                ],
              },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="
                  bg-white/5 border border-white/10
                  rounded-xl p-5
                "
              >
                <h4 className="text-sm font-semibold text-indigo-400 mb-3">
                  {block.title}
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  {block.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};