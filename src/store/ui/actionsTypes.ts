import { Lang } from "../../constants/langs";

export enum ActionType {
  LOADING = "LOADING",
  ERROR_MODAL = "ERROR_MODAL",
  ERROR_MODAL_DATA = "ERROR_MODAL_DATA",
  SUCCESS_MODAL = "SUCCESS_MODAL",
  SUCCESS_MODAL_DATA = "SUCCESS_MODAL_DATA ",
  LANGUAGE_MODAL = 'LANGUAGE_MODAL',
  LANG = "LANG",
}
interface showLanguageModal {
  type: ActionType.LANGUAGE_MODAL;
  payload: boolean;
}

interface loadingAction {
  type: ActionType.LOADING;
  payload: boolean;
}

interface errorModalAction {
  type: ActionType.ERROR_MODAL;
  payload: boolean;
}

interface errorModalDataAction {
  type: ActionType.ERROR_MODAL_DATA;
  payload: string;
}

interface successModalAction {
  type: ActionType.SUCCESS_MODAL;
  payload: boolean;
}

interface successModalDataAction {
  type: ActionType.SUCCESS_MODAL_DATA;
  payload: string;
}

interface langAction {
  type: ActionType.LANG;
  payload: Lang;
}

interface test {
  type: ActionType.LOADING;
  payload: boolean;
}
export type Action =
  | loadingAction
  | test
  | errorModalAction
  | errorModalDataAction
  | successModalAction
  | successModalDataAction
  | langAction
  | showLanguageModal
  | test;
