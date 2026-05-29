import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
// import Blogs from "@/components/sections/blogs";
import Footer from "@/components/sections/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sathwikanumandla.in/#person",
      name: "Sathwik Anumandla",
      url: "https://sathwikanumandla.in",
      jobTitle: "Backend Developer",
      description:
        "Backend developer and second-year IT student focused on the logical side of engineering — system design, Node.js, Express, MySQL, and Python.",
      sameAs: [
        "https://github.com/sathwik-anumandla",
        "https://linkedin.com/in/sathwik-anumandla-531078325",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sathwikanumandla.in/#website",
      url: "https://sathwikanumandla.in",
      name: "Sathwik Anumandla",
      author: { "@id": "https://sathwikanumandla.in/#person" },
    },
  ],
};

export default function Home() {
  return (
    <main className="container  mx-auto w-4/5 md:w-3/5 xl:w-2/5 space-y-5 mt-7 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      {/* <Blogs /> */}
      <Footer />
    </main>
  );
}
