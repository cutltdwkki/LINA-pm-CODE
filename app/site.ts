export const siteConfig = {
  /** Digits with country code, no plus. Leave empty until the studio number is known. */
  whatsappPhone: "",
} as const;

export const bookingStorageKey = "lina-booking";
export const bookingEventName = "lina-booking";

export type BookingSelection = {
  service: string;
  photo: boolean;
};

export function getWhatsappHref() {
  const phone = siteConfig.whatsappPhone.replace(/\D/g, "");
  if (!phone) return null;
  return `https://wa.me/${phone}`;
}
