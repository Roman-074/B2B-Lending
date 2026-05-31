import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tasks from "@/components/Tasks";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Cooperation from "@/components/Cooperation";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Tasks />
        <About />
        <Services />
        <Benefits />
        <Cooperation />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
