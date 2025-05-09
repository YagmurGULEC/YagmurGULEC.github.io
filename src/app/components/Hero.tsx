

export default function Hero({ language }: { language: 'en' | 'fr' }) {


    const content = {
        en: {
            title: "Hello, I'm Yagmur",
            text: "Full Stack Development | Data Enthusiast",
            subtext: "I am a software developer passionate about building applications that solve real-world problems. I specialize in Python, Flask, SQL, and deploying full-stack apps using Docker and AWS.",
            cv: "/CV.pdf",
        },
        fr: {
            title: "Bonjour, je suis Yagmur",
            text: "Développement Full Stack | Passionnée de données",
            subtext: "Je suis un développeur logiciel passionné par la création d'applications qui résolvent des problèmes concrets. Je me spécialise dans Python, Flask, SQL et le déploiement d'applications full-stack utilisant Docker et AWS.",
            cv: "/CV.pdf",
        },
    }
    return (
        <section className="hero bg-light text-white text-center py-5">
            <div className="container">

                <h1>{content[language].title}</h1>
                <p className="lead">{content[language].text}</p>
                <p className="text-center w-75 mx-auto">{content[language].subtext}</p>

                <a href={content[language].cv} className="btn btn-primary btn-lg mt-3" target="_blank">
                    {language === "fr" ? "Télécharger mon CV" : "Download my CV"}
                </a>
            </div>
        </section>
    );
}