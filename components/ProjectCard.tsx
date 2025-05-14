"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  date?: string;
  isDeveloping?: boolean;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick?: () => void;
};

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1.5 + index * 0.3, duration: 0.6 },
  };

  return (
    <motion.div
      className="cursor-pointer w-full h-full"
      {...animationProps}
      onClick={onClick}
    >
      <Card
        className={cn(
          "text-card-foreground gap-6 rounded-xl border shadow-sm w-full h-full max-w-xl mx-auto flex flex-col justify-between",
          "bg-white dark:bg-gray-800"
        )}
      >
        <CardContent className="p-5 flex flex-col justify-between h-full text-gray-800 dark:text-gray-200">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            {project.isDeveloping ? (
              <span className="text-xs text-red-500">開発中</span>
            ) : (
              <span className="text-xs text-green-500">完成</span>
            )}
          </div>

          {project.date && (
            <div className="mt-auto pt-6 text-xs text-gray-400 dark:text-gray-500 text-right">
              {project.date}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
