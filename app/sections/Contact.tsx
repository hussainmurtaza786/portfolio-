"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock, CheckCircle } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "alex@karimi.dev", href: "mailto:alex@karimi.dev", color: "#00D4FF" },
  { icon: Github, label: "GitHub", value: "@hussain", href: "https://github.com/hussain", color: "#E8F4F8" },
  { icon: Linkedin, label: "LinkedIn", value: "in/hussain", href: "https://linkedin.com/in/hussain", color: "#0A66C2" },
  { icon: Twitter, label: "Twitter", value: "@hussain", href: "https://twitter.com/hussain", color: "#1DA1F2" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    toast.success("Message sent! I'll get back to you soon 🚀");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">05.</span>
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-text-muted text-sm font-mono">get_in_touch</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Let&apos;s Work<span className="gradient-text"> Together</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg leading-relaxed">
            Have a project in mind? Looking for a senior developer to join your team? Or just
            want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Availability */}
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-highlight rounded-full animate-pulse" />
                <span className="font-mono text-sm text-highlight">Currently Available</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Open to full-time roles, contracts, and freelance projects.
                Typical response time: <span className="text-text-primary font-medium">within 24 hours</span>.
              </p>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <MapPin size={14} className="text-accent" />
                  London, UK — Open to remote
                </div>
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Clock size={14} className="text-accent" />
                  GMT / BST timezone
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ background: `${link.color}15` }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-mono">{link.label}</div>
                    <div className="text-sm text-text-primary font-semibold group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 bg-surface rounded-2xl border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-text-muted mb-2 block">
                    Name <span className="text-accent-3">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 font-body"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-text-muted mb-2 block">
                    Email <span className="text-accent-3">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 font-body"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-text-muted mb-2 block">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 font-body appearance-none cursor-pointer"
                >
                  <option value="">Select a topic...</option>
                  <option value="job">Full-time opportunity</option>
                  <option value="contract">Contract / Freelance project</option>
                  <option value="collab">Open source collaboration</option>
                  <option value="consulting">Technical consulting</option>
                  <option value="other">Just saying hi!</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-text-muted mb-2 block">
                  Message <span className="text-accent-3">*</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and anything else that's relevant..."
                  required
                  rows={6}
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 font-body resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-highlight/20 text-highlight border border-highlight/30"
                    : "bg-accent text-bg hover:shadow-glow"
                } ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-text-muted font-mono">
                No spam, no newsletters. Just a direct message to my inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
