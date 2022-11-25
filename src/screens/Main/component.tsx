import React from "react";
import { TranslationService } from "../../services/translation.service";
import { Props } from "./types";

export function MainScreenComponent(props: Props) {
  const { translate } = TranslationService;

  return (
    <div>
      Main PAGE Component HERE!

      <div>{translate("MainScreen", "mainHere")}</div>
    </div>
  );
}
