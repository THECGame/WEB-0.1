import { UIState } from "./UIState";
import { Action, ActionType } from "./actionsTypes";
import { defaultLang } from "../../constants/langs";

const initialState: UIState = {
  loading: false,
  errorModal: false,
  error: "",
  successModal: false,
  success: "",
  lang: defaultLang,
  showLanguageModal: false,
};

export default function uiReducer(
  state: UIState = initialState,
  action: Action
) {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionType.ERROR_MODAL:
      return {
        ...state,
        errorModal: action.payload,
      };
    case ActionType.ERROR_MODAL_DATA:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.SUCCESS_MODAL:
      return {
        ...state,
        successModal: action.payload,
      };
    case ActionType.SUCCESS_MODAL_DATA:
      return {
        ...state,
        success: action.payload,
      };
    case ActionType.LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case ActionType.LANGUAGE_MODAL:
      return {
        ...state,
        showLanguageModal: action.payload,
      };
      
    default:
      return state;
  }
}
