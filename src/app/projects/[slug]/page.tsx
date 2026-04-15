'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { projects } from '@/data/projects'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/projects"
          className="text-blue-400 hover:text-blue-300 mb-8 inline-block flex items-center gap-2"
        >
          ← Retour aux projets
        </Link>

        {/* Header */}
        <ScrollReveal>
          <div className="glass p-8 rounded-lg border border-gray-700 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <motion.h1
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.title}
              </motion.h1>
              {project.featured && (
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ⭐ PROJET STAR
                </motion.div>
              )}
            </div>

            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>🔗</span> Voir sur GitHub
              </motion.a>
            )}
          </div>
        </ScrollReveal>

        {/* Content Sections */}
        <div className="space-y-8">
          <ScrollReveal>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-blue-400">📋</span> Contexte
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.contexte}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-green-400">🎯</span> Objectifs
              </h2>
              <ul className="space-y-3">
                {project.e5.objectifs.map((objectif, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-green-400 mt-1">✓</span>
                    {objectif}
                  </motion.li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-red-400">🔍</span> Problématique
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.problematique}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-400">💡</span> Solutions proposées
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.solutions}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">⚙️</span> Démarche technique
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Architecture</h3>
                  <p className="text-gray-300">{project.e5.demarcheTechnique.architecture}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Stack technique</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.e5.demarcheTechnique.stack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 rounded text-gray-300 text-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                {project.e5.demarcheTechnique.baseDonnees && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Base de données</h3>
                    <p className="text-gray-300">{project.e5.demarcheTechnique.baseDonnees}</p>
                  </div>
                )}
                {project.e5.demarcheTechnique.api && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">APIs</h3>
                    <p className="text-gray-300">{project.e5.demarcheTechnique.api}</p>
                  </div>
                )}
                {project.e5.demarcheTechnique.securite && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Sécurité</h3>
                    <p className="text-gray-300">{project.e5.demarcheTechnique.securite}</p>
                  </div>
                )}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">🔄</span> Méthodologie
              </h2>
              <ul className="space-y-3">
                {project.e5.methodologie.map((methode, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-orange-400">•</span>
                    {methode}
                  </motion.li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400">🎓</span> Compétences BTS mobilisées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.e5.competencesBTS).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="bg-gray-800/30 p-4 rounded border border-gray-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold text-blue-400 mb-2 text-lg">{key}</h3>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-emerald-400">📊</span> Résultats obtenus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.e5.resultats.map((resultat, index) => (
                  <motion.div
                    key={index}
                    className="bg-emerald-600/20 border border-emerald-500/30 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-emerald-300 font-semibold">{resultat}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-red-400">⚠️</span> Difficultés rencontrées
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.difficultes}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-green-400">✅</span> Solutions apportées
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.solutionsApportees}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <section className="glass p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-purple-400">🚀</span> Améliorations possibles
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.e5.ameliorations}</p>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}