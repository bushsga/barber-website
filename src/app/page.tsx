import Header from '@/components/Layout/Header';
import Hero from '@/components/Sections/Hero';
import Services from '@/components/Sections/Services';
import About from '@/components/Sections/About';
import Testimonials from '@/components/Sections/Testimonials';
import Contact from '@/components/Sections/Contact';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
