"use client";
import Image from 'next/image';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Growth', A: 120, fullMark: 150 },
  { subject: 'Innovation', A: 98, fullMark: 150 },
  { subject: 'Teamwork', A: 86, fullMark: 150 },
  { subject: 'Stability', A: 99, fullMark: 150 },
  { subject: 'Impact', A: 85, fullMark: 150 },
];

export default function Hero() {
  return (
    <section className="relative">
      {/* Top Image Banner */}
      <div className="relative h-[400px] rounded-[30px] w-full overflow-hidden">
        <Image 
          src="/assets/images/career.svg" // Replace with your actual image path
          alt="Careers at WEKS Team"
          fill
          className="object-cover rounded-[30px] brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Careers at WEKS
          </h1>
          <p className="max-w-2xl text-white/90 text-lg">
            Join a team of visionaries, creators, and problem solvers working 
            together to build the future of sustainable ornamentals.
          </p>
        </div>
      </div>

      {/* Stats/Radar Section */}
      <div className="bg-white mt-16 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#CE532F] mb-6 leading-tight">
              Growing More Than Ornamentals — <br />
              <span>We Grow Opportunities</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At WEKS, we believe that the best work happens when people are 
              empowered to grow. Our internal metrics show consistent year-over-year 
              improvement in employee satisfaction and creative output.
            </p>
          </div>

          <div className="w-full bg-white rounded-2xl p-4 ">
                <div className="flex flex-1 items-center justify-center">
                    <img src="/assets/images/tissue-planter.svg" />
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}