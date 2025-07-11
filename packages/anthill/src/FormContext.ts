import { createContext } from "react";
import type { FormState } from "./index.js";

export const FormContext = createContext<FormState | null>(null);
