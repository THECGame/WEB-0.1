import { Lang, getLangFile, Langs } from "../constants/langs";
import { LangSwither } from "../utils/lang-switcher";
export class TranslationService {
  public static translate(screen: string, key: string) {
    const lang = LangSwither.getLang().code;
    const path = getLangFile(screen, lang);
    return path[key] ? path[key] : key;
  }

  public static changeLang(lang: Lang): boolean {
    localStorage.setItem("sercair", JSON.stringify(lang));
    LangSwither.changeLanguage(lang);
    return true;
  }

  public static getLangFromStorage(): Lang {
    const selectedLang = localStorage.getItem("sercair");
    if (selectedLang) return JSON.parse(selectedLang);
    else {
      if (navigator.language === "tr-TR") {
        localStorage.setItem("sercair", JSON.stringify(Langs.TR));
        return Langs.TR;
      } else {
        localStorage.setItem("sercair", JSON.stringify(Langs.EN));
        return Langs.EN;
      }
    }
  }

  public static getLang(): Lang {
    return LangSwither.getLang();
  }
}
