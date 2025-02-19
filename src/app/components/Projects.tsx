interface TimelineProps {
    language: 'en' | 'fr';
}

interface ProjectContent {
    image: string;
    github: string;
    en: {
        title: string;
        description: string;
        technologies: string[];
    };
    fr: {
        title: string;
        description: string;
        technologies: string[];
    };
}

const content: ProjectContent[] = [
    {
        github: "https://github.com/YagmurGULEC/YagmurGULEC.github.io",
        image: "project1.png",
        en: {
            title: "Next.js Portfolio With Continuous Delivery using GitHub Actions",
            description: "This portfolio is built with Next.js and deployed with GitHub Pages. The deployment is automated with GitHub Actions.",
            technologies: ["Next.js", "Bootstrap", "GitHub Actions", "TypeScript"],
        },
        fr: {
            title: "Portfolio Next.js avec déploiement continu via GitHub Actions",
            description: "Ce portfolio est construit avec Next.js et déployé avec GitHub Pages. Le déploiement est automatisé avec GitHub Actions.",
            technologies: ["Next.js", "Bootstrap", "GitHub Actions", "TypeScript"],
        },
    },
];

const Projects: React.FC<TimelineProps> = ({ language }) => {

    return (
        <section className="py-5 bg-dark" id="projects">
            <h2 className="fw-bolder text-center text-white">
                {language === "en" ? "Projects" : "Projets"}
            </h2>
            <div className="container px-5">
                {content.map((item, index) => (
                    <div className="row gx-5" key={index}>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                {item.image && (
                                    <img className="card-img-top" src={item.image} alt="Project" />
                                )}

                                <div className="card-body p-4">
                                    {item[language].technologies.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="mx-2 badge bg-dark bg-gradient rounded-pill mb-2"
                                        >
                                            {tech}
                                        </div>
                                    ))}

                                    <a
                                        className="text-decoration-none link-dark stretched-link"
                                        href={item.github} // Make sure the link is dynamic
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="h5 card-title mb-3">{item[language].title}</div>
                                    </a>
                                    <p className="card-text mb-0">{item[language].description}</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Ensure the GitHub button properly redirects */}
                                            <a
                                                href={item.github}
                                                className="btn btn-success"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
