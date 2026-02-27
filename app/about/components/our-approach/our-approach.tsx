export default function OurApproach(){
    return(
        <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 bg-white w-full">
                <div>
                    <h1 className="text-5xl font-extrabold text-[#CE532F] leading-[100%] mb-6">Our Approach</h1>
                    <p className="mb-6">As a research and innovation-driven company, plant tissue culture is embedded in our DNA. We’ve been developing solutions for this sector for over 3 decades. We differentiate ourselves by our horticultural know-how, automation expertise and unique multi-layer cultivation system</p>
                    <p>Using our approach, you can increase the rooting rate and uniformity of the plants. We do this by skipping the in-vitro rooting step using the Vitray; a “Greenhouse in a box” logistic solution for the protection of young plants. Our multi-layer indoor rooting & hardening setup creates a sterile and fully controlled production environment. In addition, we provide custom-made automation for all labor-intensive production processes.</p>
                </div>
                <div className='mb-8'>
                    <video src="/assets/videos/weks.mp4" controls   className='w-full h-full object-cover rounded-lg'></video>
                </div>
            </div>
        </section>
    )
}