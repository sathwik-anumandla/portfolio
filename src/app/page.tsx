import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="container  mx-auto w-4/5 md:w-3/5 xl:w-2/5 space-y-5 mt-7 py-10">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}