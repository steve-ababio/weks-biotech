import ClientReviews from "./components/client-reviews/client-reviews";
import TrustedCompanies from "./components/companies/companies";
import Contact from "./components/contact/contact";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import TissueCultureSolutionPlanter from "./components/tissue-culture-planter/tissue-culture-planter";
import TissueCultureSolutionSection from "./components/tissue-culture-solution/tissure-culture-solution";
import TestimonialSlider from "./components/testimonials-slider/testimonials-slider";
export default function Home() {
  return (
    <main>
       <Header />
      <section className="bg-white overflow-x-hidden">
        <Hero />
        {/* <TrustedCompanies /> */}
        {/* <section className=" grid grid-cols-1 lg:grid-cols-2">
            <div></div>
            <div></div>
        </section> */}
        <TissueCultureSolutionSection />
        <TissueCultureSolutionPlanter />
        {/* <TestimonialSlider /> */}
        <Faq/>
        <Contact />
        </section>
        <Footer />
    </main>
  );
}
