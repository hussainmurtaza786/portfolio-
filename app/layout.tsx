import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://hussain.dev"),
  title: {
    default: "Hussain — Fullstack Developer | React, Next.js, Node.js",
    template: "%s | Hussain",
  },
  description:
    "Fullstack Developer with 3+ years of experience building scalable web applications using React, Next.js, Node.js, TypeScript, PostgreSQL, and Prisma. Available for full-time roles and freelance projects.",
  keywords: [
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Pakistan",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "Portfolio",
    "Hussain",
    "Hire Developer",
    "Remote Developer",
    "Freelance Developer",
    "React Next.js Developer",
    "Prisma PostgreSQL Developer",
  ],
  authors: [{ name: "Hussain", url: "https://github.com/hussainmurtaza786" }],
  creator: "Hussain",
  publisher: "Hussain",
  openGraph: {
    title: "Hussain — Fullstack Developer | React, Next.js, Node.js",
    description:
      "Fullstack Developer with 3+ years of experience building scalable web applications with React, Next.js, and Node.js.",
    url: "https://hussain.dev",
    siteName: "Hussain — Fullstack Developer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain — Fullstack Developer | React, Next.js, Node.js",
    description:
      "Fullstack Developer with 3+ years of experience building scalable web applications with React, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hussain.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "custom-toast",
            duration: 3000,
            style: {
              background: "#0D1321",
              color: "#E8F4F8",
              border: "1px solid #1E2D45",
              fontFamily: "'DM Sans', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
