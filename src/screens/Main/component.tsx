import React from "react";
import { TranslationService } from "../../services/translation.service";
import { Props } from "./types";

export function MainScreenComponent(props: Props) {
  const {translate} = TranslationService;
  const translationKey = "MainScrdseenasx";

  return (
    <div>
      Main PAGE Component HERE!

      <div>{translateService(translate, "mainHere")}</div>
    </div>
  );
}
