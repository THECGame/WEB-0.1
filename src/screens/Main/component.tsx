import React from "react";
import { TranslationService } from "../../services/translation.service";
import { Props } from "./types";

export function MainScreenComponent(props: Props) {
  const t = TranslationService.translate;
  const translationKey = "MainScrdseenasx";

  return (
    <div>
      Main PAGE Component HERE!

      <div>{t(translationKey, "mainHere")}</div>
    </div>
  );
}
