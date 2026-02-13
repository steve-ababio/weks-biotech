import React from 'react';
import { Users, Heart, TrendingUp, Smile, Flag, Zap } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-[#CE532F]" />,
      title: "Care about our team",
      description: "Understand what matters to our employees. Give them what they need to do their best work."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#CE532F]" />,
      title: "Be excellent to each other",
      description: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#CE532F]" />,
      title: "Pride in what we do",
      description: "Value quality and integrity in everything we do. At all times. No exceptions."
    },
    {
      icon: <Smile className="w-6 h-6 text-[#CE532F]" />,
      title: "Don't #!&$ the customer",
      description: "Understand customers' stated and unstated needs. Make them wildly successful."
    },
    {
      icon: <Flag className="w-6 h-6 text-[#CE532F]" />,
      title: "Do the impossible",
      description: "Be energized by difficult problems. Revel in unknowns. Ask \"Why?\", but always question, \"Why not?\""
    },
    {
      icon: <Zap className="w-6 h-6 text-[#CE532F]" />,
      title: "Sweat the small stuff",
      description: "We believe the best products come from the best attention to detail. Sweat the small stuff."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <span className="text-[#CE532F] font-semibold text-3xl tracking-wide uppercase">
          Our values
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
          How we work at WEKS
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-20">
          Our shared values keep us connected and guide us as one team.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#F1B42D36] rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium text-[#101828] mb-3">
                {value.title}
              </h3>
              <p className="text-[#667085] text-base font-normal leading-relaxed max-w-xs">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;