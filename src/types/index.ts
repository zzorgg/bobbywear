export interface Product {
  id: number;
  name: string;
  designNumber: string;
  description: string;
  images: string[];
  imageColors?: string[];
  image: string;
  category: string;
  size: string;
  color?: string;
  details: string;
  reviews: Review[];
}

export interface Review {
  user: string;
  text: string;
}

export interface Filters {
  category: string;
  size: string;
  color: string;
}

export interface UserMetric {
  label: string;
  value: string | number;
  trend?: string;
}

export interface ContentItem {
  id: number;
  title: string;
  type: 'product' | 'blog' | 'page';
  status: 'draft' | 'published';
  lastModified: string;
}

export type Theme = 
  | 'corporate'
  | 'business'
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'
  | 'cmyk'
  | 'autumn'
  | 'acid'
  | 'lemonade'
  | 'night'
  | 'coffee'
  | 'winter'
  | 'dim'
  | 'nord'
  | 'sunset'
  | 'caramellatte'
  | 'abyss'
  | 'silk';