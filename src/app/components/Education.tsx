import { get } from "http";
import React from "react";

type TimelineProps = {
    language: "en" | "fr";
    getMonthName: (date: string, language: "en" | "fr") => string;

};

const Education: React.FC<TimelineProps> = ({ language, getMonthName }) => {
    type ContentType = {
        [key: string]: {
            university?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            skills?: string[];
        } | string;
    };

    const content: ContentType[] = [
        {
            startDate: "2022-01",
            endDate: "2024-05",
            en: {
                university: "Bishop's University, Sherbrooke, Quebec",
                degree: "Master of Science in Computer Science",
                skills: ["Database Design (SQL)", "Machine Learning", "Data Visualization", "Deep Learning"]

            },
            fr: {
                university: "Université de Bishop's, Sherbrooke, Québec",
                degree: "Maîtrise en Informatique",
                skills: ["Conception de bases de données (SQL)", "Apprentissage automatique", "Visualisation des données", "Apprentissage profond"]

            }
        },
        {
            startDate: "2007-09",
            endDate: "2011-06",
            en: {
                university: "Celal Bayar University, Turkey",
                degree: "Bachelor in Mechanical Engineering"

            },
            fr: {
                university: "Université de Celal Bayar, Turquie",
                degree: "Baccalauréat en Génie Mécanique"

            }
        }
    ];

    return (
        <section className="py-5" id="education">
            <h2 className="fw-bolder text-center">{language == "en" ? "Education" : "Formation"}</h2>
            <div className="container px-5 my-5">

                {content.map((item, index) => (
                    typeof item[language] === "object" && (
                        <div className="row border-bottom py-2" key={index}>

                            <div className="col-3 fw-bold">{item[language].degree}</div>
                            <div className="col-3 text-muted">{item[language].university}</div>
                            <div className="col-2">
                                {item.startDate && item.endDate ? (
                                    `${getMonthName(item.startDate as string, language)} - ${getMonthName(item.endDate as string, language)}`
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-4">
                                {item[language].skills?.map((skill, idx) => (
                                    <span className="badge bg-primary me-1 text-white" key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>

        </section>
    );
};

export default Education;
