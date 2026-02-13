import { CiSearch } from "react-icons/ci";

export default function Hero(){

    return(
        <section>
            <div className="h-180 flex flex-col ">
                <div className="h-full bg-[#FFFAEF] flex flex-col items-center justify-end gap-8">
                    <h2 className="text-[#CE532F] text-center md:text-start text-base bg-[#F9F5FF] rounded-2xl w-fit px-5 py-2">Our Blog</h2>
                    <h1 className="text-[#CE532F] text-center md:text-start text-5xl leading-16] font-semibold">Resources and insights</h1>
                    <p className="text-[#CE532F] text-center md:text-start text-[20px] leading-7.5">The latest industry news, interviews, technologies, and resources.</p>
                    <div className="max-w-[320px] w-full relative">
                        <CiSearch color="#667085"  className="absolute top-1/2 -translate-y-1/2 left-3" size={25}/>
                        <input type="search" placeholder="Search" className="px-10 bg-white border border-[#D0D5DD] w-full py-2 rounded-lg" />
                    </div>
                </div>
                <div 
                    className="h-full bg-[#FFF6E1]"
                    style={{clipPath:"polygon(0 0, 100% 0%, 100% 75%, 0% 100%)"}}
                ></div>
            </div>
        </section>
    )
}