"use client";

import { motion } from "framer-motion";
import { Terminal, Heart, ArrowUp } from "lucide-react";
import { navItems, socialLinks } from "@/app/src/app-config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const Year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                <Terminal size={14} className="text-bg" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-text-primary">Hussain</span>
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Senior Fullstack Developer building scalable, performant web applications
              with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 flex items-center justify-center bg-surface border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-body"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-5">
              Built With
            </h4>
            <div className="space-y-3 text-sm text-text-secondary font-body">
              {[
                "Next.js 15 (App Router)",
                "Tailwind CSS v3",
                "Framer Motion",
                "TypeScript",
                "React Hot Toast",
                "Deployed on Vercel",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="flex items-center gap-1.5 text-text-muted text-sm font-body">
            <span>© {Year} Hussain. Made with</span>
            <Heart size={12} className="text-accent-3 fill-current" />
            <span>and too much coffee.</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-text-muted hover:text-accent text-sm font-mono transition-colors duration-200 group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
