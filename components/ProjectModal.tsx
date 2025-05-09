import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      aria-label="プロジェクト詳細モーダル"
    >
      <motion.div
        className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 max-w-full sm:max-w-4xl w-full max-h-screen overflow-y-auto relative border border-gray-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition"
          aria-label="閉じる"
        >
          ✕
        </button>

        <div className="space-y-6 text-gray-800">
          <div className="border-b pb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {project.date}
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                概要
              </h3>
              <p>{project.description}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                背景と目的
              </h3>
              <p>{project.background}</p>
            </section>

            {project?.features?.length > 0 && (
              <section>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                  主な機能
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {project?.techStack?.length > 0 && (
              <section>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                  使用技術スタック
                </h3>
                <ul className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm shadow-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                学んだこと
              </h3>
              <p>{project.learnings}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                工夫した点
              </h3>
              <p>{project.highlights}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                反省点
              </h3>
              <p>{project.reflections}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                今後の展望
              </h3>
              <p>{project.futurePlans}</p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center"
              >
                <FaGithub className="w-7 h-7 hover:text-black transition" />
              </a>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="サイトを見る"
                >
                  <FiExternalLink className="w-5 h-5" />
                  サイトを見る
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
