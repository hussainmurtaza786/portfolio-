"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, GraduationCap, } from "lucide-react";

const experiences = [
  {
    company: "SyntaxFit",
    role: "Fullstack Developer",
    period: "Sep 2023 – Nov 2025",
    type: "work",
    location: "Pakistan, Karachi",
    description:
      "Started my web development journey at SyntaxFit, where I learned core frontend and backend concepts and applied them in real projects. This role allowed me to build end-to-end websites and implement full web solutions from scratch, turning ideas into functional products.",
    achievements: [
      "Built end-to-end websites with full frontend and backend integration",
      "Implemented complete website solutions including dynamic content, product management, and CMS-based systems",
      "Learned and applied industry-standard practices in web development, deployment, and database management",
      "Gained hands-on experience in modern tech stack and real-world project delivery"
    ],
    tech: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "TypeScript", "Node.js", "Tailwind Css", "Chakra UI", "Payload CMS", "Prisma", "PostgreSQL", "AWS"],
    color: "#00D4FF",
  },
  {
    company: "Indus University",
    role: "BS Computer Science",
    period: "OCT 2025 – Present",
    type: "edu",
    location: "Pakistan, Karachi",
    description:
      "Currently pursuing my BSc in Computer Science. Focusing on building a strong foundation in programming, algorithms, and software engineering principles. I am actively learning and exploring practical applications in web and software development.",
    achievements: [
      "Gaining foundational knowledge in software engineering and distributed systems",
      "Actively applying learning to personal and academic projects",
      "Participating in coding clubs and collaborative learning initiatives",
      "Building practical skills to complement professional experience"
    ],
    tech: ["C", "C++"],
    color: "#7B61FF",
  }, {
    company: "Jinnah Govt College ",
    role: "Pre-Engineering",
    period: "Aug 2023 – June 2025",
    type: "edu",
    location: "Pakistan, Karachi",
    description:
      "Completed my pre-engineering studies at Jinnah Govt College, where I focused on mathematics, physics, and computer science fundamentals. This period was crucial in shaping my analytical and problem-solving skills, preparing me for advanced studies in computer science.",
    achievements: [
      "Developed strong analytical and problem-solving skills through rigorous coursework",
      "Participated in science and technology clubs, enhancing practical understanding of engineering concepts",
      "Prepared for higher education in computer science with a solid foundation in mathematics and physics",
      "Engaged in collaborative projects and competitions, fostering teamwork and innovation"
    ],
    tech: ["C", "C++"],
    color: "#7B61FF",
  }
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden">
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
            <span className="font-mono text-accent text-sm">04.</span>
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-text-muted text-sm font-mono">work_history</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Experience &<span className="gradient-text"> Education</span>
          </h2>
        </motion.div>

        {/* Experience tabs layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24">
          {/* Company list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-56 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 flex-shrink-0"
            role="tablist"
            aria-label="Experience entries"
          >
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                role="tab"
                aria-selected={activeExp === i}
                aria-controls={`experience-panel-${i}`}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 text-sm font-body ${activeExp === i
                  ? "bg-surface border border-border text-text-primary"
                  : "text-text-muted hover:text-text-secondary hover:bg-surface/50"
                  }`}
              >
                {exp.type === "edu" ? (
                  <GraduationCap size={16} style={{ color: activeExp === i ? exp.color : undefined }} />
                ) : (
                  <Building2 size={16} style={{ color: activeExp === i ? exp.color : undefined }} />
                )}
                <span className="whitespace-nowrap lg:whitespace-normal">{exp.company}</span>
              </button>
            ))}
          </motion.div>

          {/* Experience detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 min-h-[500px]"
          >
            <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  role="tabpanel"
                  id={`experience-panel-${activeExp}`}
                  className="bg-surface rounded-2xl border border-border p-8 h-full"
              >
                {/* Title area */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-text-primary mb-1">
                      {experiences[activeExp].role}
                    </h3>
                    <div
                      className="font-semibold text-base mb-2"
                      style={{ color: experiences[activeExp].color }}
                    >
                      @ {experiences[activeExp].company}
                    </div>
                    <div className="flex items-center gap-4 text-text-muted text-sm font-mono">
                      <span>{experiences[activeExp].period}</span>
                      <span>•</span>
                      <span>{experiences[activeExp].location}</span>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${experiences[activeExp].color}15` }}
                  >
                    {experiences[activeExp].type === "edu" ? (
                      <GraduationCap size={22} style={{ color: experiences[activeExp].color }} />
                    ) : (
                      <Building2 size={22} style={{ color: experiences[activeExp].color }} />
                    )}
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {experiences[activeExp].description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs text-text-muted mb-4 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeExp].achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: experiences[activeExp].color }}
                        />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech used */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExp].tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full font-mono border"
                        style={{
                          color: experiences[activeExp].color,
                          borderColor: `${experiences[activeExp].color}30`,
                          background: `${experiences[activeExp].color}10`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">

            <h3 className="font-display font-bold text-xl text-text-primary">
              Certifications
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.5 }}
                whileHover={{ y: -4 }}
                className="p-5 bg-surface rounded-xl border border-border hover:border-accent/20 transition-all duration-200"
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}60` }}
                />
                <div className="font-semibold text-text-primary text-sm mb-1">{cert.name}</div>
                <div className="text-text-muted text-xs font-mono">{cert.issuer}</div>
                <div
                  className="text-xs font-mono mt-2"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
