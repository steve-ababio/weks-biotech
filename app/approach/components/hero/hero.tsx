import React from 'react'

export default function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 mb-10 lg:py-12 border-b border-b-[#E2E8F0]'>
        <div className='mb-8'>
            <h2 className='text-[#CE532F] font-extrabold text-3xl mb-6'>Our Approach</h2>
            <div className='text-[16px] text-[#475569]'>
                <p className='mb-6'>As a research and innovation-driven company, plant tissue culture is embedded in our DNA. We’ve been developing solutions for this sector for over a decade. We differentiate ourselves by our horticultural know-how, automation expertise and unique multi-layer cultivation system.</p>
                <p>Using our approach, you can increase the rooting rate and uniformity of the plants. We do this by skipping the in-vitro rooting step using the Vitray; a “Greenhouse in a box” logistic solution for the protection of young plants. Our multi-layer indoor rooting & hardening setup creates a sterile and fully controlled production environment. In addition, we provide custom-made automation for all labor-intensive production processes.</p>
            </div>
        </div>
        <div className='mb-8'>
          <video src="/assets/videos/weks.mp4" controls   className='w-full h-full object-cover rounded-lg'></video>
        </div>
    </section>
  )
}
