import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Zap } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glass-effect rounded-2xl overflow-hidden h-full card-hover">
        {/* Project Image Header */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">{"</>"}</div>
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold flex items-center">
              <Star size={12} className="mr-1" />
              Featured
            </div>
          )}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              {project.tech[0]}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Zap size={14} className="mr-2 text-yellow-500" />
              Key Achievements
            </div>
            <ul className="space-y-1">
              {project.achievements.slice(0, 2).map((achievement, i) => (
                <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">Code</span>
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live</span>
              </motion.a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.live, '_blank')}
              className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              View Project
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;