// components/SiteNavbar.tsx
'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const languages: Record<string, string> = {
    en: 'English'

};

export default function SiteNavbar() {
    const content = { 'en': ['Home', 'CV', 'Blog', 'Contact'], 'fr': ['Accueil', 'CV', 'Blog', 'Contact'] };

    const router = useRouter();
    const pathname = usePathname(); // e.g. "/en/blog/my-post"

    const pathLang = pathname.split('/')[1];
    const currentLang: keyof typeof content =
        pathLang && pathLang in content ? (pathLang as keyof typeof content) : 'en';

    const handleSelect = (eventKey: string | null) => {
        if (!eventKey) return;
        const segments = pathname.split('/');
        segments[1] = eventKey; // swap the locale segment
        router.push(segments.join('/'));
    };

    return (
        <Navbar expand="lg" className="site-navbar" variant="dark">
            <div className="container-fluid">
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="align-items-center">
                        <Nav.Link href="/" active>
                            {content[currentLang][0]}
                        </Nav.Link>
                        <Nav.Link href={`/${currentLang}/blog`}>{content[currentLang][2]}</Nav.Link>
                        <Nav.Link href="#contact">{content[currentLang][3]}</Nav.Link>

                        <NavDropdown
                            title={languages[currentLang]}
                            id="language-dropdown"
                            onSelect={handleSelect}
                        >
                            {Object.entries(languages).map(([key, label]) => (
                                <NavDropdown.Item key={key} eventKey={key} active={currentLang === key}>
                                    {label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href={`/${currentLang}/cv.pdf`}>
                            <button className="btn" onClick={() => window.open(`/${currentLang}/cv`, '_blank')}>
                                See CV
                            </button>
                        </Nav.Link>
                        <Nav.Link href={`/pdf/${currentLang}/cv.pdf`}>
                            <button className="btn" onClick={() => window.open(`/pdf/${currentLang}/Resume_Yagmur_Gulec.pdf`, '_blank')}>
                                DownloadCV
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}