"use client";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full md:px-10 lg:px-30 px-8">
      <div className="bg-[#f5f7fa] rounded-3xl flex flex-col items-center text-center py-10 ">
      {/* Overlapping Avatars */}
      <div className="flex -space-x-4 mb-8">
        <Image
          src="/assets/images/avatars/contact-2.svg"
          alt="avatar 1"
          width={60}
          height={60}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/assets/images/avatars/contact-1.svg"
          alt="avatar 2"
          width={60}
          height={60}
          className="rounded-full border-2 border-white relative z-10 -top-1"
        />
        <Image
          src="/assets/images/avatars/contact-3.svg"
          alt="avatar 3"
          width={60}
          height={60}
          className="rounded-full border-2 border-white"
        />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold mb-8">
        Still have questions?
      </h2>

      <p className="text-gray-500 mb-8">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>

      {/* Button */}
      <button className="flex cursor-pointer items-center gap-2 bg-[#CE532F] hover:bg-[#CE532F] text-white px-8 py-3 rounded-full text-[16px] font-medium transition">
        Contact Us <Phone size={22} />
      </button>
      </div>
    </section>
  );
}
