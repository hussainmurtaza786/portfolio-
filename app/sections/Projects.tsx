"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const categories = ["All", "Fullstack", "Frontend", "Backend", "Open Source"];

const projects = [
  {
    id: 1,
    title: "POS System",
    description:
      "A web-based Point of Sale system with secure login, real-time dashboard insights, and complete inventory and sales management.",

    longDesc:
      "This POS system starts with a secure login using a valid ID and password. After logging in, users are greeted with an interactive dashboard displaying daily, monthly, and yearly sales, returns, and performance analytics. A sidebar navigation provides access to key modules such as product inventory, where users can perform full CRUD operations, manage stock levels, and generate detailed reports with print functionality. The system also includes expense tracking, sales history, return management, and basic analytics to help monitor business performance. Designed for efficiency, it streamlines retail operations with a user-friendly interface and organized workflow.",

    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NeonDB", "Chakra UI"],
    category: "Open Source",
    gradient: "from-accent/20 to-accent-2/20",
    accent: "#00D4FF",
    href: "https://github.com/hussainmurtaza786/pos-app",
    live: "https://pos-app-seven-ochre.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Technobots53",
    description:
      "Fullstack website with dynamic content powered by Payload CMS, featuring responsive frontend and complete backend integration.",
    longDesc:
      "Built end-to-end with both frontend and backend handled by me. The frontend uses Next.js and Chakra UI for a responsive, modern interface, while the backend leverages Payload CMS for content management, including dynamic gallery pages. PostgreSQL with NeonDB powers the database, enabling smooth data retrieval and management. Features include product listings, dynamic galleries, and fully managed CMS content for seamless updates and scalability.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    category: "Fullstack",
    gradient: "from-accent-2/20 to-accent-3/20",
    accent: "#7B61FF",
    href: "https://github.com/syntaxfit/technobots53",
    live: "https://technobots53.com/",
    featured: false,
  },
  {
    id: 3,
    title: "ShariqTraders",
    description:
      "Fullstack website with dynamic content powered by Payload CMS, featuring responsive frontend and complete backend integration.",
    longDesc:
      "Developed both frontend and backend independently. Frontend built with Next.js and Chakra UI ensures a clean and responsive design. Backend is powered by Payload CMS, allowing dynamic content management including product listings and gallery pages. PostgreSQL with NeonDB handles all database operations efficiently. The platform supports easy content updates, CRUD operations, and scalability for growing business needs.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    category: "Fullstack",
    gradient: "from-accent-2/20 to-accent-3/20",
    accent: "#7B61FF",
    href: "https://github.com/syntaxfit/shariqtraders",
    live: "https://shariqtraders.com/",
    featured: false,
  },
  {
    id: 4,
    title: "AhsanFaisal&Co",
    description:
      "Fullstack furniture website with dynamic content powered by Payload CMS, showcasing products with responsive frontend and complete backend integration.",
    longDesc:
      "Developed both frontend and backend independently. The frontend, built with Next.js and Chakra UI, provides a modern and responsive interface for browsing furniture products. The backend uses Payload CMS to manage dynamic content, including product listings and galleries. Customers can view product details, check prices, and contact the store via WhatsApp or email, as there is no built-in billing system. PostgreSQL with NeonDB handles all database operations efficiently, supporting easy content updates, CRUD operations, and scalability for future growth.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    category: "Fullstack",
    gradient: "from-accent-2/20 to-accent-3/20",
    accent: "#7B61FF",
    href: "https://github.com/syntaxfit/ahsanfaisalco",
    live: "https://ahsanfaisalco.com/",
    featured: false,
  }
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
            <span className="gradient-text">Built </span>
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
              className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-200 ${activeCategory === cat
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
                    {/* <span className="flex items-center gap-1">
                      <Star size={12} />
                      {project.stars.toLocaleString()}
                    </span> */}
                    {/* <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {project.forks}
                    </span> */}
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
            href="https://github.com/hussainmurtaza786"
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
