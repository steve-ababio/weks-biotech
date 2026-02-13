import Link from "next/link";

export default function NavItem({ href, label }: { href: string; label: string }) {
    return(
        <Link href={href} className="text-[#0F172A]">{label}</Link>
    )
}