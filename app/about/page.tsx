"use client";

import { useState, useEffect } from "react";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export default function AboutPage() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      name: "JavaScript / TypeScript",
      level: 5,
      description: "PBL、進級製作ともに使った。",
    },
    {
      name: "Next.js / React",
      level: 5,
      description: "進級製作に使った。コンポーネント設計や状態管理ができる。",
    },
    {
      name: "Python",
      level: 4,
      description:
        "個人開発のゲームファイル翻訳ツールを作った。データ分析に興味がある。",
    },
    {
      name: "HTML / CSS",
      level: 4,
      description:
        "基本的なコードは書ける。頑張れば、レスポンシブデザイン対応できる。",
    },
    {
      name: "Java",
      level: 3,
      description:
        "基本的なコードは書けるが、しっかり何かを開発したことはない。",
    },
    {
      name: "PHP",
      level: 2,
      description: "学校の授業でWordpressを触ったときに使った。",
    },
    { name: "Kotlin", level: 3, description: "簡単なAndroidアプリは作れる。" },
    {
      name: "Git / GitHub",
      level: 5,
      description:
        "バージョン管理やチーム開発で活用。ブランチ運用やプルリクエストの作成が可能。",
    },
    {
      name: "Figma",
      level: 1,
      description: "UI/UXデザインツールとして使用。簡単なデザインは作れる。",
    },
    {
      name: "Linux",
      level: 5,
      description:
        "学校使っていた。開発はWindowsよりこっちがやりやすく感じる。大好き。",
    },
    {
      name: "Firebase",
      level: 4,
      description:
        "進級製作のときに使った。認証やデータベースを活用したWebアプリケーションが作れる",
    },
    {
      name: "Tailwind CSS",
      level: 5,
      description:
        "最近はノーマルなCSSよりこっちを使っている。ダークモードの実装とかが楽。",
    },
  ];

  const StarRating = ({ level }: { level: number }) => {
    const baseDelay = 2.7;

    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ color: "#d1d5db" }}
            animate={{
              color:
                index < level
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "#facc15"
                    : "#000000"
                  : "#d1d5db",
            }}
            transition={{
              delay: baseDelay + index * 0.4,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="text-lg"
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <BackButton />

      <AnimatedTitle title="About me" typingDelay={2500} />

      {typingDone && (
        <section className="flex flex-col gap-8 mt-48 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
          {/* 自己紹介カード */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 1.2 }}
          >
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">自己紹介</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  はじめまして、和希と申します。
                  <br />
                  現在、ITカレッジ沖縄の学生としてプログラミングを学びながら、個人開発や課題制作に取り組んでいます。
                  <br />
                  最近は、Next.jsとTypeScriptを使ったWebアプリケーションの開発に力を入れています。
                  <br />
                  ポートフォリオでは、これまでの学びや制作物を通じて、自分のスキルや成長の軌跡をまとめています。
                  <br />
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* スキルセットカード */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 1.5 }}
          >
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                  スキルセット
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">{skill.name}</span>
                        <StarRating level={skill.level} />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* スキル評価基準 */}
                <div className="mt-8 border-t pt-6 text-xs sm:text-sm text-muted-foreground space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold">
                    スキルレベル基準
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      ★★★★★ :
                      学生レベルでは十分な理解と実装力あり。個人開発・課題制作を自走して完成できる。
                    </li>
                    <li>
                      ★★★★☆ :
                      基本的な実装をスムーズに行える。応用にも挑戦できるレベル。
                    </li>
                    <li>
                      ★★★☆☆ :
                      基礎的な技術・概念を理解し、サンプルや指示に沿って開発可能。
                    </li>
                    <li>
                      ★★☆☆☆ : 学習途中。簡単なサンプルコードを読み書きできる。
                    </li>
                    <li>★☆☆☆☆ : 初学習段階。今後習得予定。</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* リンクカード */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 1.8 }}
          >
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">リンク</h2>
                <div className="flex flex-row gap-6">
                  <motion.a
                    href="https://github.com/itc-s23023"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex items-center gap-2 text-primary transition"
                  >
                    <Github className="w-6 h-6" /> GitHub(学校用)
                  </motion.a>
                  <motion.a
                    href="https://github.com/Mintostar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex items-center gap-2 text-primary transition"
                  >
                    <Github className="w-6 h-6" /> GitHub(個人用)
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}
    </main>
  );
}
