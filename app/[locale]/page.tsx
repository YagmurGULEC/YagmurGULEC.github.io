import Image from "next/image";
import SiteNavbar from "../components/SiteNavbar";
import RenderMarkdown from "../components/RenderMarkdown";
import Footer from "../components/Footer";
import { getMarkdownContent } from "../lib/markdown";
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const sections = ['cv'];
  const sectionData = await Promise.all(
    sections.map((section) => getMarkdownContent('content', locale, section))
  );

  return (

    <div className="flex flex-col min-h-screen bg-background text-foreground">


      {sections.map((section, index) => (
        <RenderMarkdown key={section} contentHtml={sectionData[index].contentHtml} name={section} />
      ))}




    </div>
  );
}



