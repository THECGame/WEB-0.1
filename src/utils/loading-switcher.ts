import { showLoading } from '../store/ui/actions'
import { store } from '../store';
export class LoadingSwither {

    static ShowLoading = (): boolean => {
        store.dispatch(showLoading(true) as any)
        return true
    };

    static HidehowLoading = (): boolean => {
        store.dispatch(showLoading(false) as any)
        return true
    };

}