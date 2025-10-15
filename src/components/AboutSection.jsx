import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const paragraphs = [
    "Hey, I’m Amber Shukla — a B.Tech CSE student at SRM University and an aspiring Software Engineer. I love building web applications that are efficient, scalable, and impactful.",
    "Skilled in C, C++, Java, JavaScript with a strong grasp of Data Structures & Algorithms. Passionate about full-stack web development, open-source contributions, and creating seamless user experiences.",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Problem Solver
            </h3>

            {paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                className="text-muted-foreground"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {text.split(" ").map((word, i) =>
                  i === 0 ? (
                    <span key={i} className="font-semibold text-primary">
                      {word + " "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </motion.p>
            ))}

            {/* Only Get In Touch button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="cosmic-button px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Building responsive, user-friendly websites and applications using React, Tailwind CSS, and modern frameworks.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Problem Solving",
                desc: "Solving complex challenges using algorithms and logical reasoning to write efficient and optimized code.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Handling complete development lifecycles, from planning and coding to deployment, while ensuring code quality and teamwork.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="gradient-border p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};