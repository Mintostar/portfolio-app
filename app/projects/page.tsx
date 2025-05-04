"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/BackButton";
import { AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export default function ProjectsPage() {
  const [typingDone, setTypingDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-white">
      <BackButton />

      <AnimatedTitle title="Projects" typingDelay={2500} />

      {typingDone && (
        <section className="mt-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(project)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </section>
      )}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </main>
  );
}