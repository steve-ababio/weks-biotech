import Card from "@/app/approach/components/ui/card/card";
import { getAllPosts } from "@/app/lib/blog";

export default async function OtherArticles({slug}:{slug:string}){
    const posts = await getAllPosts();
    const filteredPosts = posts.filter(post=>post.slug !== slug).slice(0,4);
    return(
        <main className="mt-24">
            <div className="mb-6">
                <h1 className="text-[#101828] text-[36px] font-bold leading-11 mb-5">Other Solutions</h1>
                <p className="text-base text-[#667085] leading-7.5">The latest industry news, interviews, technologies, and resources.</p>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  gap-10 py-10
                ">
                    {
                        filteredPosts.map(solution=>(
                            <div className="w-full">
                                <Card {...solution} />
                                <a className="text-[#CE532F] text-base leading-6 mt-8 cursor-pointer flex items-center gap-2" href={`/blog/${solution.slug}`}>Read More 
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.834961 9.16829L9.16829 0.834961M9.16829 0.834961H0.834961M9.16829 0.834961V9.16829" stroke="#CE532F" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        ))
                    }
                </div>
        </main>
    )
}