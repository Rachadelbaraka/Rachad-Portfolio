'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Experience() {
  const experiences = [
    {
      title: 'Stage Développeur Web Full-Stack',
      company: 'MoreFix',
      period: 'Septembre 2024 - Mars 2025',
      duration: '6 mois',
      type: 'stage',
      description: 'Développement d\'une plateforme e-commerce complète avec Next.js et Firebase. Conception de l\'architecture, implémentation des fonctionnalités front-end et back-end, déploiement et optimisation des performances.',
      achievements: [
        'Développement d\'une plateforme e-commerce responsive',
        'Intégration de Firebase pour l\'authentification et la base de données',
        'Optimisation des performances et du SEO',
        'Mise en place de tests automatisés'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vercel'],
      icon: '🚀',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Stage Support Technique',
      company: 'TechPC',
      period: 'Mars 2024 - Juillet 2024',
      duration: '4 mois',
      type: 'stage',
      description: 'Support technique et maintenance de systèmes informatiques. Résolution d\'incidents, optimisation des performances, mise à jour des infrastructures et formation des utilisateurs.',
      achievements: [
        'Résolution de plus de 95% des incidents en moins de 24h',
        'Optimisation des performances des systèmes (+30%)',
        'Mise à jour et sécurisation de l\'infrastructure',
        'Formation de 15 utilisateurs aux nouveaux outils'
      ],
      skills: ['Maintenance système', 'Résolution incidents', 'Windows Server', 'Active Directory', 'Virtualisation'],
      icon: '🛠️',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Projet Personnel - Application Web',
      company: 'Développement Indépendant',
      period: 'Janvier 2024 - Mars 2024',
      duration: '3 mois',
      type: 'projet',
      description: 'Développement d\'une application web de gestion de tâches avec React et Node.js. Implémentation complète du front-end et back-end avec une API REST.',
      achievements: [
        'Développement full-stack complet',
        'Architecture API REST robuste',
        'Interface utilisateur intuitive et responsive',
        'Déploiement sur Heroku avec CI/CD'
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Heroku'],
      icon: '💻',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
              Expérience Professionnelle
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Parcours professionnel et projets marquants dans le développement informatique
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="relative mb-12 ml-20"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute -left-16 top-8 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-lg shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Experience card */}
                  <motion.div
                    className="glass p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'stage' ? 'bg-blue-600/20 text-blue-300' : 'bg-purple-600/20 text-purple-300'
                          }`}>
                            {exp.type === 'stage' ? 'Stage' : 'Projet'}
                          </span>
                        </div>
                        <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-2">
                            <span className="text-blue-400">📅</span>
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="text-green-400">⏱️</span>
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-yellow-400">🏆</span> Réalisations principales
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.1 }}
                          >
                            <span className="text-green-400 mt-1">✓</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-blue-400">🛠️</span> Technologies utilisées
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-600/50 transition-colors"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>

        {/* Formation section */}
        <ScrollReveal delay={0.5}>
          <motion.div
            className="mt-20 glass p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🎓</span> Formation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="text-xl font-semibold text-white mb-2">BTS SIO Option SLAM</h3>
                <p className="text-gray-300 mb-2">Lycée Technique</p>
                <p className="text-blue-400 font-semibold">2023 - 2025</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-semibold text-white mb-2">Baccalauréat STI2D</h3>
                <p className="text-gray-300 mb-2">Option SIN (Systèmes d'Information et Numérique)</p>
                <p className="text-green-400 font-semibold">2021 - 2023</p>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </main>
  )
}