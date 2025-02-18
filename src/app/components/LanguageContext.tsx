"use client"; // ✅ Required for client-side state management

import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Define Context Type
type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

// ✅ Create Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ✅ Context Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState("en"); // ✅ Default: English

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// ✅ Custom Hook to Use Language Context
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
