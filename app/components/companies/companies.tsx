'use client';
import Image from "next/image";
const companies = [
  { name: "Google", src: "/assets/images/logos/google.svg" },
  { name: "Netflix", src: "/assets/images/logos/netflix.svg" },
  { name: "Airbnb", src: "/assets/images/logos/airbnb.svg" },
  { name: "Amazon", src: "/assets/images/logos/amazon.svg" },
  { name: "Facebook", src: "/assets/images/logos/facebook.svg" },
  { name: "Grab", src: "/assets/images/logos/grab.svg" },
];

export default function TrustedCompanies() {
  const allCompanies = [...companies, ...companies]; // duplicate full list

  return (
    <section className="py-20 text-center px-6 md:px-20 overflow-hidden">
      <h2 className="text-[#696984] text-[28px] font-medium leading-[160%] mb-10">
        Trusted by 5,000+ Companies Worldwide
      </h2>

      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-track flex whitespace-nowrap">
          {allCompanies.map((company, i) => (
            <Image
              key={company.name + i}
              src={company.src}
              alt={company.name}
              width={120}
              height={60}
              className="h-10 w-auto mx-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* flicker-free animation */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
