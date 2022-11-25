import React from "react";
import { TranslationService } from "../../services/translation.service";
import { Props } from "./types";

export function MainScreenComponent(props: Props) {
  const translationService = new TranslationService();
  const { translate } = translationService;
  const translationKey = "MainScrdseenasx";

  return (
    <div>
      Main PAGE Component HERE!

      <div>{translateService(translate, "mainHere")}</div>
    </div>
  );
}
