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
  features: string[];
  learnings: string;
  highlights: string;
}

const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人ポートフォリオサイト。",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
    background:
      "求職活動に向けて自分のスキル・実績をまとめるために設計・実装しました。SEO・アニメーション・アクセシビリティなど、現場で求められる要素を意識しています。",
    techStack: ["Next.js", "shadcn/ui", "Framer Motion", "TypeScript", "Tailwind CSS"],
    features: [
      "レスポンシブ対応のトップページ・詳細ページ",
      "モーダルでの動的な詳細表示",
      "アニメーションによるUX強化",
      "GitHub・公開リンクの導線設計",
    ],
    learnings:
      "TypeScriptの型安全性を保ちつつ、ユーザー体験を意識した設計の重要性を学びました。",
    highlights: "Framer Motionと組み合わせた自然なトランジション設計。",
  },
  {
    title: "ToDoアプリ",
    description: "ReactとFirebaseを活用したリアルタイムToDoアプリ。",
    githubUrl: "https://github.com/yourname/todo-app",
    siteUrl: "https://yourtodoapp.com",
    date: "2025/03/20",
    background:
      "リアルタイムデータの操作と状態管理を中心に、基本機能の設計・UIの改善を重視して構築しました。",
    techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    features: [
      "リアルタイムでのタスク追加・削除・更新",
      "Firebase Authenticationによるログイン管理",
      "Tailwindによる柔軟なUIスタイリング",
    ],
    learnings:
      "クライアント状態とサーバー状態の整合性を保つ工夫の重要性を体感しました。",
    highlights: "Firebaseとのデータ同期とパフォーマンス最適化。",
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
    <main className="relative min-h-screen px-4 py-8 bg-white">
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
        <section className="mt-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            aria-label="プロジェクト詳細モーダル"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 text-2xl transition"
                aria-label="閉じる"
              >
                ✕
              </button>

              <div className="space-y-8 text-gray-800">
                <div className="border-b pb-4">
                  <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{selectedProject.date}</p>
                </div>

                <div className="space-y-6 text-[16px] leading-relaxed">
                  <section>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">概要</h3>
                    <p>{selectedProject.description}</p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">背景と目的</h3>
                    <p>{selectedProject.background}</p>
                  </section>

                  {selectedProject?.features?.length > 0 && (
                    <section>
                      <h3 className="font-semibold text-lg text-gray-700 mb-1">主な機能</h3>
                      <ul className="list-disc pl-5">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {selectedProject?.techStack?.length > 0 && (
                    <section>
                      <h3 className="font-semibold text-lg text-gray-700 mb-1">使用技術スタック</h3>
                      <ul className="flex flex-wrap gap-3">
                        {selectedProject.techStack.map((tech, i) => (
                          <li
                            key={i}
                            className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm shadow-sm"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}


                  <section>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">学んだこと</h3>
                    <p>{selectedProject.learnings}</p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">工夫した点</h3>
                    <p>{selectedProject.highlights}</p>
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-xl text-sm text-center"
                    >
                      GitHub リポジトリ
                    </a>
                    <a
                      href={selectedProject.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-sm text-center"
                    >
                      サイトを見る
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
