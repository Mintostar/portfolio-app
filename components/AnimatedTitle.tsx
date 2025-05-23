"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  typingDelay?: number; // タイピングアニメーションの遅延
}

const DEFAULT_TYPING_DELAY = 2500;

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  typingDelay = DEFAULT_TYPING_DELAY,
}) => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), typingDelay);
    return () => clearTimeout(timer);
  }, [typingDelay]);

  const animationProps = {
    initial: { scale: 1 },
    animate: typingDone ? { scale: 0.7, y: "-42vh" } : { scale: 1, y: "0vh" },
    transition: { duration: 1, delay: 0.3 },
  };

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen absolute z-0"
      {...animationProps}
    >
      <div className="text-gray-900 dark:text-gray-100 font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        {!typingDone ? (
          <Typewriter
            words={[title]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={1000}
          />
        ) : (
          <span>
            {title}
            <span style={{ visibility: "hidden" }}>_</span>
          </span>
        )}
      </div>
    </motion.div>
  );
};
