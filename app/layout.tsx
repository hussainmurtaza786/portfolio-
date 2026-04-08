import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Hussain — Fullstack Developer",
  description:
    "Fullstack Developer specializing in React, Next.js, Node.js and Typescript. Building scalable, performant applications.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Hussain" }],
  openGraph: {
    title: "Hussain — Fullstack Developer",
    description: "Senior Fullstack Developer specializing in React, Next.js, Node.js & cloud architecture.",
    type: "website",
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
