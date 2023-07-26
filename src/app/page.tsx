
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HeroSection from "@/components/Hero-section";


export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <Blog/>
      <Features/>
      <Contact/>
    </main>
  )
}
