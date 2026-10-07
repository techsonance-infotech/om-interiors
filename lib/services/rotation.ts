export type ServiceStyleId = "style1" | "style2" | "style3";
export type RotationMode = "biweekly" | "weekly" | "monthly" | "manual";

export interface ServiceStyleConfig {
  id: ServiceStyleId;
  name: string;
  enabled: boolean;
}

export interface ServiceDesignConfig {
  rotationMode: RotationMode;
  manualOverride: ServiceStyleId | null;
  timeZone: string;
  startDate: string; // ISO string anchor date
  styles: ServiceStyleConfig[];
}

export const serviceDesignConfig: ServiceDesignConfig = {
  rotationMode: "biweekly",
  manualOverride: null, // Set to "style1", "style2", or "style3" to lock a design manually
  timeZone: "Asia/Kolkata",
  startDate: "2026-10-05T00:00:00Z", // Starts from Service Page 1 on Oct 5, 2026
  styles: [
    { id: "style1", name: "Om Interiors Grid Showcase (Style 1)", enabled: true },
    { id: "style2", name: "Om Interiors Alternating Rows (Style 2)", enabled: true },
    { id: "style3", name: "Om Interiors Numbered Cards (Style 3)", enabled: true },
  ],
};

/**
 * Calculates the current active service design style deterministically
 * based on current time (in Asia/Kolkata), rotation configuration, or manual overrides.
 * Default rotation changes the active design every 2 weeks starting from style1.
 */
export function getCurrentServiceStyle(requestedStyle?: string | null): ServiceStyleId {
  // 1. URL Query Parameter Override (e.g. /services?style=style2)
  if (
    requestedStyle &&
    ["style1", "style2", "style3"].includes(requestedStyle)
  ) {
    return requestedStyle as ServiceStyleId;
  }

  // 2. Configuration Manual Override
  if (serviceDesignConfig.manualOverride) {
    return serviceDesignConfig.manualOverride;
  }

  // Filter enabled styles
  const activeStyles = serviceDesignConfig.styles
    .filter((s) => s.enabled)
    .map((s) => s.id);

  if (activeStyles.length === 0) {
    return "style1";
  }

  const now = new Date();
  const startDate = new Date(serviceDesignConfig.startDate);
  const diffTime = Math.max(0, now.getTime() - startDate.getTime());

  // 3. Bi-Weekly Rotation (Every 2 Weeks / 14 Days)
  if (serviceDesignConfig.rotationMode === "biweekly") {
    const biWeekCount = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 14));
    return activeStyles[biWeekCount % activeStyles.length];
  }

  // 4. Monthly Rotation
  if (serviceDesignConfig.rotationMode === "monthly") {
    const month = now.getMonth();
    return activeStyles[month % activeStyles.length];
  }

  // 5. Weekly Rotation
  const weekCount = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  return activeStyles[weekCount % activeStyles.length];
}
