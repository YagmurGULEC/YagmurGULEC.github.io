

export default function Hero({ language }: { language: 'en' | 'fr' }) {


    const content = {
        en: {
            title: "Hello, I'm Yagmur",
            text: "Full Stack Development | Data Enthusiast",
            subtext: "Full-stack developer and data engineer with experience building cloud-native pipelines, containerized applications, and applied machine learning models. Skilled in AWS serverless architectures, Terraform, and computer vision (YOLO-based detection). Passionate about making complex technical topics accessible—regular contributor to Towards Data Science, where I publish tutorials on data engineering and ML workflows.",
            cv: "/YagmurGulec_CV.pdf",
        },
        fr: {
            title: "Hello, I'm Yagmur",
            text: "Full Stack Development | Data Enthusiast",
            subtext: "Full-stack developer and data engineer with experience building cloud-native pipelines, containerized applications, and applied machine learning models. Skilled in AWS serverless architectures, Terraform, and computer vision (YOLO-based detection). Passionate about making complex technical topics accessible—regular contributor to Towards Data Science, where I publish tutorials on data engineering and ML workflows.",
            cv: "/YagmurGulec_CV.pdf",
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