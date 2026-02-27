
export default function TissueCultureSolutionSection() {
  return ( 
    <section className="bg-[#FFFAEF] py-20 px-6 md:px-10 lg:px-30 flex flex-col-reverse gap-14 lg:flex-row items-center">
      {/* Left: Images */}
      <div className="flex flex-1 gap-6 ">
        <div className="flex gap-4 flx justify-between">
          {/* <div className="relative w-full h-[300px] rounded-3xl">
            <img
              src="/assets/images/tissue-culture-1.svg"
              alt="Lab worker holding sample"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <div className="relative w-full h-[300px] -mt-8 rounded-3xl">
            <img
              src="/assets/images/tissue-culture-2.svg"
              alt="Lab worker holding sample"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <div className="relative w-full h-[300px] rounded-3xl">
            <img
              src="/assets/images/tissue-culture-3.svg"
              alt="Lab worker holding sample"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div> */}
          <div>
          <video src="/assets/videos/weks.mp4" controls   className='w-full h-full object-cover rounded-lg'></video>
          </div>
        </div>
       
      </div>

      {/* Right: Text */}
      <div className="space-y-6 flex-1">
        <h2 className="text-3xl md:text-5xl font-bold text-[#C23A1B]">
          Tissue culture solutions
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether experienced with tissue culture or new to the plant tissue culture world,
          we provide everything to build a complete cutting-edge tissue culture laboratory.
          We provide a solution from the design of your facility to climate-controlled
          multilayer propagation rooms, labor-saving automation, worker equipment, growing
          consumables and in-house training.
        </p>
      </div>
    </section>
  );
}
