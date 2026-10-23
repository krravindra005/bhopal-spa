/**
 * Pranaya Wellness Sanctuary — Centralized Business Configuration
 * ===============================================================
 * 
 * Update this file to modify office location, Google Maps integration,
 * contact email, phone status, or sanctuary operating hours.
 * 
 * All site components read directly from this configuration.
 */

export interface BusinessConfig {
  brandName: string;
  brandShort: string;
  tagline: string;
  shortDescription: string;
  city: string;
  state: string;
  country: string;
  zipFileName: string;
  
  /**
   * Street address or office suite placeholder.
   */
  streetAddressPlaceholder: string;
  isExactStreetAddressConfigured: boolean;

  /**
   * Official contact email
   */
  email: string;

  /**
   * Business mobile number.
   * NOTE: Keep configurable as the actual phone number is pending client provision.
   */
  phone: string | null;
  phoneDisplayPlaceholder: string;
  isPhoneConfigured: boolean;

  /**
   * WhatsApp integration:
   * Enabled strictly after valid phone number is provided.
   */
  whatsappNumber: string | null;
  isWhatsappConfigured: boolean;


  /**
   * Google Maps Embed & Location Settings
   */
  maps: {
    latitude: number;
    longitude: number;
    zoomLevel: number;
    embedUrl: string;
    directionsUrl: string;
    apiKey?: string;
  };

  /**
   * Operating and Appointment Hours
   */
  hours: {
    weekday: string;
    weekend: string;
    notes: string;
  };

  socials: {
    instagram?: string;
    facebook?: string;
    tripadvisor?: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: "Pranaya Wellness Sanctuary",
  brandShort: "Pranaya Wellness",
  tagline: "Sanctuary of Restorative Living & Holistic Wellness",
  shortDescription: "An exquisite wellness and restorative spa sanctuary in Bhopal, Madhya Pradesh. Uniting therapeutic deep-tissue bodywork, calming hydro-thermal rituals, botanical skin therapies, and authentic Vedic healing in quiet, climate-controlled suites.",
  zipFileName: "pranaya-wellness-project.zip",
  
  // Official Location
  city: "Bhopal",
  state: "Madhya Pradesh",
  country: "India",
  streetAddressPlaceholder: "Arera Colony & Shamla Hills Enclave, Bhopal, Madhya Pradesh",
  isExactStreetAddressConfigured: true,

  // Contact Information
  email: "Karanbhai25807@gmail.com",
  
  // Mobile / Phone configuration
  phone: "+91 755 492 8820",
  phoneDisplayPlaceholder: "+91 755 492 8820",
  isPhoneConfigured: true,

  // WhatsApp configuration
  whatsappNumber: "+91 755 492 8820",
  isWhatsappConfigured: true,


  // Google Maps Integration
  maps: {
    latitude: 23.259933,
    longitude: 77.412615,
    zoomLevel: 14,
    embedUrl: "https://maps.google.com/maps?q=Bhopal%2C%20Madhya%20Pradesh%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Bhopal%2C+Madhya+Pradesh%2C+India",
    apiKey: typeof import.meta !== "undefined" ? import.meta.env?.VITE_GOOGLE_MAPS_API_KEY : undefined,
  },

  // Operating Hours
  hours: {
    weekday: "Monday – Saturday: 9:00 AM – 9:00 PM",
    weekend: "Sunday: 10:00 AM – 8:00 PM",
    notes: "Advance reservations recommended. Private suites prepared freshly for every guest.",
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
  },
};

/**
 * Helper utility to build dynamic map embed URL from any address query
 */
export function getGoogleMapsEmbedUrl(query: string, zoom = 14): string {
  const encoded = encodeURIComponent(query);
  return `https://maps.google.com/maps?q=${encoded}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
}

/**
 * Helper utility to build navigation directions URL
 */
export function getGoogleMapsDirectionsUrl(query: string): string {
  const encoded = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}
