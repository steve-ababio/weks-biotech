'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import Header from './components/header/header';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        ease: "easeOut" // Strings work perfectly without casting
      }
    }
  };
  const itemVars:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };
  const imageVars:Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F3F4F6] ">
      <Header />
      <section className='px-6 sm:px-10 md:px-18 lg:px-24 flex justify-center py-10 items-center'>
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <motion.p 
            variants={itemVars}
            className="text-[#D15D39] text-center md:text-start font-semibold text-sm tracking-wide"
          >
            404 error
          </motion.p>
          
          <motion.h1 
            variants={itemVars}
            className="text-5xl md:text-6xl font-bold text-[#1F2937]"
          >
            Page not found
          </motion.h1>
          
          <motion.p 
            variants={itemVars}
            className="text-[#6B7280] text-lg max-w-md leading-relaxed"
          >
            Sorry, the page you are looking for doesn't exist. 
            Here are some helpful links:
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-col md:flex-row gap-4 pt-4">
            <button onClick={()=>{router.back()}} className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-gray-700 font-medium">
              <span>←</span> Go back
            </button>
            <Link href="/" className="px-6 py-3 cursor-pointer bg-[#D15D39] text-white rounded-lg shadow-sm hover:bg-[#b84e2f] transition-colors font-medium">
              Take me home
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <motion.div 
          variants={imageVars}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden mt-12 aspect-video w-full md:aspect-square">
            <img 
              src="/assets/images/not-found.svg" // Replace with your aerial landscape image
              alt="Landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </motion.div>
      </section>
    </div>

  );
}