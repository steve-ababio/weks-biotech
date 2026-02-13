import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import ValuesSection from "./components/how-we-work/how-we-work";
import OurApproach from "./components/our-approach/our-approach";
import TeamGrid from "./components/team/team";
import TestimonialSlider from "../components/testimonials-slider/testimonials-slider";
import InnovationSection from "./components/hero/hero";

export default function AboutUs(){
    return(
        <main>
            <Header />
            <section className="px-4 md:px-8 lg:px-20 xl:px-36">
            <div className="py-24">
                <h1 className="text-[#CE532F] mb-6 text-center text-5xl leading-16] font-semibold">About WEKS</h1>
                <p className="text-[#667085] text-center text-[20px] leading-7.5">Learn more about the company and the team behind it.</p>
            </div>
            <InnovationSection />
            <OurApproach />
            <TeamGrid />
            <ValuesSection />
            {/* <TestimonialSlider /> */}
            </section>
            <Footer />
        </main>
    )
}