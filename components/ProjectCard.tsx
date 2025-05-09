"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  date?: string;
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
      <Card className="w-full max-w-xl mx-auto mt-6 flex flex-col justify-between h-full">
        <CardContent className="p-5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>

          {/* 日付を下に配置 */}
          {project.date && (
            <div className="mt-auto pt-6 text-xs text-gray-400 text-right">
              {project.date}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
