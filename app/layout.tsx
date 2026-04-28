import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kyron',
  description: 'Your finances. Everywhere you are.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
