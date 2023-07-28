import Header from '@/components/header'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({ weight: ["400","100","300"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'ATI SERIVCE',
  description: 'Empresa ATI SERIVCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={roboto.className}>
      <Header/>
        {children}
       <Footer/> 
        </body>
    </html>
  )
}
