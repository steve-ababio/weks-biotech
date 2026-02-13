import Image from 'next/image';
import { Twitter, Linkedin, Globe } from 'lucide-react'; // Example icons
import { TeamMember } from '@/app/types/types';

interface TeamMemberCardProps {
    member:TeamMember
}
export default function  TeamMemberCard({ member }:TeamMemberCardProps) {
  return (
    <div className="flex flex-col space-y-4">
      {/* Image Container */}
      <div className="relative aspect-5/4 overflow-hidden rounded-lg">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
        <p className="text-sm font-medium text-orange-600">{member.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed pt-2">
          {member.bio}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-slate-400">
        <a href="#" className="hover:text-slate-600"><Twitter size={20} /></a>
        <a href="#" className="hover:text-slate-600"><Linkedin size={20} /></a>
        <a href="#" className="hover:text-slate-600"><Globe size={20} /></a>
      </div>
    </div>
  );
};

