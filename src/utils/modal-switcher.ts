import { showLanguageModal } from "../store/ui/actions";
import { store } from "../store";
export class ModalSwitcher {
  static ShowLanguageModal = (): boolean => {
    store.dispatch(showLanguageModal(true) as any);
    return true;
  };

  static HideLanguageModal = (): boolean => {
    store.dispatch(showLanguageModal(false) as any);
    return true;
  };
}
