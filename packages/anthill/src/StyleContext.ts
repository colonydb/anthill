import { createContext } from "react";
import type { ContainerLevel, HeadingLevel, Hue, SpacingLevel } from "./index.js";

export const StyleContext = createContext<{
  background: Hue;
  color: Hue | "default";
  container: ContainerLevel;
  headingLevel: HeadingLevel;
  muted: boolean;
  spacing: SpacingLevel;
}>({
  background: "gray",
  color: "default",
  container: 0,
  headingLevel: 1,
  muted: false,
  spacing: 0,
});
