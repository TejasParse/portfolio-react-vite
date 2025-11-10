import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from "motion/react"
import python from "./icons/py_icon.png";
import cpp from "./icons/cpp_icon.png";
import java from "./icons/java_icon.png";
import javascript from "./icons/javascript.svg";
import c_lang from "./icons/c_lang.svg";
import react from "./icons/react.svg";
import node from "./icons/node_icon.png";
import express from "./icons/express_icon.png";
import tailwind from "./icons/tailwind.svg";
import android from "./icons/android.svg";
import bootstrap from "./icons/bootstrap.svg";
import tensorflow from "./icons/tensorflow.svg";
import pytorch from "./icons/pytorch.svg";
import pandas from "./icons/pandas.svg";
import scikit from "./icons/scikit.png";
import opencv from "./icons/opencv.svg";
import mongodb from "./icons/mongodb_icon.webp";
import mysql from "./icons/mysql_icon.png";
import azure from "./icons/azure.svg";
import github from "./icons/github_icon.png"
import typescript from "./icons/typescript.png"
import postgres from "./icons/postgre.png"
import aws from "./icons/aws.webp"
import numpy from "./icons/numpy.webp"

// Skill data structure
const skillsData = {
  categories: [
    {
      id: 'languages',
      name: 'Languages',
      x: 20,
      y: 20,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Python', icon: python, level: 90 },
        { name: 'JavaScript', icon: javascript, level: 95 },
        { name: 'TypeScript', icon: typescript, level: 90 },
        { name: 'Go', icon: javascript, level: 75 },
        { name: 'HTML', icon: javascript, level: 95 },
        { name: 'CSS', icon: tailwind, level: 95 },
        { name: 'C/C++', icon: cpp, level: 80 },
        { name: 'Kotlin', icon: java, level: 75 },
      ]
    },
    {
      id: 'software-dev',
      name: 'Software Dev',
      x: 85,
      y: 40,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'React', icon: react, level: 95 },
        { name: 'Next.js', icon: react, level: 90 },
        { name: 'Tailwind', icon: tailwind, level: 90 },
        { name: 'Bootstrap', icon: bootstrap, level: 85 },
        { name: 'Node.js', icon: node, level: 90 },
        { name: 'FastAPI', icon: python, level: 85 },
        { name: 'Flask', icon: python, level: 85 },
        { name: 'GraphQL', icon: javascript, level: 80 },
        { name: 'Socket.io', icon: node, level: 85 },
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      x: 8,
      y: 60,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'PostgreSQL', icon: postgres, level: 90 },
        { name: 'MongoDB', icon: mongodb, level: 90 },
        { name: 'MySQL', icon: mysql, level: 85 },
        { name: 'Redis', icon: postgres, level: 80 },
        { name: 'SQLite', icon: mysql, level: 85 },
        { name: 'DynamoDB', icon: aws, level: 75 },
        { name: 'Elasticsearch', icon: mongodb, level: 75 },
      ]
    },
    {
      id: 'data-ml',
      name: 'Data & ML',
      x: 60,
      y: 20,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Pandas', icon: pandas, level: 90 },
        { name: 'NumPy', icon: numpy, level: 90 },
        { name: 'Scikit-learn', icon: scikit, level: 85 },
        { name: 'PyTorch', icon: pytorch, level: 85 },
        { name: 'Apache Kafka', icon: python, level: 75 },
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      x: 40,
      y: 45,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'Docker', icon: azure, level: 85 },
        { name: 'Git', icon: github, level: 95 },
        { name: 'GitHub', icon: github, level: 95 },
        { name: 'GitHub Actions', icon: github, level: 85 },
        { name: 'AWS', icon: aws, level: 90 },
        { name: 'Azure', icon: azure, level: 85 },
      ]
    },
  ]
};

