import Card from "@/app/insight/components/ui/card/card";
import { getAllInsights } from "@/app/lib/blog";
import Link from "next/link";

export default async function OtherInsights({slug}:{slug:string}){
    const posts = await getAllInsights();
    const filteredPosts = posts.filter(post=>post.slug !== slug).slice(0,4);
    return(
        <main className="mt-24">
            <div className="mb-6">
                <p className="text-[#CE532F] mb-3">Our blog</p>
                <h1 className="text-[#101828] text-[36px] font-semibold leading-11 mb-5">Latest blog posts</h1>
                <p className="text-base text-[#667085] leading-7.5">Tool and strategies modern teams need to help their companies grow.</p>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  gap-10 py-10
                ">
                    {
                        filteredPosts.map(resource=>(
                            <div className="w-full">
                                <Link key={resource.slug}  href={`/insight/${resource.slug}`}>
                                    <Card 
                                        imageUrl={resource.imageUrl}
                                        title={resource.title}
                                        author={resource.author}
                                        date={resource.date}
                                        description={resource.description}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
        </main>
    )
}