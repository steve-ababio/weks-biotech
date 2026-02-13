import Image from "next/image";

type CardProps = {
    title:string,
    description:string,
    imageUrl:string
}
export default function Card({imageUrl,title,description}:CardProps){
    return(
        <div className="flex flex-col gap-8"> 
            <div className="relative h-70 rounded-[20px]">
                <Image src={imageUrl} alt="" className="rounded-[20px] object-cover" fill />
            </div>
            <div>
                <h2 className="text-[#101828] font-semibold text-2xl">{title}</h2>
            </div>
            <div>
                <p className="text-[#667085] text-base font-normal">{description}</p>
            </div>
        </div>
    )
}