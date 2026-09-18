export type PropertyType = 'Plot' | 'Cottage' | 'House' | 'Villa' | 'Commercial Property' | 'Investment Opportunity';

export type PropertyLocation = 
  | 'Galiyat'
  | 'Nathia Gali'
  | 'Ayubia'
  | 'Khanaspur'
  | 'Kalabagh'
  | 'Murree'
  | 'Dunga Gali'
  | 'Changla Gali'
  | 'Khairagali';

export type PropertyPurpose = 'Buy' | 'Sell' | 'Investment';

export type PropertyStatus = 'Available' | 'Under Discussion' | 'Sold';

export interface Property {
  id: string;
  title: string;
  location: PropertyLocation;
  type: PropertyType;
  size: string; // e.g. "10 Marla", "1 Kanal", "5 Marla"
  price: string; // e.g. "Contact for Current Price" or specific quote
  status: PropertyStatus;
  description: string;
  imageUrl: string;
  features: string[];
  isFeatured?: boolean;
  isSampleListing: boolean;
  elevation?: string;
  roadAccess?: string;
  view?: string;
}

export interface LocationGuide {
  id: string;
  name: PropertyLocation;
  subtitle: string;
  description: string;
  elevation: string;
  distanceFromMurreeOrIslamabad: string;
  imageUrl: string;
  highlights: string[];
  keyPropertyTypes: string[];
}

export interface GuideArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  publishedDate: string;
}

export interface CustomerInquiry {
  id: string;
  name: string;
  whatsapp: string;
  preferredLocation: PropertyLocation | 'All Locations';
  propertyType: PropertyType | 'Any Type';
  budget: string;
  requirement: string;
  createdAt: string;
  autoResponseSummary?: string;
}

export interface SellPropertySubmission {
  id: string;
  name: string;
  whatsapp: string;
  propertyType: PropertyType;
  location: PropertyLocation;
  propertySize: string;
  expectedPrice: string;
  description: string;
  imageNames?: string[];
  submittedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    action: string;
  }[];
}
