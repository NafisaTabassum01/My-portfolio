import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';
import AcademicTimeline from '@/components/AcademicTimeline';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#020617]">
      {/* Dynamic Background Glow Effect (Controlled via CSS variables in CustomCursor) */}
      <div className="mouse-glow" />
      
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <About/>
      <TechStack />
      <AcademicTimeline />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
