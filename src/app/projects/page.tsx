'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { projects } from '@/data/projects'

const categories = ['Tous', 'Full-stack', 'IA/Systèmes', 'Front-end', 'PWA/IA', 'Veille']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Mes Projets</h1>
            <p className="text-xl text-gray-300">
              Réalisations techniques couvrant le référentiel BTS SIO
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                className={`glass p-6 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  project.featured ? 'border-blue-500 ring-2 ring-blue-500/20 glow' : 'border-gray-700'
                }`}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                layout
              >
                {project.featured && (
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ⭐ PROJET STAR
                  </motion.div>
                )}

                <motion.h3
                  className="text-xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.tech.slice(0, 3).map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group"
                  >
                    <span>Case Study</span>
                    <motion.span
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">Aucun projet dans cette catégorie.</p>
          </motion.div>
        )}
      </div>
    </main>
  )
}