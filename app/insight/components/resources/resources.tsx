import { GoArrowDown } from "react-icons/go";
import Card from "../ui/card/card";
import { getAllInsights } from "@/app/lib/blog";
import Link from "next/link";

export const resources = [
    {
      image: "/assets/images/blog/blog-1.svg",
      overlayText: "Sonia white",
      title: "Innovations in commercial farming",
      description:
        "Explore how modern techniques are transforming traditional farming practices, improving yield and sustainability.",
      authorName: "Phoenix Baker",
      authorImage: "/assets/images/blog/blog-1.svg",
      date: "19 Jan 2022",
    },
    {
      image: "/assets/images/blog/blog-2.svg",
      overlayText: "AI Research",
      title: "The rise of automation in product design",
      description:
        "Automation tools are becoming central in product design workflows, enhancing creativity and productivity.",
      authorName: "Ava Johnson",
      authorImage: "/assets/images/blog/blog-2.svg",
      date: "03 Feb 2023",
    },
    {
      image: "/assets/images/blog/blog-3.svg",
      overlayText: "Urban Life",
      title: "Smart cities and the future of infrastructure",
      description:
        "Connected systems and IoT are redefining how cities function, improving safety and transportation.",
      authorName: "Liam Carter",
      authorImage: "/assets/images/blog/blog-3.svg",
      date: "10 Mar 2023",
    },
    {
      image: "/assets/images/blog/blog-4.svg",
      overlayText: "Productivity",
      title: "Why hybrid workplaces are here to stay",
      description:
        "Flexible work environments offer increased satisfaction and efficiency for teams worldwide.",
      authorName: "Mia Thompson",
      authorImage: "/assets/images/blog/blog-4.svg",
      date: "27 Jun 2022",
    },
    {
      image: "/assets/images/blog/blog-5.svg",
      overlayText: "Adventure",
      title: "Hidden gems for travelers in West Africa",
      description:
        "Discover beautiful and lesser-known travel spots across Ghana, Togo, and Benin.",
      authorName: "Kwame Mensah",
      authorImage: "/assets/images/blog/blog-5.svg",
      date: "11 Aug 2022",
    },
    {
        image: "/assets/images/blog/blog-5.svg",
        overlayText: "Adventure",
        title: "Hidden gems for travelers in West Africa",
        description:
          "Discover beautiful and lesser-known travel spots across Ghana, Togo, and Benin.",
        authorName: "Kwame Mensah",
        authorImage: "/assets/images/blog/blog-5.svg",
        date: "11 Aug 2022",
      },
  ];
  

export default async function Resources(){
  const posts = await getAllInsights();
    return(
        <div className="px-6 lg:px-0">
            <div className="relative -top-65 grid  sm:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-8 xl:px-28">
                {
                    posts.map((resource,index)=>(
                      <Link key={resource.slug}  href={`/insight/${resource.slug}`}>
                        <Card 
                          imageUrl={resource.imageUrl}
                          title={resource.title}
                          author={resource.author}
                          date={resource.date}
                          description={resource.description}
                        />
                      </Link>
                    ))
                }
            </div>
            {/* <div className="relative -top-40 flex items-center justify-center">
                <button className="flex items-center gap-3 bg-[#F9F5FF] px-4 py-2.5 rounded-3xl">
                    <GoArrowDown size={16} color="#CE532F" /> <span className="text-[#CE532F]">Load More</span>
                </button>
            </div> */}
        </div>
    )
}