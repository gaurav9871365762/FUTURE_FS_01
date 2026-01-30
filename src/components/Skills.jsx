import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Palette, 
  Terminal, Server, GitBranch, Cpu 
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryIcons = {
    'Frontend': <Palette />,
    'Backend': <Server />,
    'Tools': <Terminal />,
    'Cloud': <Cloud />,
    'Database': <Database />,
    'All': <Code />
  };

  const filteredSkills = activeCategory === 'All' 
    ? skillsData.flatMap(cat => cat.skills)
    : skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'glass-effect hover:bg-gray-100 dark:hover:bg-dark-light'
              }`}
            >
              {categoryIcons[category]}
              <span className="font-medium">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`glass-effect p-6 rounded-2xl ${
                activeCategory !== 'All' && activeCategory !== category.category ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                  {categoryIcons[category.category]}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{
                          background: hoveredSkill === skill.name 
                            ? `linear-gradient(90deg, ${skill.color}33, ${skill.color})`
                            : undefined
                        }}
                      />
                    </div>

                    {/* Hover Effect */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap z-10"
                      >
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                        Mastery Level: {skill.level}%
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Cpu />,
              title: "Problem Solving",
              description: "200+ LeetCode problems"
            },
            {
              icon: <GitBranch />,
              title: "Version Control",
              description: "Git & GitHub expert"
            },
            {
              icon: <Database />,
              title: "Database Design",
              description: "SQL & NoSQL proficiency"
            },
            {
              icon: <Cloud />,
              title: "Cloud Deployment",
              description: "AWS, Vercel, Netlify"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 rounded-2xl text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;