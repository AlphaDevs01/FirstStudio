export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface ModelSet {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  images: string[];
  detailedDescription: string;
}

export interface ProgrammingSet {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  codeImages: string[];
  functionality: string;
  technicalDetails: string;
  illustrations: string[];
}

export interface AddonSet {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  videoUrl: string;
  embedId: string;
}