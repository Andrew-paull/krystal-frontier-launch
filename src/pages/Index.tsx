import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Values from "@/components/Values";
import Commitment from "@/components/Commitment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Approach />
        <Values />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
