import Header from '../components/header/header'
import Hero from './components/hero/hero'
import Solutions from './components/solutions/solutions'
import ContactMap from './components/contact-map/contact-map'
import Footer from '../components/footer/footer'

export default function OurApproach() {
  return (
    <main >
      <Header />
      <section className='px-6 lg:px-44'>
        <Hero />
        <Solutions />
        <ContactMap />
      </section>
      <Footer />
    </main>
  )
}

