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
    <motion.h1
      className={`text-4xl sm:text-5xl md:text-7xl font-bold text-center left-1/2 -translate-x-1/2 z-10 ${typingDone ? "absolute" : "fixed"
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
          words={[title]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          delaySpeed={1000}
        />
      )}
      {typingDone && title}
    </motion.h1>
  );
};