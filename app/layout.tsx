import { Nunito } from 'next/font/google'
import './globals.scss'
import type { Metadata } from 'next'
import Navbar from './components/navbar/Nabvar'


export const metadata: Metadata = {
  title: 'juampe',
  description: 'dioso',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}
      <Navbar/>
      </body>
    </html>
  )
}
