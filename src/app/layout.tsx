import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rachad EL BARAKA - Portfolio BTS SIO SLAM',
  description: 'Portfolio professionnel pour l\'épreuve E5 BTS SIO - Développeur Full-Stack spécialisé en systèmes distribués et IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}