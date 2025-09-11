import { createContext } from "react";
import type { ContainerLevel, SpacingLevel, TypographyLevel } from "./index.js";

export const StyleContext = createContext<{
  container: ContainerLevel;
  spacing: SpacingLevel;
  typography: TypographyLevel;
}>({
  container: 0,
  spacing: 0,
  typography: 0,
});
