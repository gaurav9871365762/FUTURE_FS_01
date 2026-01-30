import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  ExternalLink, Github, Star, Eye, 
  Code2, Zap, Users, TrendingUp 
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { X } from "lucide-react";

import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full Stack', '3D', 'Real-time'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, combining design and functionality
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                filter === filterItem
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'glass-effect hover:bg-gray-100 dark:hover:bg-dark-light'
              }`}
            >
              <span className="font-medium">{filterItem}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 50 }}
                className="relative"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#ffffff"
                  glarePosition="all"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  className="flip-card h-full"
                >
                  <div className="flip-card-inner h-full">
                    {/* Front Side */}
                    <div className="flip-card-front h-full">
                      <div className="glass-effect rounded-2xl overflow-hidden h-full card-hover">
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Code2 size={64} className="text-primary/20" />
                          </div>
                          {project.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold">
                              <Star size={12} className="inline mr-1" />
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <div className="flex space-x-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-light"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary"
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
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary"
                              >
                                <ExternalLink size={18} />
                                <span className="text-sm">Live</span>
                              </motion.a>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedProject(project)}
                              className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              View Details
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side (on hover) */}
                    <div className="flip-card-back h-full">
                      <div className="glass-effect rounded-2xl p-6 h-full flex flex-col justify-center">
                        <h4 className="text-xl font-bold mb-4">Achievements</h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <Zap size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="w-full btn-primary"
                          >
                            View Full Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 />, value: '50K+', label: 'Lines of Code' },
              { icon: <Eye />, value: '100K+', label: 'Project Views' },
              { icon: <Users />, value: '1K+', label: 'Users Reached' },
              { icon: <TrendingUp />, value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {selectedProject.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Project Details</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mt-6">
                      <h5 className="font-bold mb-3">Achievements</h5>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Star size={16} className="text-yellow-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-4 rounded-xl glass-effect"
                      >
                        <div className="flex items-center space-x-3">
                          <ExternalLink />
                          <div>
                            <div className="font-bold">Live Demo</div>
                            <div className="text-sm text-gray-500">Visit deployed application</div>
                          </div>
                        </div>
                        <ExternalLink size={20} className="text-primary" />
                      </motion.a>

                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-4 rounded-xl glass-effect"
                      >
                        <div className="flex items-center space-x-3">
                          <Github />
                          <div>
                            <div className="font-bold">Source Code</div>
                            <div className="text-sm text-gray-500">View on GitHub</div>
                          </div>
                        </div>
                        <Github size={20} className="text-primary" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;