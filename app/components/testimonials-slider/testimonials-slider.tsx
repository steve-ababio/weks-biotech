"use client";

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Jerome Bell", company: "Google", text: "This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!", stars: 5 },
  { id: 2, name: "Kristin Watson", company: "Netflix", text: "Less than 24h turn around. Easy communication. Did exactly as offered, all around a perfect experience.", stars: 5 },
  { id: 3, name: "Annette Black", company: "Whatsapp", text: "Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills...", stars: 5 },
  { id: 4, name: "Robert Fox", company: "Meta", text: "Incredible attention to detail and a very smooth workflow from start to finish.", stars: 5 },
  { id: 5, name: "Jane Cooper", company: "Amazon", text: "Exceeded all expectations. The technical expertise shown here is unmatched.", stars: 5 }
];

export default function CardBasedScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      
      // Calculate the width of a single card + the gap (24px for gap-6)
      const cardElement = container.firstChild as HTMLElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth + 24; 
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.firstChild as HTMLElement;
      const cardWidth = cardElement.offsetWidth + 24;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-20 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="p-3 rounded-full border border-gray-200 bg-white text-yellow-500 hover:bg-yellow-50 transition-all shadow-sm disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <h2 className="text-4xl font-bold text-[#0f172a]">What our client say</h2>

          <button 
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="p-3 rounded-full bg-[#f5bc41] text-white hover:bg-[#e5ac31] transition-all shadow-lg disabled:opacity-30"
            disabled={activeIndex === testimonials.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] md:min-w-[350px]  snap-start bg-white p-8 rounded-2xl shadow-[0px_12px_32px_0px_#061C3D0A] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-linear-to-tr from-pink-400 to-yellow-400" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">“{item.text}”</p>
              </div>
              <div className="flex gap-1">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#f5bc41" color="#f5bc41" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 1:1 Card Indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === i 
                  ? "w-8 h-2 bg-[#f5bc41]" 
                  : "w-2 h-2 bg-yellow-200 hover:bg-yellow-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}