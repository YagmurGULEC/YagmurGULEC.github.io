import React from "react";

type TimelineProps = {
    language: "en" | "fr";
    getMonthYear: (date: string, language: "en" | "fr") => string;
};

const Timeline: React.FC<TimelineProps> = ({ language, getMonthYear }) => {
    const timelineData = [
        {
            startDate: "2024-03",
            endDate: "",
            en: {
                title: "Software Developer Intern", company: "Riipen Level UP and Beyond the Cloud",
                link: "https://levelup.riipen.com/users/EzvbrEYz",

                projects: [
                    {
                        title: "Designing an efficient and cost-effective AWS cloud architecture strategy (map) for Hinna's micro-services",
                        skills: ["AWS", "Java", "Spring Boot", "PostgreSQL", "Docker", "Collaboaration", "Agile"]
                    },
                    {
                        title: "Developed a full-stack interactive dashboard for analysis of prediction market data and deployed on AWS Lambda",

                        skills: ["AWS Lambda", "Python", "Data analysis", "API Gateway", "Pandas", "Plotly", "Dash", "Docker", "Serverless"]
                    },
                    {
                        title: "Redesigned a MySQL database schema for a voluntary board management database to reduce redundancy and improve performance",

                        skills: ["SQL", "Docker", "Entity Relation Diagram", "Collaboration"]
                    },
                    {
                        title: "Developed a full-stack application to automate the trimming of long Youtube  video clips according to the subtitle analysis using OpenAI API",

                        skills: ["FastAPI", "Docker", "JavaScript", "Bootstrap", "OpenAI API"]
                    },

                ]
            },
            fr: {
                title: "Software Developer Intern", company: "Riipen Level UP and Beyond the Cloud",
                link: "https://levelup.riipen.com/users/EzvbrEYz",
                projects: [
                    {
                        title: "Designing an efficient and cost-effective AWS cloud architecture strategy (map) for Hinna's micro-services",
                        skills: ["AWS", "Java", "Spring Boot", "PostgreSQL", "Docker", "Collaboaration", "Agile"]
                    },
                    {
                        title: "Developed a full-stack interactive dashboard for analysis of prediction market data and deployed on AWS Lambda",

                        skills: ["AWS Lambda", "Python", "Data analysis", "API Gateway", "Pandas", "Plotly", "Dash", "Docker", "Serverless"]
                    },
                    {
                        title: "Redesigned a MySQL database schema for a voluntary board management database to reduce redundancy and improve performance",

                        skills: ["SQL", "Docker", "Entity Relation Diagram", "Collaboration"]
                    },
                    {
                        title: "Developed a full-stack application to automate the trimming of long Youtube  video clips according to the subtitle analysis using OpenAI API",

                        skills: ["FastAPI", "Docker", "JavaScript", "Bootstrap", "OpenAI API"]
                    },

                ]
            },
        },
        {
            startDate: "2019-02",
            endDate: "2021-09",
            en: {
                title: "P.h.D. Researcher in Mechanical Engineering", company: "University of Sherbrooke, Quebec",
                projects: [
                    {
                        title: "Successfully automated large-scale simulations on **High-Performance Computing (HPC) clusters, optimized computational workflows by writing Bash scripts to manage job scheduling, data preprocessing, and result extraction",
                        skills: ["Bash scripting", "Linux"]
                    },
                    {
                        title: "Implemented a sub-model into an open-source computational fluid dynamics package (OpenFOAM) to simulate a single vapor bubble dynamics in a liquid pool",
                        skills: ["C++", "Object oriented programming", "OpenFOAM"]
                    },
                    {
                        title: "Developed a Java  Plugin to automate image processing to measure bubble sizes for ImageJ",
                        skills: ["Java", "Image Processing", "ImageJ"]
                    }
                ]
            },
            fr: {
                title: "P.h.D. Researcher in Mechanical Engineering", company: "University of Sherbrooke, Quebec",
                projects: [
                    {
                        title: "Successfully automated large-scale simulations on **High-Performance Computing (HPC) clusters, optimized computational workflows by writing Bash scripts to manage job scheduling, data preprocessing, and result extraction",
                        skills: ["Bash scripting", "Linux"]
                    },
                    {
                        title: "Implemented a sub-model into an open-source computational fluid dynamics package (OpenFOAM) to simulate a single vapor bubble dynamics in a liquid pool",
                        skills: ["C++", "Object oriented programming", "OpenFOAM"]
                    },
                    {
                        title: "Developed a Java  Plugin to automate image processing to measure bubble sizes for ImageJ",
                        skills: ["Java", "Image Processing", "ImageJ"]
                    }
                ]
            }
        },
        {
            startDate: "2015-02",
            endDate: "2019-01",
            en: {
                title: "Teaching Assistant in Mechanical Engineering", company: "Izmir Institute of Technology, Turkey",
                projects: [
                    {
                        title: "Conducted recitations and laboratory experiments for Fluid Dynamics and Numerical Methods courses.",

                    },

                    {
                        title: "Assisted the professor in evaluating exams, assignments, and experimental reports.",

                    },
                    {
                        title: "Provided academic support to undergraduate students, clarifying concepts and solving problems related to fluid mechanics and numerical modeling.",

                    },
                    {
                        title: "Facilitated hands-on experiments, ensuring students understood data collection, analysis, and report writing.",
                        skills: ["Fluid Dynamics", "Numerical Methods", "Teaching", "Academic Support"]
                    }
                ]
            },
            fr: {
                title: "Teaching Assistant in Mechanical Engineering", company: "Izmir Institute of Technology, Turkey",
                projects: [
                    {
                        title: "Conducted recitations and laboratory experiments for Fluid Dynamics and Numerical Methods courses.",

                    },

                    {
                        title: "Assisted the professor in evaluating exams, assignments, and experimental reports.",

                    },
                    {
                        title: "Provided academic support to undergraduate students, clarifying concepts and solving problems related to fluid mechanics and numerical modeling.",

                    },
                    {
                        title: "Facilitated hands-on experiments, ensuring students understood data collection, analysis, and report writing.",
                        skills: ["Fluid Dynamics", "Numerical Methods", "Teaching", "Academic Support"]
                    }

                ]
            }
        },
    ];

    return (
        <section className="py-5 bg-light" id="experience">
            <div className="container">
                <h2 className="text-center mb-5">
                    {language === "en" ? "Job Experiences" : "Expériences Professionnelles"}
                </h2>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <div className="border-start border-3 border-success position-relative">
                            {timelineData.map((item, index) => (
                                <div className="position-relative mb-4 ps-4" key={index}>
                                    {/* Circle Indicator */}
                                    <div
                                        className="position-absolute top-0 start-0 translate-middle bg-success rounded-circle"
                                        style={{ width: "15px", height: "15px", left: "-8px", top: "10px" }}
                                    ></div>

                                    {/* Date */}
                                    <h5 className="fw-bold">
                                        {`${getMonthYear(item.startDate, language)} - ${getMonthYear(item.endDate, language)}`}
                                    </h5>

                                    {/* Job Title and Company */}
                                    {item[language] && <h6 className="lead text-success">{item[language].title}</h6>}
                                    {item[language] && <p className="lead fw-normal text-dark">{item[language].company}</p>}
                                    {item[language]?.link && <p className="text-dark"><a className="text-success" href={item[language].link}>{item[language].link}</a></p>}
                                    {/* Projects */}
                                    <ul className="list-unstyled">
                                        {item[language]?.projects &&
                                            item[language].projects.map((project, idx) => (
                                                <React.Fragment key={idx}>
                                                    <li className="text-bold mt-3">{project.title}</li>
                                                    {project.skills?.map((skill, skillIndex) => (
                                                        <a className="badge mx-2 bg-dark text-decoration-none link-light" href="#!" key={skillIndex}>
                                                            {skill}
                                                        </a>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
