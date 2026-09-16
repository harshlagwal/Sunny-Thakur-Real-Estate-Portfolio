export type PropertyCategory = 'plots' | 'kothis' | 'flats' | 'villas';

export interface PropertyItem {
  id: string;
  title: string;
  category: PropertyCategory;
  categoryLabel: string;
  location: string;
  basicInfo: string;
  shortDescription: string;
  imageUrl: string;
  aspectClass?: string;
}

export interface TerritoryNode {
  id: 'kurali' | 'kharar' | 'chandigarh';
  name: string;
  badge: string;
  tagline: string;
  transit: string;
  elevation: string;
  coords: string;
  primaryTypology: string;
  highlights: string[];
  description: string;
  strategicNote: string;
}

export interface CategoryInfo {
  id: PropertyCategory;
  number: string;
  name: string;
  tagline: string;
  editorialStatement: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface TimelineMilestone {
  year: string;
  chapter: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  propertyType: string;
  dealDetail?: string;
  rating?: number;
  badge?: string;
  year: string;
}

export interface LocalityHotspot {
  id: string;
  name: string;
  subTitle: string;
  tag: string;
  badge: string;
  mapQuery: string;
  googleMapsUrl: string;
  coords: string;
  keySizes: string[];
  propertyTypes: string;
  recentDeals: string;
  distanceHighlights: { label: string; time: string }[];
  description: string;
  whyInvest: string[];
}

export interface AreaGuideItem {
  id: string;
  name: string;
  zone: string;
  badge: string;
  tagline: string;
  description: string;
  primaryTypologies: string;
  transitInfo: string;
  appreciationTrend: string;
}

export interface InquiryFormData {
  propertyType: string;
  locality: string;
  budget: string;
  name: string;
  phone: string;
  message?: string;
}
