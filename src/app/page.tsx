'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { MetricCard } from '@/components/MetricCard'

const features = [
  {
    title: 'Applications rapides',
    description: 'Interfaces fluides et temps de chargement mesurés pour chaque projet.',
    icon: '⚡',
    accent: 'from-cyan-500 via-blue-500 to-purple-600'
  },
  {
    title: 'Design impactant',
    description: 'Ambiance sombre, contrastes forts et détails visuels professionnels.',
    icon: '🎨',
    accent: 'from-fuchsia-500 via-violet-500 to-indigo-500'
  },
  {
    title: 'Architecture solide',
    description: 'Stack moderne orientée performance, sécurité et maintenabilité.',
    icon: '🧱',
    accent: 'from-emerald-400 via-cyan-400 to-sky-500'
  }
]

const values = [
  {
    title: 'E5 prêt',
    description: 'Contenu structuré pour valoriser les compétences et les livrables scolaires.',
    icon: '📄'
  },
  {
    title: 'Experience stratégique',
    description: 'Projets pertinents, utilisation de technologies actuelles et réalisations concrètes.',
    icon: '🚀'
  },
  {
    title: 'Approche personnelle',
    description: 'Portfolio pensé autour de ton profil, tes forces et ton identité technique.',
    icon: '✨'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-80"></div>
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-0 top-32 h-[260px] w-[260px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_20%)]"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300 mb-6"
            >
              Portfolio professionnel & personnel
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white"
            >
              Je conçois des expériences web
              <span className="block text-transparent gradient-text">haute performance et forte personnalité.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Développeur Full-Stack spécialisé en systèmes distribués, IA et interfaces modernes. Mon objectif : rendre chaque projet lisible, performant et immédiatement mémorable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-105"
              >
                🚀 Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                💬 Discuter d’un projet
              </Link>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {['Next.js', 'TypeScript', 'Go', 'Rust', 'Docker', 'IA'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                className="glass border border-white/10 p-5 text-sm font-medium text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 mb-3">Ce qui rend ce portfolio unique</p>
              <h2 className="text-4xl font-bold text-white">Design, structure et contenu professionnel</h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Un portfolio façonné pour séduire à la fois les jurys E5 et les recruteurs techniques : contenu clair, angles métiers, et formes colorées.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-60 blur-3xl from-cyan-500/20 via-transparent to-violet-500/10"></div>
                  <div className="relative z-10">
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-cyan-500/20`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950/90">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="glass border border-white/10 p-10 shadow-2xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 mb-4">Fonctionnalités fortes</p>
                <h2 className="text-4xl font-bold text-white mb-6">Des expériences interactives et impactantes</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Le portfolio se distingue par des animations subtiles, des sections hiérarchisées et un univers chromatique moderne. Il présente ton expertise sous forme claire, mémorable et professionnelle.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {values.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-6">
                <motion.div
                  className="glass border border-white/10 p-8 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-violet-300 mb-4">Outils</p>
                  <div className="flex flex-wrap gap-3">
                    {['Next.js', 'Tailwind', 'TypeScript', 'Firebase', 'Docker', 'Supabase'].map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="glass border border-white/10 p-8 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-4">À la une</p>
                  <h3 className="text-2xl font-semibold mb-4">Portfolio orienté projet</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Une mise en page qui valorise tes réalisations avec des points forts nets, une navigation fluide et un passage direct vers tes cas d’usage E5.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 mb-3">Prêt pour la présentation</p>
              <h2 className="text-4xl font-bold text-white">Un portfolio qui raconte ton profil</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="glass border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold text-white mb-3">Expertise claire</h3>
                <p className="text-gray-400">Une narration qui met en avant les compétences, les résultats et les choix techniques.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold text-white mb-3">Design unique</h3>
                <p className="text-gray-400">Un style moderne, des couleurs dynamiques et des composants sur mesure pour une identité forte.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glass border border-white/10 p-6 rounded-3xl">
                <h3 className="text-xl font-semibold text-white mb-3">Technologies actuelles</h3>
                <p className="text-gray-400">Next.js, Tailwind, Framer Motion et des composants animés pour une expérience haut de gamme.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="glass border border-white/10 p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à transformer ton portfolio ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Je propose une version plus personnalisée avec des interactions supplémentaires, un storytelling visuel et une section E5 optimisée.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-105"
            >
              🎯 Discutons de l’amélioration
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}