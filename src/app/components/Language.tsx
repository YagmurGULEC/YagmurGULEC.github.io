import React from "react";

type TimelineProps = {
    language: "en" | "fr";
};

const Language: React.FC<TimelineProps> = ({ language }) => {
    type LanguageKeys = "English" | "French" | "Turkish" | "Anglais" | "Français" | "Turc";

    const content: { [key in TimelineProps["language"]]: { [key in LanguageKeys]: string } } = {
        en: {
            English: "Fluent",
            French: "Intermediate",
            Turkish: "Native",
            Anglais: "",
            Français: "",
            Turc: ""
        },
        fr: {
            Anglais: "Courant",
            Français: "Intermédiaire",
            Turc: "Maternel",
            English: "",
            French: "",
            Turkish: ""
        }
    };

    return (
        <section className="py-5" id="language">
            <h2 className="fw-bolder text-center">{language === "en" ? "Languages" : "Langues"}</h2>
            <div className="container text-center">
                <div className="row justify-content-center">
                    {Object.entries(content[language])
                        .filter(([_, level]) => Boolean(level)) // Use `_` instead of `lang`
                        .map(([lang, level], index) => (
                            <div key={index} className="col-md-4 my-2">
                                <div className="border rounded p-3 bg-light">
                                    <h5 className="fw-bold">{lang}</h5>
                                    <span className="badge bg-dark">{level}</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Language;
