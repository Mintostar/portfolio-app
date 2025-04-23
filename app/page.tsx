"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center">
        {/* タイピングテキスト */}
        <motion.h1
          className="text-5xl font-bold"
          initial={{ y: 0 }}
          animate={showLinks ? { y: -20 } : { y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} // テキスト移動のアニメーション。0.7秒で上に移動
        >
          <Typewriter
            words={["Hi!!, I’m XXX. It’s my portfolio!"]}
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
                <Button variant="outline">About</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact</Button>
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
