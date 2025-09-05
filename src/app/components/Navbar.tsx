"use client"; // ✅ Required for interactivity

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext"; // ✅ Import Context

export default function Navbar() {
    const { language, setLanguage } = useLanguage(); // ✅ Get language state
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <div className="d-flex justify-content-center gap-3">
                    <h1 className="navbar-brand py-2">Yagmur GULEC</h1>

                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="/">
                                {language === "en" ? "Home" : "Accueil"}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="#experience">
                                {language === "en" ? "Experiences" : "Expériences"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="#projects">
                                {language === "en" ? "Projects" : "Projets"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="#contact">
                                {language === "en" ? "Contact" : "Contact"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="#education">
                                {language === "en" ? "Education" : "Formation"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="#language">
                                {language === "en" ? "Language" : "Langue"}
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link fw-bold text-white" href="/blog">
                                {language === "en" ? "Blogs" : "Blogs"}
                            </Link>
                        </li> */}

                        {/* ✅ Language Switcher Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle  fw-bold text-white" id="navbarDropdownLanguage" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                {language === "en" ? "English" : "Français"}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownLanguage">
                                <li>
                                    <a className="dropdown-item" onClick={() => setLanguage("en")}>English</a>
                                </li>
                                {/* <li>
                                    <a className="dropdown-item" onClick={() => setLanguage("fr")}>Français</a>
                                </li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
