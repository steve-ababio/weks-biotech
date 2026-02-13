export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    socials: {
      twitter?: string;
      linkedin?: string;
      website?: string;
    };
  }
  