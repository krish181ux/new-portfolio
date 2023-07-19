import { Navbar, Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets:['latin'],
  variable: "--font-mont"
})
 
export const metadata: Metadata = {
  title: 'Krishna Portfolio',
  description: 'Website made using Nextjs,Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
