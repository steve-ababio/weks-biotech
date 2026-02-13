'use client'
import { testimonials } from "@/app/data/testimonials";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const numOfTestimonials = testimonials.length;
export default function ClientReviews() {
    const [active, setActive] = useState(0);
    const prev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
    const next = () => setActive(prev => ((prev + 1) % testimonials.length));
  return (
    <section className="md:px-10 lg:px-30">
        <div className="flex lg:justify-between justify-center md:items-center py-12">
            <button onClick={prev} className="h-14 w-14 hidden shadow-lg lg:flex items-center justify-center rounded-[50%] p-3 bg-[#F1B42D]"><BsArrowLeft size={32} color="white" /></button>
            <h1 className="text-[#061C3D] text-[38px] font-bold">What our client say</h1>
            <button  onClick={next} className="h-14 w-14 shadow-lg rounded-[50%] hidden lg:flex items-center justify-center p-3 bg-[#F1B42D]"><BsArrowRight size={32} color="white"/></button>
        </div>
        {/* SLIDER */}
        <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-full overflow-hidden">
          <div
            // style={{ transform: `translateX(-${active * ((100 / 3))}%)` }}
            style={{ '--active': active }  as React.CSSProperties}
            className="flex flex-col lg:flex-row px-8 lg:px-0 gap-10 transition-transform duration-500 ease-out translate-x-[-calc(var(--active)*(100%/3))]"
          >
            {testimonials.map((t, idx) => {
                const isActive = idx === active;
                return (
                    <div
                        key={idx}
                        className="shrink-0 flex justify-center items-start lg:w-[calc((100%/3)-40px)]"
                        // style={{width:'calc((100% / 3) - 40px)'}}
                    >
                        <div className="bg-[#F9FAFB] h-[300px] shrink-0 flex-1 shadow-sm rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                            src={testimonials[idx].image}
                            alt={testimonials[idx].name}
                            className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                            <h3 className="font-semibold text-lg">{testimonials[idx].name}</h3>
                            <p className="text-gray-500 text-sm">{testimonials[idx].role}</p>
                            </div>
                        </div>
        
                        <p className="text-gray-700 mb-6 text-[15px] leading-relaxed">
                            “{testimonials[idx].review}”
                        </p>
        
                        <div className="flex gap-1 text-yellow-400">
                            {Array.from({ length: testimonials[idx].stars }).map((_, i) => (
                            <span key={i}>★</span>
                            ))}
                        </div>
                        </div>
                    </div>
            )})}
            </div>
            </div>
            </div>
        
            {/* DOTS */}
            <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => {
                const isActive = i === active;
                return (<button
                key={i}
                // onClick={() => setactive(i)}
                className={`rounded-full duration-500  transition ${
                    isActive ? "w-10 h-3 bg-yellow-400" : "w-3 h-3 bg-gray-300"
                }`}
                />)
            })}
        </div>
      {/* </div> */}
    </section>
  )
}
