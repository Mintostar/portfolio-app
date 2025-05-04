"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/BackButton";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

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

      <motion.h1
        className={`text-5xl md:text-7xl font-bold text-center left-1/2 -translate-x-1/2 z-10 ${typingDone ? "absolute" : "fixed"
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
            words={["Projects"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={1000}
          />
        )}
        {typingDone && "Projects"}
      </motion.h1>

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