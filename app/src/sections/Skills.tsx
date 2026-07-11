"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    color: "#00D4FF",
    skills: ["HTML", "CSS", "React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion", "Chakra UI", "React Query", "React Hook Form"],
  },
  {
    title: "Backend",
    color: "#7B61FF",
    skills: ["JavaScript", "Node.js", "Python", "Payload CMS", "Prisma ORM", "REST APIs"],
  },
  {
    title: "Database",
    color: "#00FFB3",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "NeonDB"],
  },
  {
    title: "DevOps & Cloud",
    color: "#FF8C00",
    skills: ["GitHub", "Vercel", "Netlify", "AWS"],
  },
  {
    title: "Security & Auth",
    color: "#FF6B6B",
    skills: ["JWT Auth", "Zod", "Yup"],
  },
  {
    title: "Languages",
    color: "#8BA3BE",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">02.</span>
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-text-muted text-sm font-mono">tech_stack</span>
          </div>
          <h2 className="font-display text-center font-bold text-4xl md:text-5xl text-text-primary">
            Skills &<span className="gradient-text"> Technologies</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="p-6 bg-surface rounded-2xl border border-border group hover:border-border/80 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}50` }}
                />
                <h3 className="font-display font-bold text-xl text-text-primary">{cat.title}</h3>
              </div>

              {/* Skill items — no levels */}
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: si * 0.06 + ci * 0.12 + 0.3 }}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-bg/50 transition-colors duration-200"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
