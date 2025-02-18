"use client";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Language from "./components/Language";

import { useLanguage } from "./components/LanguageContext"; // ✅ Import Context

type ContentType = {
  title: string;
  text: string;
  cv: string;
};

type Content = {
  en: ContentType;
  fr: ContentType;
};


const content: Content = {

  en: {
    title: "Hello, I am Yagmur",
    text: "Passionate about building scalable and efficient software solutions, I am eager to transition into my first full-time software development role. Through multiple internships and hands-on projects, I have gained practical experience in backend development, cloud computing, working with technologies such as FastAPI, AWS, Docker, JavaScript. I thrive in dynamic environments where I can tackle complex challenges, collaborate with teams, and continuously expand my technical expertise. Excited to contribute my problem-solving skills and innovative mindset to a forward-thinking company while continuing to grow as a developer.",
    cv: "https://docs.google.com/document/d/1wbjZEvDCygx5BQ33yqTWvJzk4juyBb0zZKWQabrRaRI/edit?usp=sharing",

  },
  fr: {
    title: "Bonjour, je suis Yagmur",
    text: "Developpeuse de logiciels",
    cv: "https://docs.google.com/document/d/1STDxlTUh4cU33yqHdcd_9m06hhvZ-F42LnmOTxBudoE/edit?usp=sharing"
  }
};


const getMonthYear = (date: string, language: 'en' | 'fr') => {
  const months = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  };
  if (date === "" && language == "en") return "Present";
  if (date === "" && language == "fr") return "Présent";
  const [year, month] = date.split("-");
  return `${months[language][parseInt(month) - 1]} ${year}`;
}
export default function Home() {
  const { language } = useLanguage(); // ✅ Use Context

  return (

    <><About language={language} content={content} />
      <Timeline language={language as "en" | "fr"} getMonthYear={getMonthYear} />
      <Education language={language as "en" | "fr"} getMonthYear={getMonthYear} />
      <Language language={language as "en" | "fr"} />
      <Footer />
    </>
  );

}
