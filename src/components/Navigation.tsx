'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Projets' },
  { href: '/skills', label: 'Compétences' },
  { href: '/experience', label: 'Expérience' },
  { href: '/veille', label: 'Veille' },
  { href: '/e5', label: 'E5' },
  { href: '/contact', label: 'Contact' }
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Rachad EL BARAKA
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}