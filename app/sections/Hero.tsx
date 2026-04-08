"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Copy, CheckCheck } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "../app-config";


export default function Hero() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor-glow") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hussainmurtaza5222@gmail.com.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="cursor-glow" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-3/3 rounded-full blur-[150px]" />

        {/* Floating code snippets */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-16 hidden lg:block"
        >
          <div className="bg-surface/80 backdrop-blur border border-border rounded-xl p-4 font-mono text-xs leading-relaxed">
            <span className="text-accent-2">const</span>{" "}
            <span className="text-accent">developer</span>{" "}
            <span className="text-text-secondary">= {"{"}</span>
            <br />
            <span className="text-text-secondary pl-4">name:</span>{" "}
            <span className="text-highlight">&apos;Hussain&apos;</span>
            <span className="text-text-secondary">,</span>
            <br />
            <span className="text-text-secondary pl-4">role:</span>{" "}
            <span className="text-highlight">&apos;Fullstack Dev&apos;</span>
            <span className="text-text-secondary">,</span>
            <br />
            <span className="text-text-secondary pl-4">passion:</span>{" "}
            <span className="text-accent-3">&apos;Building great UI / UX&apos;</span>
            <br />
            <span className="text-text-secondary">{"}"}</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-16 hidden lg:block"
        >
          <div className="bg-surface/80 backdrop-blur border border-border rounded-xl p-4 font-mono text-xs leading-relaxed">
            <span className="text-accent-2">function</span>{" "}
            <span className="text-accent">solve</span>
            <span className="text-text-secondary">(problem) {"{"}</span>
            <br />
            <span className="text-text-secondary pl-4">return</span>{" "}
            <span className="text-highlight">elegantSolution</span>
            <span className="text-text-secondary">();</span>
            <br />
            <span className="text-text-secondary">{"}"}</span>
          </div>
        </motion.div>

        {/* Grid lines decoration */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-mono">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-none mb-6 tracking-tight"
        >
          <span className="text-text-primary">Hussain</span>
        </motion.h1>

        {/* Type animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 h-12 flex items-center justify-center"
        >
          <span className="font-body text-xl md:text-2xl text-text-secondary">
            I build{" "}
            <TypeAnimation
              sequence={[
                "scalable web applications",
                2000,
                "beautiful user interfaces",
                2000,
                "full-stack experiences",
                2000,
                "optimized digital platforms",
                2000,
              ]}
              repeat={Infinity}
              className="text-accent font-semibold"
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-text-secondary text-base md:text-lg leading-relaxed mb-12"
        >
          Fullstack Developer with 3+ years of experience crafting high-performance
          web applications. Passionate about clean code, and turning complex
          problems into elegant solutions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-accent text-bg font-semibold rounded-xl text-base hover:shadow-glow transition-all duration-300 font-body"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-8 py-4 border border-border rounded-xl text-text-primary font-semibold text-base hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 font-body"
          >
            {copied ? <CheckCheck size={16} className="text-highlight" /> : <Copy size={16} />}
            {copied ? "Copied!" : "Hussain.dev"}
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-accent transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-border" />
          <span className="text-text-muted text-sm font-mono">@hussainmurtaza</span>
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Shipped" },
            { value: "3+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
        <span className="text-xs font-mono">scroll</span>
      </motion.button>
    </section>
  );
}
