import React from "react";
import { TranslationService } from "../../services/translation.service";
import { Props } from "./types";

export function MainScreenComponent(props: Props) {
  const translateService = TranslationService.translate;
  const translationKey = "MainScrdseenasx";

  return (
    <div>
      Main PAGE Component HERE!

      <div>{translateService(translationKey, "mainHere")}</div>
    </div>
  );
}
