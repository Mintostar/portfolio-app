"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const BackButton = () => {
  const router = useRouter();

  const animationProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 3.5, duration: 0.5 },
  };

  return (
    <motion.div
      {...animationProps}
      className="text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition cursor-pointer absolute top-4 left-4"
      onClick={() => router.push("/")}
    >
      <ArrowLeft className="w-6 h-6" />
    </motion.div>
  );
};
