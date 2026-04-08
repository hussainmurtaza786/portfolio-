"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    company: "TechFlow Inc.",
    role: "Senior Fullstack Engineer",
    period: "Jan 2024 – Present",
    type: "work",
    location: "London, UK (Hybrid)",
    description:
      "Leading development of the core product platform serving 500k+ users. Architecting microservices migration from monolithic Rails app to Next.js + Node.js stack.",
    achievements: [
      "Reduced page load time by 60% through SSR optimization and edge caching",
      "Led team of 5 engineers, introduced code review culture and CI/CD best practices",
      "Built real-time notification system handling 1M+ daily events with 99.9% delivery rate",
      "Designed and implemented multi-tenant PostgreSQL schema supporting enterprise clients",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    color: "#00D4FF",
  },
  {
    company: "Nexus Labs",
    role: "Fullstack Developer",
    period: "Mar 2022 – Dec 2023",
    type: "work",
    location: "Remote (US Company)",
    description:
      "Full-stack development for a Series B SaaS startup in the HR tech space. Built core product features from conception to production.",
    achievements: [
      "Architected and shipped candidate tracking system used by 200+ enterprise clients",
      "Improved test coverage from 12% to 87% using Jest, Cypress and Playwright",
      "Built AI-powered resume parsing feature using OpenAI API, cutting review time by 70%",
      "Migrated monolithic Express app to microservices, reducing deployment complexity by 40%",
    ],
    tech: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "Redis", "GCP", "Docker"],
    color: "#7B61FF",
  },
  {
    company: "PixelCraft Studio",
    role: "Frontend Developer",
    period: "Jun 2020 – Feb 2022",
    type: "work",
    location: "Manchester, UK",
    description:
      "Frontend specialist at a creative digital agency. Delivered pixel-perfect web experiences for clients across fintech, healthcare, and e-commerce verticals.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Built reusable component library reducing development time by 35%",
      "Implemented complex animations and interactive data visualizations using D3.js",
      "Mentored 2 junior developers in React best practices and modern CSS",
    ],
    tech: ["React", "Vue.js", "TypeScript", "SASS", "D3.js", "Webpack", "Storybook"],
    color: "#00FFB3",
  },
  {
    company: "StartupX",
    role: "Junior Full-Stack Developer",
    period: "Sep 2018 – May 2020",
    type: "work",
    location: "Manchester, UK",
    description:
      "First engineering role at an early-stage fintech startup. Wore many hats, contributing to frontend, backend, and infrastructure across a lean team.",
    achievements: [
      "Built and shipped the company's first mobile-responsive web app from scratch",
      "Implemented Stripe payment integration processing £500k+ monthly transactions",
      "Set up initial CI/CD pipeline using GitHub Actions and AWS",
      "Contributed to fundraising technical documentation for seed round",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "AWS EC2", "Stripe", "Docker"],
    color: "#FF6B6B",
  },
  {
    company: "University of Manchester",
    role: "BSc Computer Science",
    period: "Sep 2014 – Jun 2018",
    type: "edu",
    location: "Manchester, UK",
    description:
      "First Class Honours degree. Specialized in Software Engineering, Distributed Systems, and Algorithms. Dissertation on distributed consensus algorithms.",
    achievements: [
      "First Class Honours — 2:1 or above in all modules",
      "Best Dissertation Award for research on Raft consensus algorithm implementation",
      "Founded university coding club — grew to 120+ members in 2 years",
      "Summer internship at IBM Research as part of industrial placement year",
    ],
    tech: ["Java", "Python", "C++", "Haskell", "SQL", "Linux", "ML/AI fundamentals"],
    color: "#7B61FF",
  },
];

const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023", color: "#FF9900" },
  { name: "Google Cloud Professional", issuer: "Google Cloud", year: "2022", color: "#4285F4" },
  { name: "MongoDB Developer Associate", issuer: "MongoDB University", year: "2022", color: "#00ED64" },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2021", color: "#2496ED" },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
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
          >
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 text-sm font-body ${
                  activeExp === i
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} className="text-accent" />
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
        </motion.div>
      </div>
    </section>
  );
}
