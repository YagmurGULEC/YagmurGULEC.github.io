import React from 'react';
export default function Contact({ language }: { language: "en" | "fr" }) {
    return (
        <section id="contact" className="py-5">
            <div className="container text-center">
                <h2>Contact Me</h2>
                {language === "fr" ? (
                    <p className="mb-3">
                        J&apos;aimerais avoir de vos nouvelles ! N&apos;hésitez pas à me contacter :
                    </p>
                ) : (
                    <p className="mb-3">
                        I&apos;d love to hear from you! Feel free to reach out:
                    </p>
                )}
                <div className="mb-3">
                    <i className="fas fa-envelope fa-lg me-2"></i>
                    <a href="mailto:yagmurgulec89@gmail.com" className="text-decoration-none">
                        yagmurgulec89@gmail.com
                    </a>
                </div>
                <div className="d-flex justify-content-center gap-4 mt-3">
                    <a href="https://github.com/YagmurGULEC" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x text-dark"></i>
                    </a>
                    <a href="https://linkedin.com/in/yagmur-gulec" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x text-primary"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
