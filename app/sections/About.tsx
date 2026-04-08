"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Calendar, MapPin, } from "lucide-react";



// const timeline = [
//   { year: "2022–2024", role: "Fullstack Developer", company: "Nexus Labs", type: "work" },
//   { year: "2020–2022", role: "Frontend Developer", company: "PixelCraft Studio", type: "work" },
//   { year: "2018–2020", role: "Junior Developer", company: "StartupX", type: "work" },
//   { year: "2014–2018", role: "BSc Computer Science", company: "University of Manchester", type: "edu" },
// ];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="relative  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">01.</span>
            <div className="h-px flex-1 max-w-12 bg-accent/30" />
            <span className="text-text-muted text-sm font-mono">about_me</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            The Developer
            <span className="gradient-text"> Behind the Code</span>
          </h2>
        </motion.div>

        <div className="lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 border-gray-200 text-text-secondary text-base leading-relaxed mb-10"
            >
              <p>
                Hey! I&apos;m{" "}
                <span className="text-text-primary font-semibold">Hussain</span>, a
                Fullstack Developer based in{" "}
                <span className="text-accent">Pakistan, Karachi</span>. My journey started with an
                internship at <span className="text-text-primary font-semibold">Syntaxfit</span>,
                where I learned web development by building both personal and client projects, mainly
                business websites, and applied my learning in practical ways.
              </p>
              <p>
                I specialize in creating{" "}
                <span className="text-text-primary">end-to-end web applications</span> using
                <span className="text-accent"> Next.js, React, Node.js, Payload CMS, and Prisma</span>.
                I enjoy building projects that are not only functional but also organized and maintainable.
              </p>
              <p>
                I&apos;m always learning and growing. Lately, I&apos;ve been diving into AI tools and
                exploring how they can be applied to web development and business solutions.
              </p>
              <p>
                Outside of coding, you&apos;ll find me{" "}
                <span className="text-accent-2">gaming</span> or exploring new industries and market
                trends, always curious about how technology shapes the world.
              </p>
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {[
                { icon: MapPin, label: "Location", value: "Pakistan, Karachi" },
                { icon: Calendar, label: "Experience", value: "3+ Years" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={14} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-mono">{info.label}</div>
                    <div className="text-text-primary text-sm font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="flex justify-center">
              <motion.a
                href="/hussain-cv.pdf"
                download
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
              >
                <Download size={16} />
                Download Full CV (PDF)
              </motion.a>
            </div>

          </div>

          {/* Right: Timeline */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-xl text-text-primary mb-8">
              Career Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent-2/30 to-transparent" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                    className="flex gap-6 pl-12 relative"
                  >
                    <div
                      className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                        item.type === "edu"
                          ? "border-accent-2 bg-accent-2/30"
                          : "border-accent bg-accent/30"
                      }`}
                    />
                    <div className="flex-1">
                      <span className="font-mono text-xs text-text-muted">{item.year}</span>
                      <div className="font-semibold text-text-primary text-base">{item.role}</div>
                      <div className={`text-sm font-body ${item.type === "edu" ? "text-accent-2" : "text-accent"}`}>
                        {item.company}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
