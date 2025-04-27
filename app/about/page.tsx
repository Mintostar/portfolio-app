"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BackButton } from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function AboutPage() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "JavaScript / TypeScript", level: 5 },
    { name: "Next.js / React", level: 4 },
    { name: "Python", level: 3 },
    { name: "Git / Docker", level: 4 },
    { name: "Figma", level: 3 },
  ];

  // 星をレベルに基づいて表示する関数
  const getStars = (level: number) => {
    const fullStars = "★".repeat(level);
    const emptyStars = "☆".repeat(5 - level);
    return fullStars + emptyStars;
  };

  return (
    <main className="relative min-h-screen px-4 py-8">
      <BackButton />

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 1, y: 0 }}
        animate={typingDone ? { scale: 0.7, y: "-40vh" } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {!typingDone && (
          <Typewriter
            words={["About"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={1000}
          />
        )}
        {typingDone && "About"}
      </motion.h1>

      {typingDone && (
        <section className="flex flex-col gap-8 mt-48 max-w-3xl mx-auto">

          {/* 自己紹介カード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">自己紹介</h2>
                <p className="text-muted-foreground leading-relaxed">
                  仮置きの文章。<br />
                  test
                  test
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* スキルセットカード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">スキルセット</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{getStars(skill.level)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* リンクカード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">リンク</h2>
                <div className="flex gap-6">
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
