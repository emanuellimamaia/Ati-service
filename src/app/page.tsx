
import Blog from "@/components/Blog";
import Contact from "@/components/Features/Contact";
import Features from "@/components/Features";
import HeroSection from "@/components/Hero-section";
import Parceiros from "@/components/Parceiros";


export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <Blog/>
      <Parceiros/>
      <Features/>
      
    </main>
  )
}
