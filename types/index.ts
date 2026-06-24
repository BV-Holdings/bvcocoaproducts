export interface QuoteFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  country: string;
  product: string;
  industry: string;
  estimatedVolume: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  source?: string;
}

export interface ProductSpecifications {
  moisture?: string;
  particleSize?: string;
  moq?: string;
  hsCode?: string;
  [key: string]: string | undefined;
}

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  description: string;
  specifications: ProductSpecifications;
  hsCode: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IndustryType {
  id: string;
  slug: string;
  name: string;
  description: string;
  useCaseDetail: string;
  icon?: string | null;
  order: number;
}
