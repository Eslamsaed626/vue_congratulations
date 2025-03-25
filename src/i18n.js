import { createI18n } from "vue-i18n";
import en from "./localiz/en.json";
import ar from "./localiz/ar.json";
function loadLocalMessages() {
  const locales = [{ en: en }, { ar: ar }];
  const message = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    message[key] = lang[key];
  });
  return message;
}

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocalMessages(),
});
