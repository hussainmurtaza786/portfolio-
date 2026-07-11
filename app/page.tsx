import Navbar from "./src/components/Navbar";
import Hero from "./src/sections/Hero";
import About from "./src/sections/About";
import Skills from "./src/sections/Skills";
import Projects from "./src/sections/Projects";
import Experience from "./src/sections/Experience";
import Contact from "./src/sections/Contact";
import Footer from "./src/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hussain",
  alternateName: "Hussain Murtaza",
  url: "https://hussain.dev",
  image: "https://hussain.dev/og-image.png",
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack Developer with 3+ years of experience building scalable web applications using React, Next.js, Node.js, TypeScript, and PostgreSQL.",
  email: "hussainmurtaza5222@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/hussainmurtaza786",
    "https://www.linkedin.com/in/hussain-m-b3ab17404",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Payload CMS",
    "Fullstack Development",
    "Web Development",
    "Frontend Development",
    "Backend Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Fullstack Developer",
    occupationLocation: {
      "@type": "Country",
      name: "Pakistan",
    },
  },
};

export default function Home() {
  return (
    <main className="relative bg-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
