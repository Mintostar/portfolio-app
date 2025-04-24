"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl?: string;
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

          {/* リンクと日付を下に配置 */}
          <div className="mt-auto pt-6 flex items-center text-sm text-gray-500">
            <div className="flex space-x-4 items-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5 hover:text-black transition" />
              </a>

              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  Visit Site
                </a>
              )}
            </div>

            {project.date && (
              <span className="ml-auto text-xs text-gray-400">
                {project.date}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
