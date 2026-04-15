'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Veille() {
  const topics = [
    {
      title: 'Intelligence Artificielle & Machine Learning',
      description: 'Évolution des modèles GPT, RAG, applications en traitement de texte et génération de contenu. Exploration des transformers, des modèles de diffusion, et des applications éthiques de l\'IA.',
      sources: ['OpenAI', 'Hugging Face', 'Papers with Code', 'Towards Data Science'],
      icon: '🤖',
      color: 'from-purple-500 to-pink-600',
      articles: [
        'GPT-4 Technical Report',
        'Stable Diffusion 3.0',
        'RAG Implementation Guide'
      ]
    },
    {
      title: 'Systèmes Distribués & Cloud',
      description: 'Architectures microservices, conteneurisation Docker/Kubernetes, haute performance Go/Rust. Optimisation des performances, sécurité des systèmes distribués.',
      sources: ['Docker Docs', 'Kubernetes', 'Go Blog', 'AWS Blogs', 'CNCF'],
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600',
      articles: [
        'Kubernetes Best Practices',
        'Go Performance Optimization',
        'Microservices Architecture Patterns'
      ]
    },
    {
      title: 'Web Moderne & Performance',
      description: 'PWA, JAMstack, optimisation performances, nouvelles APIs web. Frameworks modernes, Core Web Vitals, et expériences utilisateur avancées.',
      sources: ['MDN Web Docs', 'Web.dev', 'Next.js Blog', 'Vercel Blog', 'Chrome DevTools'],
      icon: '🌐',
      color: 'from-green-500 to-teal-600',
      articles: [
        'Next.js 14 App Router',
        'Core Web Vitals Guide',
        'PWA Implementation'
      ]
    },
    {
      title: 'Cybersécurité & DevSecOps',
      description: 'Sécurité des applications, pratiques DevSecOps, protection des données. Analyse des vulnérabilités, chiffrement, et conformité réglementaire.',
      sources: ['OWASP', 'NIST', 'Snyk Blog', 'GitHub Security', 'Krebs on Security'],
      icon: '🔒',
      color: 'from-red-500 to-orange-600',
      articles: [
        'OWASP Top 10 2024',
        'Zero Trust Architecture',
        'DevSecOps Best Practices'
      ]
    }
  ]

  const tools = [
    { name: 'GitHub', description: 'Tendances et repositories', icon: '📚' },
    { name: 'Reddit', description: 'Communautés tech', icon: '💬' },
    { name: 'LinkedIn', description: 'Articles professionnels', icon: '💼' },
    { name: 'Feedly', description: 'Agrégateur RSS', icon: '📰' },
    { name: 'Notion', description: 'Synthèse et organisation', icon: '📝' },
    { name: 'Google Alerts', description: 'Notifications personnalisées', icon: '🔍' }
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
              Veille Technologique
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Suivi actif des évolutions technologiques et apprentissage continu pour rester à la pointe de l&apos;innovation
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Domaines de veille */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topics.map((topic, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-3xl p-2 rounded-lg bg-gradient-to-r ${topic.color} shadow-lg`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{topic.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <span className="text-blue-400">📚</span> Sources principales :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topic.sources.map((source, i) => (
                      <motion.span
                        key={source}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-600/50 transition-colors"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {source}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <span className="text-green-400">📖</span> Articles récents :
                  </h4>
                  <ul className="space-y-2">
                    {topic.articles.map((article, i) => (
                      <motion.li
                        key={article}
                        className="flex items-center gap-3 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-green-400">•</span>
                        {article}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Outils de veille */}
        <ScrollReveal delay={0.4}>
          <motion.div
            className="glass p-8 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🛠️</span> Outils de Veille Technologique
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-gray-800/30 p-6 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-all duration-300 text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Méthodologie */}
        <ScrollReveal delay={0.6}>
          <motion.div
            className="mt-16 glass p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">📊</span> Méthodologie de Veille
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Collecte',
                  description: 'Agrégation automatique des informations via RSS, alertes et réseaux sociaux',
                  icon: '📥'
                },
                {
                  step: '02',
                  title: 'Analyse',
                  description: 'Filtrage, synthèse et évaluation de la pertinence des informations collectées',
                  icon: '🔍'
                },
                {
                  step: '03',
                  title: 'Diffusion',
                  description: 'Partage des connaissances via présentations, documentation et formations',
                  icon: '📤'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </main>
  )
}