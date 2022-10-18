import { changeLanguage } from '../store/ui/actions'
import { store } from '../store';
import { Lang } from '../constants/langs';
export class LangSwither {

    static changeLanguage = (lang: Lang): boolean => {
        store.dispatch(changeLanguage(lang) as any)
        return true
    };

    static getLang = (): Lang => {
        // @ts-ignore
        return store.getState().ui.lang;
    };

}