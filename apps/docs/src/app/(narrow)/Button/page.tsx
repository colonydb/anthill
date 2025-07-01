"use client";

import { Button } from "@colonydb/anthill/Button";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const ButtonPage = () => (
	<Card header={<Heading>Button</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Button } from "@colonydb/anthill/Button";
				`}
			</CodeBlock>
			<Section title={<Heading>Plain</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Button>Button</Button>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Button>Button</Button>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Submit</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Button submit>Button</Button>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Button submit>Button</Button>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Dangerous Submit</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Button dangerous submit>
										Button
									</Button>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Button dangerous submit>
											Button
										</Button>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Disabled</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Button disabled submit>
										Button
									</Button>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Button disabled submit>
											Button
										</Button>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Link</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Button href="https://example.com">Link</Button>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Button href="https://example.com">Link</Button>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
		</CardContent>
	</Card>
);

export default ButtonPage;
