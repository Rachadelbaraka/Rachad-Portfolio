'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { projects } from '@/data/projects'

export default function E5() {
  const synthesis = [
    {
      project: 'MoreFix WebStore',
      context: 'E-commerce reconditionné',
      competences: ['1.1', '1.3', '1.4', '1.5'],
      tools: 'Next.js, Firebase',
      results: 'Score 96, +45% conversion',
      icon: '🛒',
      color: 'from-blue-500 to-purple-600'
    },
    {
      project: 'Enterprise RAG Pipeline',
      context: 'IA traitement documents',
      competences: ['1.1', '1.2', '1.4', '1.5'],
      tools: 'Go, Python, Docker',
      results: '10k docs/jour, -50% temps',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600'
    },
    {
      project: 'Mindful Journal',
      context: 'PWA journalisation IA',
      competences: ['1.3', '1.4', '1.5', '1.6'],
      tools: 'TypeScript, Supabase',
      results: '200+ utilisateurs',
      icon: '📱',
      color: 'from-green-500 to-teal-600'
    },
    {
      project: 'Go Distributed Orderbook',
      context: 'Système trading haute perf',
      competences: ['1.1', '1.2', '1.4', '1.5'],
      tools: 'Go, Rust, PostgreSQL',
      results: '100k tx/sec, <10ms',
      icon: '⚡',
      color: 'from-orange-500 to-red-600'
    },
    {
      project: 'Blog Veille Tech',
      context: 'Veille technologique',
      competences: ['1.3', '1.6'],
      tools: 'HTML/CSS, JS',
      results: '50+ articles, 1k visiteurs',
      icon: '📝',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  const competencesBTS = [
    {
      code: '1.1',
      title: 'Gérer le patrimoine informatique',
      description: 'Installation, déploiement, mise à jour, documentation',
      status: 'Couvert',
      projects: ['MoreFix WebStore', 'Enterprise RAG Pipeline', 'Go Distributed Orderbook']
    },
    {
      code: '1.2',
      title: 'Répondre aux incidents et aux demandes d\'assistance',
      description: 'Support technique, résolution d\'incidents, maintenance',
      status: 'Couvert',
      projects: ['Enterprise RAG Pipeline', 'Go Distributed Orderbook']
    },
    {
      code: '1.3',
      title: 'Développer la présence en ligne',
      description: 'Sites web, optimisation SEO, présence digitale',
      status: 'Couvert',
      projects: ['MoreFix WebStore', 'Mindful Journal', 'Blog Veille Tech']
    },
    {
      code: '1.4',
      title: 'Travailler en mode projet',
      description: 'Méthodologies agiles, gestion de projet, collaboration',
      status: 'Couvert',
      projects: ['MoreFix WebStore', 'Enterprise RAG Pipeline', 'Mindful Journal', 'Go Distributed Orderbook']
    },
    {
      code: '1.5',
      title: 'Mettre à disposition des utilisateurs un service informatique',
      description: 'Déploiement, monitoring, sécurité, performance',
      status: 'Couvert',
      projects: ['MoreFix WebStore', 'Enterprise RAG Pipeline', 'Mindful Journal', 'Go Distributed Orderbook']
    },
    {
      code: '1.6',
      title: 'Organiser son développement professionnel',
      description: 'Veille technologique, formation continue, certification',
      status: 'Couvert',
      projects: ['Mindful Journal', 'Blog Veille Tech']
    }
  ]

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
              Épreuve E5 - Support et Mise à Disposition
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Couverture complète du bloc 1 du référentiel BTS SIO - Gestion du patrimoine informatique
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Tableau de synthèse */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="glass p-8 rounded-lg border border-gray-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">📊</span> Tableau de Synthèse des Réalisations
            </h2>
            <div className="overflow-x-auto">
              <motion.table
                className="w-full text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="pb-4 text-gray-300 font-semibold">Projet</th>
                    <th className="pb-4 text-gray-300 font-semibold">Contexte</th>
                    <th className="pb-4 text-gray-300 font-semibold">Compétences BTS</th>
                    <th className="pb-4 text-gray-300 font-semibold">Outils</th>
                    <th className="pb-4 text-gray-300 font-semibold">Résultats</th>
                  </tr>
                </thead>
                <tbody>
                  {synthesis.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="py-4 text-white font-semibold flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        {item.project}
                      </td>
                      <td className="py-4 text-gray-300">{item.context}</td>
                      <td className="py-4">
                        <div className="flex flex-wrap gap-1">
                          {item.competences.map((comp) => (
                            <span
                              key={comp}
                              className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-blue-300 text-xs font-semibold"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 text-gray-300">{item.tools}</td>
                      <td className="py-4 text-green-400 font-semibold">{item.results}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Mapping compétences BTS */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="glass p-8 rounded-lg border border-gray-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span> Mapping des Compétences BTS SIO
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {competencesBTS.map((competence, index) => (
                <motion.div
                  key={competence.code}
                  className="bg-gray-800/30 p-6 rounded-lg border border-gray-600 hover:border-green-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{competence.code}</h3>
                    <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold">
                      ✓ {competence.status}
                    </span>
                  </div>
                  <h4 className="text-gray-200 font-semibold mb-2">{competence.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{competence.description}</p>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Projets associés :</h5>
                    <div className="flex flex-wrap gap-2">
                      {competence.projects.map((project) => (
                        <span
                          key={project}
                          className="px-2 py-1 bg-gray-700/50 rounded text-gray-300 text-xs"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Liens GitHub */}
        <ScrollReveal delay={0.5}>
          <motion.div
            className="glass p-8 rounded-lg border border-gray-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🔗</span> Dépôts GitHub
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.filter(p => p.github).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800/30 p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{synthesis.find(s => s.project === project.title)?.icon || '📁'}</span>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 rounded text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-400 text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>🔗</span> Voir sur GitHub
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal delay={0.7}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>🚀</span>
              Explorer tous les projets
              <span>→</span>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </main>
  )
}