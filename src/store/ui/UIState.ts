import { Lang } from "../../constants/langs";

export interface UIState {
    loading: boolean,
    errorModal : boolean,
    error:'',
    successModal : boolean,
    success : '',
    lang : Lang,
    showLanguageModal : boolean,
}
