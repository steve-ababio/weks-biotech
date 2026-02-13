import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "./components/hero/hero";
import Resources from "./components/resources/resources";

export default function Insight(){
    return(
        <main className="md:px-12 h-full lg:px-36 ">
            <Header />
            <Hero />
            <Resources />
            <Footer />
        </main>
    )
}