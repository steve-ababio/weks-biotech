import ContactMap from '../approach/components/contact-map/contact-map';
import ContactSection from '../components/contact/contact';
import Faq from '../components/faq/faq';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import BenefitsSection from './components/benefits/benefits';
import Hero from './components/hero/hero';
import JoinTeam from './components/join-team/join-team';
import OpenPositions from './components/open-position/open-position';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <Header />
        <div className='px-4 md:px-8 lg:px-20 xl:px-36'>
            <Hero />
            <section className="w-full py-20">
                <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Open Positions</h2>
                <OpenPositions />
            </section>
            <JoinTeam />
            <BenefitsSection />
            <Faq />
            {/* <Contact */}
            <ContactSection />
            <ContactMap />
        </div>
        <Footer />  
    </main>
  );
}