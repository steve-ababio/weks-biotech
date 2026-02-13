// import TrustedCompanies from "@/app/components/companies/companies";
// import Image from "next/image";

// export default function Hero(){
//     return(
//         <section>
//             <div className="py-24">
//                 <h1 className="text-[#CE532F] mb-6 text-center text-5xl leading-16] font-semibold">About WEKS</h1>
//                 <p className="text-[#667085] text-center text-[20px] leading-7.5">Learn more about the company and the team behind it.</p>
//             </div>
//             <div>
//                 <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 bg-[#FFFAEF] p-30 w-full">
//                     <div>
//                         <Image src="/assets/images/about-us.svg" alt="" height={760} width={560} />
//                     </div>
//                     <div>
//                         <h1 className="text-5xl font-semibold mb-4.5 text-[#CE532F] leading-16">WEKS Biotechnologies Ltd – Rooted in Innovation</h1>
//                         <p className="text-[#667085] mb-8 text-lg leading-7">Everything you need to build modern UI and great products. We’ve done all the heavy lifting so you don’t have to — the perfect starting point for any project.</p>
//                         <div>
//                         <div>
//                             <div className="flex justify-between mb-8">
//                                 <div>
//                                     <div className="text-6xl mb-2 font-semibold text-[#CE532F]">400+</div>
//                                     <div>Projects completed</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-6xl mb-2 font-semibold text-[#CE532F]"> 600%</div>
//                                     <div>Return on investment</div>
//                                 </div>
//                             </div>
//                             <div className="flex justify-between">
//                                 <div>
//                                     <div className="text-6xl mb-2 font-semibold text-[#CE532F]">10k</div>
//                                     <div>Global downloads</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-6xl mb-2 font-semibold text-[#CE532F]">200+</div>
//                                     <div>5-star reviews</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             <TrustedCompanies />
//         </section>
//     )
// }
import Image from 'next/image';

export default function InnovationSection() {
  const stats = [
    { label: "Projects completed", value: "400+" },
    { label: "Return on investment", value: "600%" },
    { label: "Global downloads", value: "10k" },
    { label: "5-star reviews", value: "200+" },
  ];

  return (
    <section className="bg-[#FFFAEF] min-h-screen flex items-center justify-center px-6 md:px-12 py-6 md:py-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Container - Order 2 on mobile, Order 1 on desktop */}
        <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] w-full">
          <Image
           src="/assets/images/about-us.svg"
            alt="Aerial view of innovation site"
            fill
            className="object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Content Container - Order 1 on mobile, Order 2 on desktop */}
        <div className="order-1 lg:order-2 space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#CE532F] leading-tight">
              WEKS Biotechnologies Ltd – Rooted in Innovation
            </h1>
            <p className="text-[#667085] text-lg font-normal leading-relaxed max-w-lg">
              Everything you need to build modern UI and great products. 
              We've done all the heavy lifting so you don't have to — 
              the perfect starting point for any project.
            </p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-5xl font-semibold text-[#CE532F]">
                  {stat.value}
                </div>
                <div className="text-[#101828] font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}