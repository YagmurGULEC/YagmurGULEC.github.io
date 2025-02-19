"use client";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Language from "./components/Language";
import Projects from "./components/Projects";

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
    text: "With a background in numerical modeling from academic research, I transitioned to software development, earning a Master's degree in computer science. I have gained hands-on experience across diverse projects and technologies. A quick learner with strong adaptability, I continuously expand my knowledge through online courses. Passionate about solving complex problems, optimizing performance, and building scalable applications, with a strong interest in continuous deployment and automation.",
    cv: "https://docs.google.com/document/d/e/2PACX-1vRjjEJVecE5U6Pbt4oiWG6Iz6bcrhsTfViALk3FbB0cw5p3qZa-yJbmF5MaYOA6XQ/pub",

  },
  fr: {
    title: "Bonjour, je suis Yagmur",
    text: "Avec une expérience en modélisation numérique issue de la recherche académique, j’ai effectué une transition vers le développement logiciel en obtenant une maîtrise en informatique. J’ai acquis une expérience pratique sur divers projets et technologies. Apprenante rapide avec une grande capacité d’adaptation, j’élargis continuellement mes connaissances à travers des formations en ligne. Passionnée par la résolution de problèmes complexes, l’optimisation des performances et le développement d’applications évolutives, j’ai un intérêt marqué pour le déploiement continu et l’automatisation.",
    cv: "https://docs.google.com/document/d/e/2PACX-1vTJIMvVT92ski4Vjt7QjbRKl6oQZc3aOCo3h-IoliGU-4QQg_jCdMHlwaNZIZDy9Q/pub"
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
      <Projects language={language as "en" | "fr"} />
      <Education language={language as "en" | "fr"} getMonthYear={getMonthYear} />
      <Language language={language as "en" | "fr"} />


    </>
  );

}
