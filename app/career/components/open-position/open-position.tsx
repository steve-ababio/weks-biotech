'use client'
import { useState } from 'react';

type Position = {
  id:number,
  title:string,
  category:string,
  type:string,
  location:string
}
const positions:Position[] = [
  // { id: 1, title: 'Call Center Representative', category: 'Customer Support', type: 'Hybrid', location: 'Beirut' },
  // { id: 2, title: 'Branch Customer Service Representative', category: 'Customer Support', type: 'Hybrid', location: 'Beirut' },
  // { id: 3, title: 'Marketing and Communication Specialist', category: 'Marketing', type: 'Hybrid', location: 'Beirut' },
  // { id: 4, title: 'Social Media Specialist', category: 'Marketing', type: 'Hybrid', location: 'Beirut' },
];

const OpenPositions = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Customer Support', 'Marketing'];

  const filteredPositions = activeTab === 'All' 
    ? positions 
    : positions.filter(p => p.category === activeTab);

  return (
    <div className="h-auto rounded-[28px] bg-[#FEFAEF] font-sans text-[#333]">
      <div className="mx-auto w-full">
        {/* Container */}
        <div className="py-10 px-4 md:p-10 ">
          {/* Tabs */}
          <div className="mb-8 flex space-x-8 border-b border-gray-200 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-lg transition-colors cursor-pointer duration-200 ${
                  activeTab === cat 
                    ? 'font-medium text-[#D95D39] border-b-2 border-[#D95D39] -mb-[10px] pb-2' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPositions.map((job) => (
              <div
                key={job.id}
                className="flex flex-col rounded-xl bg-white p-8 shadow-sm transition-transform hover:scale-[1.02]"
              >
                <h3 className="mb-6 text-xl font-bold leading-tight text-[#1A1A1A]">
                  {job.title}
                </h3>
                <div className="mt-auto space-y-2">
                  <p className="text-[#D95D39] font-medium">{job.type}</p>
                  <p className="text-gray-500">{job.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;