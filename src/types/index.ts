export interface VehicleData {
  registrationNumber: string;
  make: string;
  model: string;
  year: number;
  fuelType: string;
  ownershipCount: number;
  insuranceStatus: string;
  challansCount: number;
  riskScore: number;
  estimatedValue: {
    min: number;
    max: number;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonAction: () => void;
}