import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import NavBar from '@/components/navbar'

const opensans = Open_Sans({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'Fake Filter',
  description: 'Spreading the truth on the web',
}

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={cn(opensans.className, "overflow-visible flex flex-col items-center min-h-screen")}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}