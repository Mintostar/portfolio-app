"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const BackButton = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="absolute top-4 left-4 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <ArrowLeft className="w-6 h-6" />
    </motion.div>
  );
};
