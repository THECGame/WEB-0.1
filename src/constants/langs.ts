import { notify } from "../services/toastHandler.service";
//import { TranslationService } from "../services/translation.service";

export interface Lang {
  display: string;
  code: string;
  //flag: string;
  isRTL: boolean;
}

export const Langs = {
  EN: {
    display: "English",
    code: "en",
    //flag: "🇺🇸",
    isRTL: false,
  },
  TR: {
    display: "Türkçe",
    code: "tr",
    //flag: "🇹🇷",
    isRTL: false,
  },
};

export const defaultLang: Lang = {
  //get local storage lang
  // display: TranslationService.getLangFromStorage().display,
  // code: TranslationService.getLangFromStorage().code,

  // //flag: require('../assets/images/langs/tr.png'),
  // isRTL: TranslationService.getLangFromStorage().isRTL,

  display: Langs.EN.display,
  code: Langs.EN.code,
  //flag: require('../assets/images/langs/en.png'),
  isRTL: Langs.EN.isRTL,
};

export const langs: Lang[] = [
  {
    display: "Türkçe",
    code: "tr",
    //flag: require('../assets/images/langs/tr.png'),
    isRTL: false,
  },
  {
    display: "English",
    code: "en",
    //flag: require('../assets/images/langs/en.png'),
    isRTL: false,
  },
];

export const getLangFile = (screen: string, lang: string) => {
  switch (screen) {
    case "MainScreen":
      switch (lang) {
        case "tr":
          return require("../assets/translations/Main/tr.json");
        case "en":
          return require("../assets/translations/Main/en.json");
        default:
          notify("Language not found", "error");
          return require("../assets/translations/Main/en.json");
      }
    case "languageSwitcher":
      switch (lang) {
        case "tr":
          return require("../assets/translations/Main/tr.json");
        case "en":
          return require("../assets/translations/Main/en.json");
        default:
          notify("Language not found", "error");
          return require("../assets/translations/Main/en.json");
      }
    default:
      notify(
      `No translation file found for ${screen} - ${language} error `);
      switch (lang) {
        case "tr":
          return require("../assets/translations/Main/tr.json");
        case "en":
          return require("../assets/translations/Main/en.json");
        default:
          notify("Language not found", "error");
          return require("../assets/translations/Main/en.json");
      }
  }
};
