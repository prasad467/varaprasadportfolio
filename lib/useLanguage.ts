import { translations } from "./translations";

export function useLanguage() {
  return {
    language: "en",
    setLanguage: () => {},
    t: translations.en,
  };
}