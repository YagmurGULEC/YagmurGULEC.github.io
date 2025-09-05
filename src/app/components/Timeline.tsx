import React from "react";


type Project = {
    title: string;
    link?: string;
    skills?: string[];
};

type JobItem = {
    startDate: string;
    endDate: string;
    en: {
        title: string;
        company: string;
        link?: string;
        projects: Project[];
    };
    fr: {
        title: string;
        company: string;
        link?: string;
        projects: Project[];
    };
};
type TimelineProps = {
    language: "en" | "fr";
    getMonthYear: (date: string, language: "en" | "fr") => string;

};
const Timeline: React.FC<TimelineProps> = ({ language, getMonthYear }) => {
    const timelineData: JobItem[] = [
        {
            startDate: "2025-05",
            endDate: "2025-07",
            en: {
                title: "Machine Learning Developer Intern", company: "M2M",

                projects: [
                    {
                        title: "Implementing data augmentation techniques for a large-scale dataset of images to improve the performance of a deep learning model for Yolo Object Detection",
                        skills: ["Python", "Deep Learning", "PyTorch", "Data Augmentation"],
                    },
                ]
            },
            fr: {
                title: "Machine Learning Developer Intern", company: "M2M",
                projects: [
                    {
                        title: "Implementing data augmentation techniques for a large-scale dataset of images to improve the performance of a deep learning model for Yolo Object Detection",
                        skills: ["Python", "Object Detection", "Image Processing", "Data Augmentation"],
                    },
                ]
            }
        },

        {
            startDate: "2024-03",
            endDate: "2025-03",
            en: {
                title: "Software Developer Intern", company: "Riipen Level UP and Beyond the Cloud",
                link: "https://levelup.riipen.com/users/EzvbrEYz",

                projects: [
                    {
                        title: "Automation of provisioning a Jenkins server running on an EC2 instance with Terraform",
                        link: "https://docs.google.com/document/d/1jXBt_hFFoUZ1Ixxpdd6RL2nK-A_Paij-WD_h2agTlSU/edit?usp=sharing",
                        skills: ["AWS EC2", "Bash Script", "Ngnix", "Terraform", "Jenkins", "Infrastructure as Code (IaC)"]
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
                        title: "Automation of provisioning a Jenkins server running on an EC2 instance with Terraform",
                        link: "https://docs.google.com/document/d/1jXBt_hFFoUZ1Ixxpdd6RL2nK-A_Paij-WD_h2agTlSU/edit?usp=sharing",
                        skills: ["AWS EC2", "Bash Script", "Ngnix", "Terraform", "Jenkins", "Infrastructure as Code (IaC)"]
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
                title: "Doctoral Researcher in Mechanical Engineering", company: "University of Sherbrooke, Quebec",
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
        <section id="experience" className="py-5 bg-dark text-light">
            <div className="container">
                <h2 className="text-center mb-5">Job Experience</h2>
                <div className="timeline">

                    {timelineData.map((job, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h4 className="fw-bold">{job[language].title}</h4>
                                <p className="text-muted">{job[language].company}</p>

                                <p className="text-muted">
                                    {getMonthYear(job.startDate, language)} –{" "}
                                    {job.endDate === "Present"
                                        ? (language === "fr" ? "Présent" : "Present")
                                        : getMonthYear(job.endDate, language)}
                                </p>

                                <ul>
                                    {job[language].projects.map((project, i) => (
                                        <li key={i}>
                                            {project.link ? (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    {project.title}
                                                </a>
                                            ) : (
                                                project.title
                                            )}
                                            {project.skills && (
                                                <div className="mb-2">
                                                    {project.skills.map((skill, j) => (
                                                        <span key={j} className="badge bg-primary me-1 mb-1">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}




                </div>
            </div>
        </section>

    );
};

export default Timeline;
