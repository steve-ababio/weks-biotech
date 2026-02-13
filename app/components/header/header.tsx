'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Solution', href: '/approach' },
    { name: 'Insights', href: '/insight' },
    { name: 'Careers', href: '/career' },
    { name: 'About Us', href: '/about' },
  ];

  // Animation Variants
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "afterChildren" // TypeScript now knows this is valid
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.4, 
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "beforeChildren" 
      }
    }
  };
  
  const linkVariants: Variants = {
    closed: { x: -10, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };
  return (
    <header className="w-full bg-white border-b py-3 border-[#E2E8F0] font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 pr-3 md:pr-0">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Image 
              src="/assets/images/logo.svg" 
              alt="WEKS Biotechnologies Ltd." 
              width={180} 
              height={50} 
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-800 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href="tel:+" 
              className="flex items-center gap-2 bg-[#D1512D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b84424] transition-all"
            >
              Contact US
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 cursor-pointer focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  animate={isOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 8h16M4 12h16M4 16h16" }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-[#0F172A] hover:text-[#D1512D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                variants={linkVariants} 
                custom={navLinks.length}
                className="pt-6"
              >
                  <Link 
                    href="tel:+" 
                    className="flex items-center gap-2 bg-[#D1512D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b84424] transition-all"
                  >
                    Contact US
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;