import React from 'react'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${inter.className} ${playfairDisplay.className} h-screen min-w-screen`}
    >
      <body className="bg-blue-1">
        <main>{children}</main>
      </body>
    </html>
  )
}
