"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [showLinks, setShowLinks] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToggle(true);
    }, 4000); // アニメーション終了後にボタンを表示
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center text-gray-800 dark:text-gray-200">
        {/* タイピングテキスト */}
        <motion.h1
          className="text-5xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ y: 0 }}
          animate={showLinks ? { y: -20 } : { y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // テキスト移動のアニメーション。0.7秒で上に移動
        >
          <Typewriter
            words={["Hi! I'm KAZUKI. Welcome to my portfolio!"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        {/* リンク部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showLinks ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8, // アニメーションの時間。0.8秒で表示
            ease: "easeOut",
            delay: 0.9, // テキスト移動完了後 0.9秒後に開始
          }}
          className="mt-8 space-x-4 min-h-[48px]"
        >
          {showLinks && (
            <>
              <Link href="/projects">
                <Button variant="outline">Projects</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">About me</Button>
              </Link>
            </>
          )}
        </motion.div>

        {showToggle && (
          <button
            onClick={toggleDarkMode}
            className={`fixed top-4 right-4 flex items-center justify-center w-10 h-10 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-full shadow-md transition
              ${isDarkMode ? 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700' : 'bg-white hover:bg-gray-200'}`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </main>
  );
}
