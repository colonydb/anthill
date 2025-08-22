import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react";
import { Specimen } from "./Specimen.js";

type Props<T extends object | string | number | null> = {
  center?: boolean;
  id?: string;
  transparent?: boolean;
  children: (state: T, setState: Dispatch<SetStateAction<T>>) => ReactNode;
  initialState: T;
};

export const StatefulSpecimen = <T extends object | string | number | null>({
  initialState,
  children,
  ...props
}: Props<T>) => {
  const [state, setState] = useState(initialState);
  return <Specimen {...props}>{children(state, setState)}</Specimen>;
};
