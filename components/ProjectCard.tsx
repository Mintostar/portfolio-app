"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  date?: string;
  isDeveloping?: boolean;
};

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 + index * 0.3, duration: 0.6 }}
    >
      <Card className="w-full max-w-xl mx-auto mt-6 flex flex-col justify-between h-full bg-white dark:bg-gray-800">
        <CardContent className="p-5 flex flex-col justify-between h-full text-gray-800 dark:text-gray-200">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            {project.isDeveloping && (
              <span className="text-xs text-red-500">開発中</span>
            )}
            {!project.isDeveloping && (
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
