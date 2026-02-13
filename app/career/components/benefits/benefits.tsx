import { Wallet, Clock, Heart, GraduationCap } from 'lucide-react';

const benefits = [
  {
    title: "Compensation",
    description: "We offer competitive weekly salaries and performance-based annual bonuses to ensure our team feels valued.",
    icon: <Wallet className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "Flexible Working Hours",
    description: "Work-life balance isn't just a buzzword here. We offer flexible scheduling to fit your personal lifestyle and needs.",
    icon: <Clock className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "Health & Wellbeing",
    description: "Comprehensive health insurance plans and wellness programs to keep you and your family healthy and happy.",
    icon: <Heart className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "Personal Development",
    description: "Continuous learning is in our DNA. We provide stipends for courses, workshops, and career coaching.",
    icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className='py-16'>
      <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-[#CE532F] mb-2">Benefits</h2>
          <p className="text-[#11052B] text-xl font-normal">Everything you need to thrive personally and professionally.</p>
        </div>  
      <div className="max-w-6xl rounded-[28px] px-4 md:px-16  py-16 mx-auto bg-[#CE532F29]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[10px_32px_72px_0px_#33333308] transition-shadow duration-300"
            >
              {/* <div className="mb-4 bg-orange-50 w-12 h-12 flex items-center justify-center rounded-lg">
                {benefit.icon}
              </div> */}
              <h3 className="text-xl font-semibold text-[#CE532F] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#11052B] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}