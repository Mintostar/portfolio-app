"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  typingDelay?: number; // タイピングアニメーションの遅延
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  typingDelay = 2500,
}) => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), typingDelay);
    return () => clearTimeout(timer);
  }, [typingDelay]);

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen absolute"
      initial={{ scale: 1 }}
      animate={
        typingDone
          ? { scale: 0.7, y: "-42vh" }
          : { scale: 1, y: "0vh" }
      }
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
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