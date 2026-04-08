"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    color: "#00D4FF",
    skills: [
      { name: "React / Next.js", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "GraphQL / Apollo", level: 82 },
    ],
  },
  {
    title: "Backend",
    color: "#7B61FF",
    skills: [
      { name: "Node.js / Express", level: 94 },
      { name: "Python / FastAPI", level: 86 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 82 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "#00FFB3",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 85 },
      { name: "Docker / Kubernetes", level: 83 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "Terraform", level: 72 },
      { name: "Linux / Bash", level: 88 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "Redis", "MongoDB", "GraphQL", "REST",
  "Docker", "Kubernetes", "AWS", "Git", "Prisma",
  "tRPC", "Tailwind", "Figma", "Jest", "Playwright",
  "FastAPI", "Express", "Supabase", "Vercel", "Linux",
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
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
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Skills &<span className="gradient-text"> Technologies</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="p-8 bg-surface rounded-2xl border border-border"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}60` }}
                />
                <h3 className="font-display font-bold text-xl text-text-primary">{cat.title}</h3>
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-text-secondary">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: si * 0.1 + ci * 0.15 + 0.3,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                          boxShadow: `0 0 10px ${cat.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-display font-bold text-xl text-text-primary mb-8 text-center">
            Full Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 + 0.6 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-mono text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
