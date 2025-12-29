import { motion } from "framer-motion";
import gfg from "../assets/social/gfg.svg";
import leetcodeVideo from "../assets/social/leetcode.mp4";

export const PracticeShowcase = () => {
  return (
    <section
      id="practice"
      className="relative py-24 bg-black overflow-hidden"
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

      <div className="relative container mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-3xl font-medium mb-6 text-white"
        >
          <span className="text-indigo-400">
            DSA-Focused Practice
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed"
        >
          I focus on strengthening problem-solving fundamentals through
          structured and consistent practice, prioritizing algorithms,
          data structures, and interview-relevant patterns.
        </motion.p>

        {/* Cards */}
        <div className="mt-14 flex flex-col md:flex-row gap-6 justify-center">

          {/* LeetCode */}
          <motion.a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="
              group w-full md:w-[320px]
              bg-white/5 border border-white/10
              rounded-xl p-6 text-left
              hover:border-indigo-400/50
              hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]
              transition
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <video
                src={leetcodeVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-8 h-8 rounded-sm object-cover"
              />
              <h3 className="text-sm font-semibold text-white">
                LeetCode
              </h3>
            </div>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Focused on problem patterns such as arrays, hashing,
              recursion, trees, and dynamic programming to improve
              problem decomposition and efficiency.
            </p>

            <span className="text-sm text-indigo-400 font-medium group-hover:translate-x-1 inline-block transition">
              View Profile →
            </span>
          </motion.a>

          {/* GeeksforGeeks */}
          <motion.a
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="
              group w-full md:w-[320px]
              bg-white/5 border border-white/10
              rounded-xl p-6 text-left
              hover:border-indigo-400/50
              hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]
              transition
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={gfg}
                alt="GeeksforGeeks"
                className="w-8 h-8"
              />
              <h3 className="text-sm font-semibold text-white">
                GeeksforGeeks
              </h3>
            </div>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Used for concept reinforcement, topic-wise revision,
              and understanding theoretical foundations of core
              computer science subjects.
            </p>

            <span className="text-sm text-indigo-400 font-medium group-hover:translate-x-1 inline-block transition">
              View Profile →
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
};