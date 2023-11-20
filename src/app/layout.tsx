import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import { DotPattern } from '@/components/dot-pattern'
import { ThemeProvider } from "@/components/theme-provider"

import Menu from '@/components/Menu'

const inter = Montserrat({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'jake bayar portfolio',
  description: 'contact at contact@jakebayar.com',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative pb-28`}>
        <DotPattern
          width={10}
          height={10}
          cx={1}
          cy={1}
          cr={1}
          className={`absolute inset-0 z-0 opacity-40`}
        />
        <div className='relative z-10'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </div>
        <div className="fixed inset-x-0 bottom-0 flex justify-center items-end z-50">
          <Menu />
        </div>
      </body>
    </html >
  )
}
