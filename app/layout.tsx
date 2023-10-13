import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import NavBar from '@/components/navbar'

const opensans = Open_Sans({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'Fake Filter',
  description: "In such war, the State of Israel needs everyone's support on social media to help explain the Israeli situation to the world.",
  authors: [{name: "Noam Raz", url: "noamraz.com"}],
  keywords: ['fake news', 'fact checking', 'web', 'truth'],
  creator: "Fake Filter Team",
  applicationName: "Fake Filter",
  colorScheme: "only light",
  themeColor: "#247deb",
  
  // type: 'website',
  twitter: {
    card: 'summary_large_image',
    site: 'https://fakefilter.vercel.app/',
    creator: 'Fake Filter',
    title: 'Fake Filter',
    description: "In such war, the State of Israel needs everyone's support on social media to help explain the Israeli situation to the world."
  },
  
  openGraph: {
    type: 'website',
    url: 'https://fakefilter.vercel.app/',
    title: 'Fake Filter - Spreading the truth on the web',
    description: "In such war, the State of Israel needs everyone's support on social media to help explain the Israeli situation to the world.",
    siteName: 'Fake Filter',
    images: [
      {
        url: "/assets/banner.png",
      }
    ],
    locale: 'en_US',
  },
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