'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Skills() {
  const skills = {
    languages: [
      { name: 'JavaScript/TypeScript', level: 90, icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
      { name: 'Go', level: 85, icon: '🔵', color: 'from-blue-400 to-blue-600' },
      { name: 'Rust', level: 80, icon: '🦀', color: 'from-orange-400 to-red-600' },
      { name: 'Python', level: 75, icon: '🐍', color: 'from-green-400 to-blue-600' },
      { name: 'PHP', level: 70, icon: '🐘', color: 'from-purple-400 to-purple-600' },
      { name: 'SQL', level: 80, icon: '🗄️', color: 'from-blue-400 to-indigo-600' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, icon: '📚', color: 'from-gray-400 to-gray-600' },
      { name: 'Docker', level: 85, icon: '🐳', color: 'from-blue-400 to-blue-600' },
      { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-blue-700' },
      { name: 'Figma', level: 70, icon: '🎨', color: 'from-purple-400 to-pink-600' },
      { name: 'PostgreSQL', level: 80, icon: '🐘', color: 'from-blue-500 to-indigo-600' },
      { name: 'Supabase', level: 75, icon: '⚡', color: 'from-green-400 to-green-600' }
    ],
    frameworks: [
      { name: 'Next.js', level: 90, icon: '⚛️', color: 'from-gray-400 to-gray-600' },
      { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-600' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨', color: 'from-teal-400 to-cyan-600' },
      { name: 'Node.js', level: 80, icon: '🟢', color: 'from-green-400 to-green-600' }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Compétences Techniques
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Technologies maîtrisées et outils utilisés dans mes projets de développement
            </motion.p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Langages */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="glass p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">💻</div>
                <h2 className="text-2xl font-bold text-white">Langages</h2>
              </div>
              <div className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Outils */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="glass p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">🛠️</div>
                <h2 className="text-2xl font-bold text-white">Outils</h2>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Frameworks */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="glass p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">⚡</div>
                <h2 className="text-2xl font-bold text-white">Frameworks</h2>
              </div>
              <div className="space-y-4">
                {skills.frameworks.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </motion.div>

        {/* Section compétences transversales */}
        <ScrollReveal delay={0.4}>
          <motion.div
            className="mt-16 glass p-8 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span> Compétences Transversales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Travail d\'équipe', icon: '👥', description: 'Collaboration efficace en groupe' },
                { name: 'Communication', icon: '💬', description: 'Présentation et documentation claire' },
                { name: 'Gestion de projet', icon: '📋', description: 'Méthodologies agiles et planification' },
                { name: 'Résolution de problèmes', icon: '🧩', description: 'Analyse et débogage efficace' }
              ].map((competence, index) => (
                <motion.div
                  key={competence.name}
                  className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-3">{competence.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{competence.name}</h3>
                  <p className="text-gray-400 text-sm">{competence.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </main>
  )
}
}