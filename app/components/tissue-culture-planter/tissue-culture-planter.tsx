import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function TissueCultureSolutionPlanter() {
    return (
        <section className="md:px-10 lg:px-30">
            <div className="bg-white py-20 px-6  flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 space-y-6 flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-[#C23A1B]">
                    Tissue Culture Planter
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                WEKS unlock Tissue Culture automation. With its high-tech technology, this innovative Tissue Culture Planter elevates your Tissue Culture production to new levels of excellence.
                </p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <img src="/assets/images/tissue-planter.svg" />
                </div>
            </div>
           




<div className="relative w-full h-[450px] sm:h-[500px] lg:rounded-xl overflow-hidden">
    {/* Overlay */}
    <div className="absolute z-10 inset-0 bg-[#b14423b9] lg:rounded-xl"></div>
    {/* Image */}
    <img
        src="/assets/images/hero.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
    />

    {/* Text Content */}
    <div className="absolute inset-0 z-10 flex items-center justify-center lg:justify-end px-6 lg:px-12">
        <div className="max-w-[550px] text-white space-y-6">
        <h1 className="font-bold  text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Tissue Culture Planter
        </h1>

        <p className="text-base lg:text-lg">
            WEKS unlock Tissue Culture automation. With its
            high-tech technology, this innovative Tissue Culture Planter elevates
            your Tissue Culture production to new levels of excellence.
        </p>

        <p className="sm:block text-base lg:text-lg">
            By automating the transplanting process, it optimizes production
            capacity and boosts operational efficiency, while also ensuring uniform
            growth, sterility assurance, and enhanced traceability through advanced
            software integration.
        </p>

        <Link href="#" className="flex text-xl items-center gap-4 font-semibold mt-2">
            Read more <BsArrowRight />
        </Link>
        </div>
    </div>
</div>

        </section>
    );
  }
  