// Animated Skill Node Component
const SkillNode = ({ category, index, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${category.x}%`,
        top: `${category.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(category.id);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Pulsing outer ring */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-20`}
        animate={{
          scale: isHovered ? [1, 1.4, 1] : 1,
          opacity: isHovered ? [0.2, 0, 0.2] : 0.2,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
        style={{
          width: '200px',
          height: '200px',
          left: '-40px',
          top: '-40px',
        }}
      />

      {/* Main category card */}
      <motion.div
        className={`relative bg-gradient-to-br ${category.color} rounded-2xl p-6 shadow-2xl cursor-pointer overflow-hidden`}
        style={{
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          boxShadow: isHovered
            ? '0 20px 60px rgba(0,0,0,0.5)'
            : '0 10px 30px rgba(0,0,0,0.3)',
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
        />

        <div className="relative z-10 text-center">
          <h3 className="text-white font-bold text-base">{category.name}</h3>
        </div>
      </motion.div>

      {/* Orbiting skill circles on hover */}
      <AnimatePresence>
        {isHovered && category.skills.map((skill, idx) => {
          const totalSkills = category.skills.length;
          const angle = (idx / totalSkills) * 2 * Math.PI - Math.PI / 2; // Start from top
          const radius = 140; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                zIndex: 10,
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: x,
                y: y,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {/* Skill circle */}
              <motion.div
                className="relative bg-gray-900/95 backdrop-blur-sm rounded-full p-3 shadow-xl border-2 border-white/20"
                style={{
                  width: '70px',
                  height: '70px',
                  transform: 'translate(-50%, -50%)',
                }}
                whileHover={{
                  scale: 1.15,
                  borderColor: 'rgba(255,255,255,0.5)',
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain mb-1"
                  />
                  <div className="text-white text-[9px] font-medium text-center leading-tight">
                    {skill.name}
                  </div>
                </div>

                {/* Skill level indicator ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" style={{ zIndex: -1 }}>
                  <circle
                    cx="35"
                    cy="35"
                    r="32"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="35"
                    cy="35"
                    r="32"
                    fill="none"
                    stroke="url(#skillGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 300" }}
                    animate={{ 
                      strokeDasharray: `${(skill.level / 100) * 200} 300`
                    }}
                    transition={{ duration: 0.8, delay: idx * 0.08 + 0.3 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

// Animated Connection Lines
const ConnectionLines = ({ hoveredNode }) => {
  const connections = [
    { from: 0, to: 1 }, // languages to web-dev
    { from: 0, to: 2 }, // languages to databases
    { from: 0, to: 3 }, // languages to data-ml
    { from: 0, to: 4 }, // languages to cloud-devops
    { from: 1, to: 2 }, // web-dev to databases
    { from: 1, to: 4 }, // web-dev to cloud-devops
    { from: 2, to: 3 }, // databases to data-ml
    { from: 3, to: 4 }, // data-ml to cloud-devops
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
        </linearGradient>
        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.8)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />
        </linearGradient>
      </defs>
      {connections.map((conn, idx) => {
        const from = skillsData.categories[conn.from];
        const to = skillsData.categories[conn.to];
        const isActive =
          hoveredNode === from.id || hoveredNode === to.id;

        return (
          <motion.line
            key={`${conn.from}-${conn.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#lineGradient)"
            strokeWidth={isActive ? 0.3 : 0.15}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: isActive ? 1.0 : 0.6,
              strokeWidth: isActive ? 0.3 : 0.15,
            }}
            transition={{
              pathLength: { duration: 1, delay: idx * 0.1 },
              opacity: { duration: 0.3 },
              strokeWidth: { duration: 0.3 },
            }}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

const Skills = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="flex flex-col justify-center py-3 md:px-24 my-96">
      <motion.div
        className="text-4xl font-bold mb-4 orbitron-font-style pb-3 border-b-2 border-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['Skills & Achievements'],
            autoStart: true,
            loop: true
          }}
        />
      </motion.div>

      {/* Interactive Skill Graph */}
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl"
        style={{ height: '700px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
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

        {/* Connection Lines */}
        <ConnectionLines hoveredNode={hoveredNode} />

        {/* Skill Nodes */}
        {skillsData.categories.map((category, index) => (
          <SkillNode
            key={category.id}
            category={category}
            index={index}
            onHover={setHoveredNode}
          />
        ))}

        {/* Instruction text */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Hover over categories to explore skills
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills