"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/BackButton";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl: string;
  date: string;
  background: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人サイト",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
    background: "自身の開発スキルをアピールするために作成したポートフォリオサイト。",
    techStack: ["Next.js", "shadcn/ui", "Framer Motion", "TypeScript"],
  },
  {
    title: "ToDoアプリ",
    description: "ReactとFirebaseによる簡易タスク管理アプリ",
    githubUrl: "https://github.com/yourname/todo-app",
    siteUrl: "https://yourtodoapp.com",
    date: "2025/03/20",
    background: "状態管理とリアルタイムデータベースの連携を試すために開発。",
    techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "ブログCMS",
    description: "SanityとNext.jsを使ったブログCMS",
    githubUrl: "https://github.com/yourname/blog-cms",
    siteUrl: "https://yourblogcms.com",
    date: "2025/02/10",
    background: "ヘッドレスCMSとの統合に挑戦したプロジェクト。",
    techStack: ["Next.js", "Sanity", "TypeScript", "Vercel"],
  },
];

export default function ProjectsPage() {
  const [typingDone, setTypingDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="relative min-h-screen px-4 py-8">
      <BackButton />

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
            <div key={i} onClick={() => handleCardClick(project)}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </section>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl w-full relative overflow-y-auto max-h-[90vh] border border-gray-200"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl transition"
                aria-label="閉じる"
              >
                ✕
              </button>

              <div className="space-y-8">
                <div className="border-b pb-4">
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-800">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedProject.date}
                  </p>
                </div>

                <section>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    プロジェクト概要
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    {selectedProject.description}
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    背景と目的
                  </h3>
                  <p className="text-gray-700 text-[16px] leading-relaxed">
                    {selectedProject.background}
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    使用技術スタック
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-xl text-sm text-center transition"
                  >
                    GitHub リポジトリ
                  </a>
                  <a
                    href={selectedProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-sm text-center transition"
                  >
                    サイトを見る
                  </a>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
