 // yoki qayerda i18next o‘rnatilgan bo‘lsa

import i18n from "@/lib/i18n/i18n";

export const getCurrentLang = (): string => {
  // default 'en'
  return i18n.language || 'uz';
};
