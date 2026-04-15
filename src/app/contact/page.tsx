'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'rachad.elbaraka@email.com',
      href: 'mailto:rachad.elbaraka@email.com',
      icon: '📧',
      color: 'from-blue-500 to-cyan-600',
      description: 'Réponse sous 24h'
    },
    {
      title: 'GitHub',
      value: 'Rachadelbaraka',
      href: 'https://github.com/Rachadelbaraka',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800',
      description: 'Code source de mes projets'
    },
    {
      title: 'LinkedIn',
      value: 'Rachad El Baraka',
      href: 'https://linkedin.com/in/rachad-el-baraka',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      description: 'Profil professionnel'
    },
    {
      title: 'Localisation',
      value: 'France',
      href: null,
      icon: '📍',
      color: 'from-green-500 to-teal-600',
      description: 'Disponible pour missions'
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
              Contact
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Prêt à discuter de vos projets et à collaborer sur des solutions innovantes
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((contact, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="glass p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-3xl p-3 rounded-lg bg-gradient-to-r ${contact.color} shadow-lg`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </div>

                  {contact.href ? (
                    <motion.a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.value}
                      <span className="text-sm">→</span>
                    </motion.a>
                  ) : (
                    <p className="text-gray-300 font-semibold text-lg">{contact.value}</p>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          {/* Call to action */}
          <ScrollReveal delay={0.4}>
            <motion.div
              className="glass p-8 rounded-lg border border-gray-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🚀</span> Intéressé par une collaboration ?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Que ce soit pour un stage, un projet freelance, ou une opportunité professionnelle,
                n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités
                et aux défis techniques stimulants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:rachad.elbaraka@email.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📧</span>
                  Envoyer un email
                  <span>→</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/rachad-el-baraka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💼</span>
                  LinkedIn
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Footer info */}
          <ScrollReveal delay={0.6}>
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="glass p-6 rounded-lg border border-gray-700 inline-block">
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">BTS SIO Option SLAM</span> - Étudiant en développement informatique
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Portfolio réalisé avec Next.js, TypeScript et Tailwind CSS
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}