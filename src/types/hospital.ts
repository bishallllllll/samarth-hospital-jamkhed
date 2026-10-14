export interface Department {
  id: string;
  name: string;
  nameMr: string;
  iconName: string;
  isVerified: boolean;
  shortDescription: string;
  shortDescriptionMr: string;
  fullDescription: string;
  fullDescriptionMr: string;
  services: string[];
  servicesMr: string[];
  headDoctorId?: string;
  badge?: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameMr: string;
  role: string;
  roleMr: string;
  department: string;
  departmentMr: string;
  qualification: string;
  qualificationStatus: 'verified' | 'provisional_pending_approval';
  experience?: string;
  opdTimings: string;
  opdTimingsMr: string;
  bio: string;
  bioMr: string;
  image: string;
  isDirector: boolean;
  isVisiting: boolean;
}

export interface Facility {
  id: string;
  title: string;
  titleMr: string;
  description: string;
  descriptionMr: string;
  icon: string;
  highlight: string;
  highlightMr: string;
  isVerified: boolean;
  image?: string;
}

export interface FAQItem {
  question: string;
  questionMr: string;
  answer: string;
  answerMr: string;
  category: string;
}

export interface HospitalConfig {
  meta: {
    siteTitle: string;
    siteDescription: string;
    siteDescriptionMr: string;
    foundedYear?: string;
    version: string;
    isPrototype: boolean;
  };
  identity: {
    nameEn: string;
    nameMr: string;
    taglineEn: string;
    taglineMr: string;
    registeredEntityName: string;
    entityStatus: 'verified' | 'provisional';
    registrationNote: string;
  };
  contact: {
    emergencyNumber: string;
    receptionNumber: string;
    tpaInsuranceNumber?: string;
    ambulanceNumber: string;
    displayHelpline: string;
    whatsappNumber?: string;
    isWhatsappVerified: boolean;
    email: string;
    isEmailVerified: boolean;
    hours: {
      emergency: string;
      emergencyMr: string;
      opd: string;
      opdMr: string;
      visiting: string;
      visitingMr: string;
    };
  };
  location: {
    addressLine1: string;
    addressLine1Mr: string;
    landmark: string;
    landmarkMr: string;
    city: string;
    district: string;
    districtAlt: string;
    state: string;
    pincode: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    nearbyTransport: {
      busStation: string;
      busStationMr: string;
      distance: string;
    }[];
  };
  directors: Doctor[];
  departments: Department[];
  facilities: Facility[];
  faqs: FAQItem[];
}
