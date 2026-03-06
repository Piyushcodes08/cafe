import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Concept from "../components/Concept";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Hours from "../components/Hours";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Concept />
      <Menu />
      <Gallery />
      <Hours />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
