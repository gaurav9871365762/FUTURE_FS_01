import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ChevronDown,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import Scene from "./3D/scene";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 dark:to-primary/5" />

      {/* Floating Dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative mx-auto w-40 h-40 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow" />
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-dark">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mx-auto">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I’m{" "}
            <span className="gradient-text">Gaurav Maurya</span>
          </h1>

          {/* Typewriter */}
          <div className="text-2xl md:text-3xl font-semibold h-12">
            <span className="gradient-text">
              <Typewriter
                words={roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I build modern, scalable, and user-focused web applications using
            React, Node.js, and clean UI principles. Passionate about learning
            and creating real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Rocket size={20} />
              Let’s Connect
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-2xl mx-auto">
            {[
              { value: "15+", label: "Projects" },
              { value: "1+", label: "Years Learning" },
              { value: "100%", label: "Dedication" },
              { value: "∞", label: "Growth" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-effect p-4 rounded-xl text-center"
              >
                <div className="text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center">
          <ChevronDown size={24} className="text-gray-400" />
          <span className="text-sm text-gray-500 mt-2">
            Scroll down
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
