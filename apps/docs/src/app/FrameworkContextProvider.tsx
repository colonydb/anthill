"use client";

import { FrameworkContext } from "@colonydb/anthill/FrameworkContext";
import NextLink from "next/link";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const FrameworkContextProvider = ({ children }: Props) => (
	<FrameworkContext.Provider
		value={{
			Link: NextLink,
		}}
	>
		{children}
	</FrameworkContext.Provider>
);

export default FrameworkContextProvider;
