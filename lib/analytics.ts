// Analytics and Conversion Event Tracking Utility for OM Interior

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track custom conversion events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("event", eventName, eventParams);
  } else if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event]: ${eventName}`, eventParams);
  }
};

// Common conversion helpers
export const trackPhoneClick = (source: string = "header") => {
  trackEvent("contact_phone_click", {
    category: "conversion",
    label: source,
    business_location: "Surat",
  });
};

export const trackWhatsAppClick = (source: string = "header") => {
  trackEvent("whatsapp_click", {
    category: "conversion",
    label: source,
    business_location: "Surat",
  });
};

export const trackEmailClick = (source: string = "footer") => {
  trackEvent("contact_email_click", {
    category: "conversion",
    label: source,
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    category: "lead",
    form_name: formName,
  });
};
