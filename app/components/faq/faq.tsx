"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. Dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas."
  },
  {
    title: "Can I change my plan later?",
    content:
      "Dummy content: You can upgrade, downgrade, or modify your plan whenever you want. Nulla facilisi. Donec nec elit vel."
  },
  {
    title: "What is your cancellation policy?",
    content:
      "More dummy content: Cancel anytime. Sed vitae justo non urna facilisis tincidunt. Duis tristique mi eu."
  },
  {
    title: "Can other info be added to an invoice?",
    content:
      "Yes, additional invoice information can be added upon request. Dummy text continues here."
  },
  {
    title: "How does billing work?",
    content:
      "Billing happens on a monthly cycle. Dummy billing explanation lorem ipsum dolor sit amet."
  },
  {
    title: "How do I change my account email?",
    content:
      "You can change your email from your account settings page. This is placeholder content."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-20 md:px-10 lg:px-30">
      <div className="text-center mb-16">
        <h1 className="text-[#101828] text-[36px] font-semibold mb-4">Frequently Asked Questions </h1>
        <h2 className="text-[#667085] text-[20px] leading-6">Everything you need to know about the product and billing.</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-b-[#EAECF0] pb-3 ">
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <h3 className="text-[18px] text-[#101828] font-medium leading-7">
                {item.title}
              </h3>
                <button className="h-6 w-6 cursor-pointer rounded-full flex items-center justify-center border-2 border-[#CE532F]">
                    {openIndex === index ? (
                        <Minus className="text-[#CE532F]" size={20} />
                    ) : (
                        <Plus className="text-[#CE532F]" size={20} />
                    )}
                </button>
            </button>

            {/* Content */}
            <AnimatePresence>
                {openIndex === index && (
                    <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.09 }}
                    className="overflow-hidden text-[#667085] text-[16px] leading-6"
                >
                    {item.content}
                </motion.p>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
