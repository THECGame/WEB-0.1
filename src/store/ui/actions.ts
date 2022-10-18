import { Dispatch } from "redux";
import { Lang } from "../../constants/langs";
import { Action, ActionType } from "./actionsTypes";
export const showLoading = (loading: boolean) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LOADING,
        payload: loading,
      });
    };
  };
  
  export const showErrorModal = (errorModal: boolean) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.ERROR_MODAL,
        payload: errorModal,
      });
    };
  };
  
  export const errorModalData = (error: string) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.ERROR_MODAL_DATA,
        payload: error,
      });
    };
  };
  
  export const showSuccessModal = (successModal: boolean) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.SUCCESS_MODAL,
        payload: successModal,
      });
    };
  };
  
  export const successModalData = (success: string) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.SUCCESS_MODAL_DATA,
        payload: success,
      });
    };
  };

  export const changeLanguage = (lang: Lang) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LANG,
        payload: lang,
      });
    };
  };
  
  export const showLanguageModal = (show: boolean) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.LANGUAGE_MODAL,
        payload: show,
      });
    };
  };