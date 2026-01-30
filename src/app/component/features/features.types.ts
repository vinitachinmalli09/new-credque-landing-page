export interface Feature {
  id: string;
  label: string;
  highlighted?: boolean;
  image?: string; // Add the ? to make it optional
}

export interface TeamMember {
  id: number;
  userId: string;
  name: string;
  accessType: string;
  org: string;
  designation: string;
  email: string;
  status: 'Active' | 'Inactive';
}