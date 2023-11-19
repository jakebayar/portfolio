import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import { DotPattern } from '@/components/dot-pattern'
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })


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
      <body className={`${inter.className} relative`}>
        <DotPattern
          width={12}
          height={12}
          cx={1}
          cy={1}
          cr={1}
          className={`${cn("[mask-image:linear-gradient(to_left,white,transparent)]")} absolute inter-0 z-0`}
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
      </body>
    </html >
  )
}
