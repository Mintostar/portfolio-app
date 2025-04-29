"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
  },
  // 他のプロジェクト...
];

export default function ProjectsPage() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen px-4 py-8">
      {/* 戻るボタン */}
      <BackButton />

      {/* タイトルタイピング */}
      <motion.h1
        className={`text-5xl md:text-7xl font-bold text-center left-1/2 -translate-x-1/2 z-10 ${typingDone ? "absolute" : "fixed"
          }`}
        initial={{ top: "50%", scale: 1, translateY: "-50%" }}
        animate={
          typingDone
            ? { top: "10vh", translateY: "0%", scale: 0.7 }
            : { top: "50%", translateY: "-50%", scale: 1 }
        }
        transition={{ duration: 1, delay: 0.3 }}
      >
        {!typingDone && (
          <Typewriter
            words={["Projects"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={1000}
          />
        )}
        {typingDone && "Projects"}
      </motion.h1>


      {typingDone && (
        <section className="mt-[200px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </section>
      )}
    </main>
  );
}
