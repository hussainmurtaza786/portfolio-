"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const categories = ["All", "Fullstack", "Frontend", "Backend", "Open Source"];

const projects = [
  {
    id: 1,
    title: "FlowBoard Pro",
    description:
      "A real-time collaborative project management platform with AI-powered task prioritization, Kanban boards, and Gantt charts. Built for teams of all sizes.",
    longDesc:
      "FlowBoard Pro handles 10k+ concurrent users with WebSocket-based real-time sync. Features include AI task suggestions powered by OpenAI, multi-workspace management, and advanced analytics dashboard.",
    tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Redis", "OpenAI", "Tailwind"],
    category: "Fullstack",
    stars: 1240,
    forks: 187,
    gradient: "from-accent/20 to-accent-2/20",
    accent: "#00D4FF",
    href: "https://github.com/hussain/flowboard",
    live: "https://flowboard.pro",
    featured: true,
  },
  {
    id: 2,
    title: "ShopEngine API",
    description:
      "High-performance e-commerce API powering 5M+ monthly transactions. Built with microservices architecture, event-driven design, and comprehensive documentation.",
    longDesc:
      "Microservices architecture with API Gateway pattern. Handles payment processing, inventory management, order fulfillment, and real-time notifications. 99.99% uptime SLA.",
    tech: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe"],
    category: "Backend",
    stars: 892,
    forks: 134,
    gradient: "from-accent-2/20 to-accent-3/20",
    accent: "#7B61FF",
    href: "https://github.com/hussain/shopengine",
    live: "https://shopengine.dev",
    featured: true,
  },
  {
    id: 3,
    title: "DesignSystem UI",
    description:
      "An open-source React component library with 80+ production-ready components, dark/light mode, and full TypeScript support. 4k+ GitHub stars.",
    longDesc:
      "Fully accessible components following WAI-ARIA standards. Includes Storybook documentation, visual regression testing with Chromatic, and automated releases.",
    tech: ["React", "TypeScript", "Storybook", "Chromatic", "Radix UI", "Tailwind"],
    category: "Open Source",
    stars: 4200,
    forks: 620,
    gradient: "from-highlight/20 to-accent/20",
    accent: "#00FFB3",
    href: "https://github.com/hussain/design-system",
    live: "https://ds.hussain.dev",
    featured: true,
  },
  {
    id: 4,
    title: "AIChat Dashboard",
    description:
      "Analytics dashboard for AI conversation platforms. Real-time metrics, conversation flow visualization, and cost tracking across multiple LLM providers.",
    tech: ["Next.js", "D3.js", "Prisma", "PostgreSQL", "tRPC", "Vercel"],
    category: "Frontend",
    stars: 456,
    forks: 78,
    gradient: "from-accent-3/20 to-accent/20",
    accent: "#FF6B6B",
    href: "https://github.com/hussain/ai-dashboard",
    live: "https://aichat.hussain.dev",
    featured: false,
  },
  {
    id: 5,
    title: "DevPulse CLI",
    description:
      "A developer productivity CLI tool that integrates with GitHub, Jira, and Slack. Get daily standup reports, PR summaries, and sprint metrics right in your terminal.",
    tech: ["Node.js", "TypeScript", "GitHub API", "Jira API", "Ink", "Commander.js"],
    category: "Open Source",
    stars: 780,
    forks: 112,
    gradient: "from-accent-2/20 to-highlight/20",
    accent: "#7B61FF",
    href: "https://github.com/hussain/devpulse",
    live: "https://npmjs.com/package/devpulse",
    featured: false,
  },
  {
    id: 6,
    title: "RealtimeCollab",
    description:
      "Google Docs-style collaborative editor with operational transformation, presence awareness, and comment threads. Sub-100ms latency globally.",
    tech: ["React", "Yjs", "Socket.io", "Node.js", "MongoDB", "AWS CloudFront"],
    category: "Fullstack",
    stars: 623,
    forks: 95,
    gradient: "from-accent/20 to-highlight/20",
    accent: "#00D4FF",
    href: "https://github.com/hussain/realtime-collab",
    live: "https://collab.hussain.dev",
    featured: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">03.</span>
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-text-muted text-sm font-mono">featured_work</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Projects I&apos;ve{" "}
            <span className="gradient-text">Built & Shipped</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-bg font-semibold"
                  : "bg-surface border border-border text-text-secondary hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="project-card relative bg-surface rounded-2xl border border-border overflow-hidden group cursor-pointer"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                  style={{ boxShadow: `0 0 20px ${project.accent}30` }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {project.featured && (
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded mb-2 inline-block"
                          style={{ color: project.accent, background: `${project.accent}15` }}
                        >
                          Featured
                        </span>
                      )}
                      <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-text-muted text-sm leading-relaxed mb-4 border-t border-border pt-4"
                      >
                        {project.longDesc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-bg rounded-md font-mono text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-bg rounded-md font-mono text-text-muted">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-text-muted text-xs font-mono">
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {project.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {project.forks}
                    </span>
                    <span
                      className="ml-auto text-xs px-2 py-0.5 rounded-full border"
                      style={{ color: project.accent, borderColor: `${project.accent}30` }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/hussain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-xl text-text-secondary hover:text-text-primary hover:border-accent/40 font-body font-medium transition-all duration-200"
          >
            <Github size={18} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
