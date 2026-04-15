'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { MetricCard } from '@/components/MetricCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 animate-float">
              Rachad EL BARAKA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Développeur Full-Stack orienté <span className="text-blue-400 font-semibold">performance</span>,
              <span className="text-purple-400 font-semibold"> systèmes distribués</span> et
              <span className="text-cyan-400 font-semibold"> intelligence artificielle</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Next.js', 'TypeScript', 'Go', 'Rust', 'IA', 'Docker'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/projects"
              className="glass glow px-8 py-4 rounded-lg font-semibold text-white hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Explorer mes projets
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800/50"
            >
              💬 Me contacter
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Impact Mesuré
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <MetricCard
                title="Score Lighthouse"
                value="96"
                description="Performance web optimisée"
                icon="⚡"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <MetricCard
                title="Conversion"
                value="+45%"
                description="Amélioration e-commerce"
                icon="📈"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <MetricCard
                title="Produits"
                value="500+"
                description="Catalogués et optimisés"
                icon="🛍️"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}