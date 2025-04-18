
import Image from "next/image";

type ContentType = {
    [language: string]: {
        title: string;
        text: string;
        cv: string;
    };
};


export default function About({ language, content }: { language: string, content: ContentType }) {

    return (


        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-3 order-first order-lg-last"><Image
                        className="img-fluid rounded-circle mb-4"
                        src="/resim.jpg" // ✅ Include `/` at the beginning
                        width={150}
                        height={150}
                        alt="Profile Picture"
                    /></div>
                    <div className="col-lg-9">

                        <h2 className="fw-bolder">
                            {content[language].title}
                        </h2>
                        <p className="lead fw-normal text-muted mb-0">
                            {content[language].text}</p>
                        <div className="mt-3 d-flex justify-content-center align-items-center gap-3 flex-wrap">
                            {/* Email */}
                            <a className="fs-2 link-success d-flex align-items-center" href="mailto:yagmurgulec89@gmail.com">
                                <i className="bi bi-envelope me-1"></i>

                            </a>

                            {/* GitHub */}
                            <a className="fs-2 link-success" href="https://github.com/YagmurGULEC" target="_blank">
                                <i className="bi bi-github"></i>
                            </a>

                            {/* LinkedIn */}
                            <a className="fs-2 link-success" href="https://linkedin.com/in/yagmur-gulec/" target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </a>

                            {/* CV Button */}
                            <a className="btn btn-success btn-lg" href={language === "en" ? content.en.cv : content.fr.cv} target="_blank">
                                {language === "en" ? "Preview my CV" : "Aperçu de mon CV"}
                            </a>
                            <span className="fw-bold text-success fs-6">yagmurgulec89@gmail.com</span>
                        </div>
                    </div>

                </div>


            </div>


        </section>
    );
}   