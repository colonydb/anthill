"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Markdown } from "@colonydb/anthill/Markdown";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Stack } from "@colonydb/anthill/Stack";
import md from "dedent";

const HomePage = () => (
	<Stack>
		<Card
			header={
				<Header description={<PlainText font="small">ColonyDB&apos;s design system.</PlainText>}>
					<Heading>Anthill</Heading>
				</Header>
			}
		>
			<CardContent>
				<Markdown>{md`
					# Installation

					PNPM:

					\`\`\`bash
					pnpm add @colonydb/anthill
					\`\`\`

					Yarn:

					\`\`\`bash
					yarn add @colonydb/anthill
					\`\`\`

					npm:

					\`\`\`bash
					npm install @colonydb/anthill
					\`\`\`

					# Usage

					\`\`\`tsx
					import { Base } from '@colonydb/anthill/Base';
					import { Button } from '@colonydb/anthill/Button';

					const MyComponent = () => (
						<Base>
							<Button
								onClick={() => {
									alert('Hello!');
								}}
							>
								Click me
							</Button>
						</Base>
					);
					\`\`\`

					# Notes

					A few things to be aware of:

					- Requires React 19 or higher
					- Only supports evergreen browsers
				`}</Markdown>
			</CardContent>
		</Card>
	</Stack>
);

export default HomePage;
