import { getAllPosts } from "@/app/lib/blog";
import Card from "../ui/card/card"

export default async function Solutions() {
    const posts = await getAllPosts();
    return (
        <section className="py-6 lg:py-12 ">
            <h1 className="text-[#101828] text-[28px] font-semibold mb-4">Other Solutions</h1>
            <h2 className="text-[#667085] text-[16px] leading-6">The latest industry news, interviews, technologies, and resources.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]  gap-10 py-10 border-b border-b-[#EAECF0]
            ">
                {
                    posts.map(solution=>(
                    <div className="w-full">
                        <Card {...solution} />
                        <a className="text-[#CE532F] text-base leading-6 mt-8 cursor-pointer flex items-center gap-2" href={`/blog/${solution.slug}`}>Read More 
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.834961 9.16829L9.16829 0.834961M9.16829 0.834961H0.834961M9.16829 0.834961V9.16829" stroke="#CE532F" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>))
                }
            </div>
            {/* <div className="flex items-center justify-end">
                <a className="bg-[#CE532F] border-0 ring-1 cursor-pointer px-5 mt-4 text-right py-2 rounded-2xl text-white">View All</a>
            </div> */}
        </section>
    )
}
