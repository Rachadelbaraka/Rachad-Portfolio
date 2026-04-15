'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = duration * 1000 / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon?: string
}

export function MetricCard({ title, value, description, icon }: MetricCardProps) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-lg font-semibold text-blue-400 mb-2">{title}</div>
      <div className="text-gray-400 text-sm">{description}</div>
    </motion.div>
  )
}