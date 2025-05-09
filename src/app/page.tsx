"use client";

import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import { useLanguage } from "./components/LanguageContext"; // ✅ Import Context

import { get } from "http";

type ContentType = {
  title: string;
  text: string;
  cv: string;
};

type Content = {
  en: ContentType;
  fr: ContentType;
};
const getMonthName = (date: string, language: "en" | "fr") => {
  const monthNames: { [key: string]: string[] } = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ]
  };

  const month = new Date(date).getMonth() + 1; // Months are zero-based in JavaScript
  const year = new Date(date).getFullYear();
  return monthNames[language][month - 1] + " " + year;

}

export default function Home() {
  const { language } = useLanguage(); // ✅ Use Context

  return (
    <>
      <Hero language={language as "en" | "fr"} />
      <Projects language={language as "en" | "fr"} />
      <Publications language={language as "en" | "fr"} />
      <Timeline language={language as "en" | "fr"} getMonthYear={getMonthName} />
      <Education language={language as "en" | "fr"} getMonthName={getMonthName} />
      <Language language={language as "en" | "fr"} />
      <Contact language={language as "en" | "fr"} />

    </>
  );

}
