"use client";

import type { ComponentProps, ReactNode } from "react";
import { useContext } from "react";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { Stack } from "./Stack.js";

type Props = {
	headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
	id?: string;
	title?: ReactNode;
} & ComponentProps<typeof Stack>;

export const Section = ({ children, headingLevel, id, tagName = "section", title, ...stackProps }: Props) => {
	const contextHeadingLevel = useContext(HeadingLevelContext);
	return (
		<HeadingLevelContext.Provider value={headingLevel ?? contextHeadingLevel}>
			<Stack id={id} tagName={tagName} {...stackProps}>
				{title}
				<HeadingLevelContext.Provider value={(headingLevel ?? contextHeadingLevel) + 1}>
					{children}
				</HeadingLevelContext.Provider>
			</Stack>
		</HeadingLevelContext.Provider>
	);
};
