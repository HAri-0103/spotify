import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Music Player',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar>
        {children}
        </Sidebar>
      </body>
    </html>
  )
}
