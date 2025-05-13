"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/BackButton";
import { AnimatePresence, motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { MdSort } from "react-icons/md";

export default function ProjectsPage() {
  const [typingDone, setTypingDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".dropdown-menu")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
    setIsDropdownOpen(false);
  };

  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      {typingDone && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-between items-center"
        >
          <BackButton />
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleDropdown}
              className="p-2 rounded-full shadow-sm focus:outline-none transition duration-200 ease-in-out transform hover:scale-110 bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              <MdSort size={24} className="text-black dark:text-white" />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-lg shadow-md dropdown-menu dark:bg-gray-700 dark:text-white dark:border-gray-600"
              >
                <button
                  onClick={() => handleSortChange("asc")}
                  className="block w-full px-4 py-2 text-left bg-white hover:bg-gray-100 rounded-t-lg transition duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  昇順 (日付)
                </button>
                <button
                  onClick={() => handleSortChange("desc")}
                  className="block w-full px-4 py-2 text-left bg-white hover:bg-gray-100 rounded-b-lg transition duration-200 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  降順 (日付)
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      <div className="relative">
        <AnimatedTitle title="Projects" typingDelay={2500} />
      </div>

      {typingDone && (
        <section className="mt-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 relative z-10 text-gray-800 dark:text-gray-200">
          {sortedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative"
              onClick={() => handleCardClick(project)}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
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
