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
    { name: "JavaScript / TypeScript", level: 5, description: "いい感じに書けます。" },
    { name: "Next.js / React", level: 4, description: "いい感じに書けます。" },
    { name: "Python", level: 3 },
    { name: "Git / Docker", level: 4, description: "いい感じに書けます。" },
    { name: "Figma", level: 3 },
  ];

  const StarRating = ({ level }: { level: number }) => {
    const baseDelay = 2.7;

    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ color: "#d1d5db" }}
            animate={{ color: index < level ? "#000000" : "#d1d5db" }}
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
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <BackButton />

      <AnimatedTitle title="About" typingDelay={2500} />

      {typingDone && (
        <section className="flex flex-col gap-8 mt-48 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
          {/* 自己紹介カード */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 1.2 }}
          >
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">自己紹介</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  仮置きの文章。<br />
                  test
                  test
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
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">スキルセット</h2>
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
                      ★★★★★ : 学生レベルでは十分な理解と実装力あり。個人開発・課題制作を自走して完成できる。
                    </li>
                    <li>
                      ★★★★☆ : 基本的な実装をスムーズに行える。応用にも挑戦できるレベル。
                    </li>
                    <li>
                      ★★★☆☆ : 基礎的な技術・概念を理解し、サンプルや指示に沿って開発可能。
                    </li>
                    <li>★★☆☆☆ : 学習途中。簡単なサンプルコードを読み書きできる。</li>
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
            <Card className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">リンク</h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <motion.a
                    href="https://github.com/yourname"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex items-center gap-2 text-primary transition"
                  >
                    <Github className="w-6 h-6" /> GitHub
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