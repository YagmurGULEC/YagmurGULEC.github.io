import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

interface TimelineProps {
    language: 'en' | 'fr';
}

interface ProjectContent {
    image: string;
    github: string;
    youtube?: string;
    colab?: string;
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
        github: "https://github.com/YagmurGULEC/NOAA_DataVisualization_Backend_Frontend",
        youtube: "https://youtu.be/DXs0rniddUI",
        colab: "https://drive.google.com/drive/folders/1Cy7npgD27nL5gDY7abR0EjOsXw8w9OGN?usp=drive_link",
        image: "frontend.png",
        en: {
            title: "End-to-End Geospatial Climate Data Visualization with Spring Boot, PostgreSQL, and Deck.gl ",
            description: "This project is a comprehensive end-to-end geospatial climate data visualization application. It utilizes Spring Boot for the backend to serve GeoJSON data, PostgreSQL for the database, and Deck.gl for the frontend visualization. The project is designed to handle large datasets efficiently and provides an interactive user interface for exploring climate data.",
            technologies: ["Spring Boot", "TypeScript", "Deck.gl", "React", "PostgreSQL", "Docker"],
        },
        fr: {
            title: "End-to-End Geospatial Climate Data Visualization with Spring Boot, PostgreSQL, and Deck.gl ",
            description: "This project is a comprehensive end-to-end geospatial climate data visualization application. It utilizes Spring Boot for the backend to serve GeoJSON data, PostgreSQL for the database, and Deck.gl for the frontend visualization. The project is designed to handle large datasets efficiently and provides an interactive user interface for exploring climate data.",
            technologies: ["Spring Boot", "TypeScript", "Deck.gl", "React", "PostgreSQL", "Docker"],
        },
    },
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
        <section id="projects" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">
                    {language === "fr" ? "Projets" : "Projects"}
                </h2>
                <div className="row g-4">
                    {content.map((project: ProjectContent, index) => (
                        <div className="col-md-6 d-flex" key={index}>
                            <div className="card h-100 d-flex flex-column shadow-sm w-100">
                                <Image
                                    src={`${project.image}`}
                                    className="card-img-top"
                                    alt={project.en.title}
                                    width={600}
                                    height={300}
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="card-body flex-grow-1">
                                    <h5 className="card-title">{project[language].title}</h5>
                                    <p className="card-text">{project[language].description}</p>
                                    <div className="mb-2">
                                        {project[language].technologies.map((tech: string, i: number) => (
                                            <span key={i} className="badge bg-dark me-1 mb-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="btn btn-sm btn-dark me-2"
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.youtube && (
                                        <a
                                            href={project.youtube}
                                            className="btn btn-sm btn-danger me-2"
                                            target="_blank"
                                        >
                                            YouTube
                                        </a>
                                    )}
                                    {project.colab && (
                                        <a
                                            href={project.colab}
                                            className="btn btn-sm btn-warning text-dark"
                                            target="_blank"
                                        >
                                            Colab
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Projects;
