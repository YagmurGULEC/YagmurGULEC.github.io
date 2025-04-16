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
        <section className="py-5 bg-dark" id="projects">
            <h2 className="fw-bolder text-center text-white">
                {language === "en" ? "Projects" : "Projets"}
            </h2>
            <div className="container px-5">

                <div className="row gx-5" >
                    {content.map((item, index) => (
                        <div className="col-lg-4 mb-5" key={index}>
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
                                        className="text-decoration-none link-dark"
                                        href={item.github} // Make sure the link is dynamic
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="h5 card-title mb-3">{item[language].title}</div>
                                    </a>
                                    <p className="card-text mb-0">{item[language].description}</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <div className="d-flex align-items-center">
                                            {/* Ensure the GitHub button properly redirects */}
                                            <a
                                                href={item.github}
                                                className="btn btn-outline-dark custom-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </a>
                                            {item.youtube && (
                                                <a
                                                    href={item.youtube}
                                                    className="btn btn-danger ms-2"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    YouTube
                                                </a>
                                            )}
                                            {item.colab && (
                                                <a
                                                    href={item.colab}
                                                    className="btn btn-success ms-2"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Google Drive
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
