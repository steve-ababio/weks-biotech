import React from 'react';
import { Users, ShieldCheck, BookOpen, TrendingUp } from 'lucide-react';

const JoinTeam = () => {
  const benefits = [
    {
      title: "Team work",
      description: "At Weks, we believe in the incredible power of teamwork. We're not just a workforce; we're a family that collaborates, supports, and inspires one another to achieve remarkable things. Join us, and you'll be part of a team where your individual strengths contribute to a collective success story.",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-100"
    },
    {
      title: "Secured Future",
      description: "We're dedicated to providing a secure future for all our team members. We understand that peace of mind and stability are essential in a fulfilling career. Join us, and you'll become part of an organization that values your long-term well-being.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-100"
    },
    {
      title: "Learning Opportunity",
      description: "Discover boundless horizons of learning at Mojo. We are not just an organization; we are a learning ecosystem that thrives on curiosity and the pursuit of knowledge.",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50"
    },
    {
      title: "Up-Skill",
      description: "We are committed to your continuous growth and development. With our strong focus on up-skilling, we provide you with the tools, resources, and opportunities to enhance your skills and advance your career.",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Header */}
        <div className="lg:col-span-5">
          <h2 className="text-[32px] font-bold text-[#D35A33] leading-tight mb-6">
            Why you Should Join Our Awesome Team
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            We want you to feel at home when you are working at Mojo. 
            For that we have curated a great set of benefits for you. 
            It all starts with the free lunch!
          </p>
        </div>

        {/* Right Column: Benefits Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon Wrapper */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${benefit.bgColor}`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoinTeam;