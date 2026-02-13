// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import { MdxComponents } from '@/app/components/mdx-components/mdx-components';

// const JOB_PATH = path.join(process.cwd(), 'app/content/jobs');
// export default async function Job({ params }: { params: { slug: string } }) {
//     const {slug} = await params;
//     const filePath = path.join(JOB_PATH, `${slug}.mdx`);
//     const source = fs.readFileSync(filePath, 'utf8');
//     const { content, data } = matter(source);

//     return (
//         <main className="min-h-screen ">
//         <article>
//           <MDXRemote
//             source={content}
//             components={MdxComponents}
//           />
//         </article>
//         </main>
//       );

// }

import { MapPin, Briefcase, Calendar, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const JobPostingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700">
      {/* --- Hero Section --- */}
      <header className="relative h-[350px] w-full overflow-hidden">
        <img 
          src="/assets/images/job.svg" 
          alt="Call Center Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Call Center Representative</h1>
          <button className="bg-white text-slate-800 px-6 py-2 rounded font-medium hover:bg-gray-200 transition">
            APPLY NOW
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: Job Details --- */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Who Are We Looking For</h2>
            <p className="leading-relaxed">
              We are seeking a dedicated Customer Service Representative to join our growing team. 
              The ideal candidate is a problem-solver who enjoys helping people and thrives in a 
              fast-paced environment.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">What you will be doing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage large amounts of inbound and outbound calls.</li>
              <li>Identify and assess customers' needs to achieve satisfaction.</li>
              <li>Build sustainable relationships and trust through open communication.</li>
              <li>Keep records of customer interactions and process customer accounts.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Requirements & Skills</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proven customer support experience or experience as a Client Service Rep.</li>
              <li>Strong phone handling skills and active listening.</li>
              <li>Customer orientation and ability to adapt/respond to different types of characters.</li>
              <li>High school degree.</li>
            </ul>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">Salary</h3>
              <p>$18.00 - $22.00 / Hour</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </section>

          <div className="pt-8 border-t">
            <button className="w-full md:w-auto bg-[#c25e3d] text-white px-12 py-3 rounded-md font-bold hover:bg-[#a34d31] transition">
              Apply now
            </button>
          </div>
        </div>

        {/* --- Right Column: Sidebar --- */}
        <aside className="space-y-6">
          <div className="bg-[#FFFAEF] p-6 rounded-lg  ">
            <button className="w-full bg-[#CE532F] text-white py-3 rounded-[20px] font-bold mb-6">
              Apply now
            </button>
            
            <h3 className="font-bold text-lg mb-4">Job Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#11052B]" size={20} />
                <div><p className="text-[17px] text-[#CE532F]">Location</p><p className="font-medium">Remote / Boston</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#11052B]" size={20} />
                <div><p className="text-[17px] text-[#CE532F]">Job Type</p><p className="font-medium">Full-time</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-[#11052B]" size={20} />
                <div><p className="text-[17px] text-[#CE532F]">Date posted</p><p className="font-medium text-[#001833]">June 12, 2024</p></div>
              </div>
            </div>
          </div>
          <div className="mt-8">
              <p className="font-normal text-[#001833] mb-3">Share Job posting:</p>
              <div className="flex gap-2">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600 cursor-pointer"><Facebook size={18} /></div>
                <div className="p-2 bg-blue-50 rounded-full text-blue-400 cursor-pointer"><Twitter size={18} /></div>
                <div className="p-2 bg-blue-100 rounded-full text-blue-800 cursor-pointer"><Linkedin size={18} /></div>
              </div>
            </div>
        </aside>
      </main>

      {/* --- Other Positions Section --- */}
      <section className="bg-[#fdf8f4] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#c25e3d] mb-8">Here are Other Positions to Consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded border border-orange-100">
                <h4 className="font-bold mb-2">Customer Service Specialist</h4>
                <p className="text-sm text-orange-600 mb-4 font-semibold">Hybrid</p>
                <button className="text-sm font-bold underline">Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer Contact Section --- */}
      <footer className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#c25e3d] mb-6">Help us help you</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
              <textarea placeholder="Your message" rows={4} className="w-full p-3 border rounded"></textarea>
              <button className="bg-gray-400 text-white px-8 py-2 rounded">Submit</button>
            </form>
          </div>
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden grayscale">
            {/* Placeholder for Map */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              [Google Map Integration]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobPostingPage;