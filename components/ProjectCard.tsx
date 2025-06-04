"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick?: () => void;
};

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1.5 + index * 0.15, duration: 0.5 },
  };

  return (
    <motion.div
      className="cursor-pointer w-full h-full"
      {...animationProps}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 pb-2 max-w-[180px] mx-auto">
        {/* 画像部分 */}
        <motion.div
          className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg"
          style={{
            backgroundImage: `url('${project.imageUrl || "/noimage.png"}')`,
          }}
          layoutId={`project-image-${project.id}`}
        ></motion.div>
        {/* テキスト部分 */}
        <div>
          <p className="text-[#0d141c] dark:text-gray-100 text-sm font-medium leading-tight truncate">
            {project.title}
          </p>
          <p className="text-[#49739c] dark:text-[#8ab4f8] text-xs font-normal leading-tight">
            {project.date || ""}
          </p>
          {/* バッジ部分（もともとのデザイン＋ダークモード色） */}
          {project.isDeveloping ? (
            <div className="flex items-center mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
              <span className="text-xs text-red-500 dark:text-red-400">
                開発中
              </span>
            </div>
          ) : (
            <div className="flex items-center mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-xs text-green-500 dark:text-green-400">
                完成
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
