
"use client"; // ✅ Required for Bootstrap interactivity
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css"; // Ensure this is imported
import Footer from "./components/Footer";
import Script from "next/script"; // ✅ For Google Analytics
// import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";

import React, { useState, ReactNode } from "react";
import Navbar from "./components/Navbar";
import BootstrapClient from "./components/BootstrapClient";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en"); // ✅ Manage state in RootLayout

  return (
    <LanguageProvider>
      <html lang={language}>
        <head>
          {/* Google Analytics Script */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-KQ67X0E0PV`}
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
        <body className="d-flex flex-column">
          <BootstrapClient />
          <main className="flex-shrink-0">
            <Navbar /> {/* ✅ Pass state & setter */}

            {children}
          </main>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
