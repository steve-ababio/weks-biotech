"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface GenericCardProps {
  imageUrl: string;
  overlayText?: string;
  title: string;
  description: string;
  author: string;
  authorImage?: string;
  date: string;
  Icon?: React.ElementType; // optional icon component
}

export default function Card({
  imageUrl,
  overlayText,
  title,
  description,
  author,
  authorImage,
  date,
  Icon = ArrowUpRight,
}: GenericCardProps) {

  const transformedDate = new Date(date).toLocaleDateString("en-Us",{
    year:"numeric",
    month:"short",
    day:"2-digit"
  })
  return (
    <div className="rounded-3xl bg-white px-6 py-6 shadow-[0px_12px_16px_-5px_rgba(16,24,40,0.19)] border border-gray-100 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Optional overlay text */}
        {/* {overlayText && (
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <span className="text-white text-3xl font-serif tracking-wide drop-shadow">
              {overlayText}
            </span>
          </div>
        )} */}
      </div>

      {/* Content */}
      <div className="pt-6"> 
        <div className="flex items-start justify-between">
          <h2 className="text-[20px] text-[#101828] font-semibold leading-snug">
            {title}
          </h2>

          <Icon className="w-6 h-6 text-gray-600" />
        </div>

        <p className="text-[#667085] text-base mt-3 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 mt-6">  
          {/* <div className="relative rounded-full h-10 w-10">
            <Image
                src={authorImage ?? ""}
                fill
                alt={author}
                className="rounded-full object-cover"
            />
         </div> */}
          <div>
            <p className="font-medium text-[#101828]">{author}</p>
            <p className="text-[#667085] text-sm">{transformedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
