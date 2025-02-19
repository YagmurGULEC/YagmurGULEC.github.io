
"use client"; // ✅ Required for Bootstrap interactivity
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css"; // Ensure this is imported
import Footer from "./components/Footer";
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
