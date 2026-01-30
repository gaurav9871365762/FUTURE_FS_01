import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Calendar, MapPin, BookOpen, 
  GraduationCap, Target, Heart 
} from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "BM GROUP OF INSTITUTIONS (affiliated to GURUGRAM UNIVERSITY)",
      year: "2023 - 2027",
      grade: "CGPA: 7.1/10",
      highlights: ["PASSSED ANY HOW", "University lister in all semsester" ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "SSB INTER COLLEGE",
      year: "2021 - 2023",
      grade: "Percentage: 81.0%",
      highlights: ["BRILLIANT AMONG ALL in 12th Board Exams", "Science Stream"]
    }
  ];

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "FUTURE INTERN",
      duration: "Summer 2026",
      description: "Worked on Azure Cloud Services",
      tech: ["Azure", "React"]
    },
    {
      role: "Frontend Developer Intern",
      company: "IN COLLEGE PROJECT",
      duration: "Winter 2025",
      description: "Developed responsive components for Google Drive's web interface",
      tech: ["React", "TypeScript", "Material-UI"]
    },
   
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-3 text-primary" />
                My Journey
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Hello! I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                My journey began with curiosity about how websites work, which evolved into building 
                complex web applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in creating responsive, performant, and accessible web applications using 
                React, Node.js, and modern development practices. My focus is on writing clean, 
                maintainable code and creating exceptional user experiences.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <MapPin />, label: "Based in", value: "Bangalore, India" },
                  { icon: <Target />, label: "Status", value: "Open to Work" },
                  { icon: <Calendar />, label: "Experience", value: "3+ Years" },
                  { icon: <Heart />, label: "Passion", value: "Open Source" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 border-l-2 border-primary last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-primary" />
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <p className="text-primary">{edu.institution}</p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.grade}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-primary" />
                Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">My Philosophy</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Clean Code",
                    description: "Writing maintainable, scalable, and well-documented code"
                  },
                  {
                    title: "User First",
                    description: "Creating intuitive and accessible user experiences"
                  },
                  {
                    title: "Continuous Learning",
                    description: "Staying updated with emerging technologies and best practices"
                  },
                  {
                    title: "Collaboration",
                    description: "Believing in the power of teamwork and open communication"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;