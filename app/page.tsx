import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MenuSection } from "@/components/menu";
import { Reviews } from "@/components/reviews";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <MenuSection />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
