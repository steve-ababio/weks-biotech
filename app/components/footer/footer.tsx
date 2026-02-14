import Link from "next/link";

export default function Footer() {
    return (
      <footer className="w-full bg-[#f2f2f2] py-23.5 mt-11.5">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col lg:items-center justify-between px-6">
          
          {/* Left side */}
          <p className="text-[#0F172A] text-lg flex flex-col items-center lg:items-start gap-4 lg:gap-0 lg:flex-row">
            <span className="font-semibold">WEKS Biotechnologies</span> <span className="mb-4">© 2025. All rights reserved.</span>
          </p>
  
          {/* Right side links */}
          <div className="flex items-center  justify-evenly lg:justify-start lg:gap-7 text-[16px] text-[#475569]">
            <div className="flex gap-[3vw] flex-col lg:flex-row">
                <Link href="#" className="hover:text-black cursor-pointer transition">Terms</Link>
                <Link href="#" className="hover:text-black cursor-pointer transition">Privacy</Link>
                <Link href="#" className="hover:text-black cursor-pointer transition">Support</Link>
            </div>
            <div className="flex gap-[3vw] flex-col lg:flex-row">
                <Link href="/about" className="hover:text-black cursor-pointer transition">About</Link>
                <Link href="/insight" className="hover:text-black cursor-pointer transition">Resources</Link>
                <Link href="/about" className="hover:text-black cursor-pointer transition">Contact</Link>
            </div>
          </div> 
        </div>
      </footer>
    );
  }
  