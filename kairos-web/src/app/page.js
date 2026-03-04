import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Pillars from '@/components/Pillars';
import HowItWorks from '@/components/HowItWorks';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import WhyKairos from '@/components/WhyKairos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <Pillars />
        <Work />
        <Reviews />
        <WhyKairos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
