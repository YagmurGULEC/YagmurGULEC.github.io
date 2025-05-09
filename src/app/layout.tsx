// layout.tsx — must be a server component (no "use client")
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Poppins } from 'next/font/google'
import BootstrapClient from './components/BootstrapClient'
import { LanguageProvider } from './components/LanguageContext'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata = {
  title: 'Yagmur Gulec | Portfolio',
  description: 'Software developer portfolio of Yagmur Gulec – Full stack, ML, Data Science projects',
  keywords: ['Portfolio', 'Yagmur Gulec', 'Next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KQ67X0E0PV"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KQ67X0E0PV');
            `,
          }}
        />
      </head>
      <body className={`d-flex flex-column ${poppins.className}`}>
        {/* ✅ Move client-side provider here */}
        <LanguageProvider>
          <main className="flex-shrink-0">
            <BootstrapClient />
            {/* ✅ Navbar and Footer are now server components */}
            <Navbar />
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
