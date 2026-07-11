"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "POS System",
    description:
      "A web-based Point of Sale system with secure login, real-time dashboard insights, and complete inventory and sales management.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NeonDB", "Chakra UI"],
    accent: "#00D4FF",
    href: "https://github.com/hussainmurtaza786/pos-app",
    live: "https://pos-app-seven-ochre.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Food Zilla",
    description:
      "A personal food ordering platform where users can browse menus, customize orders, and checkout seamlessly. Built to explore real-world e-commerce flows from cart to payment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    accent: "#FF8C00",
    href: "https://github.com/hussainmurtaza786/food-zila",
    live: "https://food-zilla-alpha.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Technobots53",
    description:
      "A robotics company website with dynamic content managed through Payload CMS, product listings, and a responsive gallery — built end-to-end from frontend to database.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    accent: "#7B61FF",
    href: "https://github.com/syntaxfit/technobots53",
    live: "https://technobots53.com/",
    featured: false,
  },
  {
    id: 4,
    title: "ShariqTraders",
    description:
      "E-commerce platform for a trading business with CMS-driven product pages, dynamic content management, and a clean responsive storefront.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    accent: "#00FFB3",
    href: "https://github.com/syntaxfit/shariqtraders",
    live: "https://shariqtraders.com/",
    featured: false,
  },
  {
    id: 5,
    title: "AhsanFaisal&Co",
    description:
      "A furniture store website with CMS-powered product catalogs, WhatsApp inquiry integration, and a modern responsive design for browsing collections.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "NeonDB", "Chakra UI"],
    accent: "#FF6B6B",
    href: "https://github.com/syntaxfit/ahsanfaisalco",
    live: "https://ahsanfaisalco.com/",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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
            <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Featured project — full width */}
        {featured && (
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-8"
          >
            <a
              href={featured.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-border/80 transition-all duration-300"
            >
              {/* Top accent */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${featured.accent}, transparent)` }}
              />

              <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                {/* Left — content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-md"
                      style={{ color: featured.accent, background: `${featured.accent}12` }}
                    >
                      Featured
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-xl">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 bg-bg rounded-md font-mono text-text-muted border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — links */}
                <div className="flex md:flex-col gap-3 shrink-0">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-text-muted group-hover:text-text-primary group-hover:border-accent/30 transition-all duration-200"
                  >
                    <Github size={18} />
                  </span>
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* Other projects — grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <motion.a
              key={project.id}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group block relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-border/80 transition-all duration-300"
            >
              {/* Top accent */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors">
                      <Github size={15} />
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-accent transition-colors">
                      <ExternalLink size={15} />
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 bg-bg rounded font-mono text-text-muted border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
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
