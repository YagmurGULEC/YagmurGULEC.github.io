// components/SiteFooter.tsx
'use client';

import { usePathname } from 'next/navigation';

const content = {
    en: {
        rights: 'All rights reserved.',
        builtWith: 'Built with Next.js',
    },
    fr: {
        rights: 'Tous droits réservés.',
        builtWith: 'Créé avec Next.js',
    },
};

export default function Footer() {
    const pathname = usePathname();
    const pathLang = pathname.split('/')[1];
    const currentLang: keyof typeof content = pathLang && pathLang in content ? (pathLang as keyof typeof content) : 'en';

    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" id="contact">
            <div className="container-fluid">
                <p>© {year} Yagmur GULEC. {content[currentLang].rights}</p>
                <div className="footer-links">
                    <a href="https://github.com/YagmurGULEC" target="_blank" rel="noopener noreferrer">github.com/YagmurGULEC</a>
                    <a href="https://linkedin.com/in/yagmur-gulec" target="_blank" rel="noopener noreferrer">linkedin.com/in/yagmur-gulec</a>
                    <a href="mailto:yagmur.gulec@outlook.com">yagmur.gulec@outlook.com</a>
                </div>
            </div>
        </footer>
    );
}