"use client";

import { Button } from "@colonydb/anthill/Button";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Dialog } from "@colonydb/anthill/Dialog";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const DialogPage = () => (
	<Card header={<Heading>Dialog</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Dialog } from "@colonydb/anthill/Dialog";
				`}
			</CodeBlock>
			<Section title={<Heading>Minimal</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Dialog dismissible render={() => "hello"}>
										Open
									</Dialog>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Dialog dismissible render={() => "hello"}>Open</Dialog>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Narrow</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Dialog dismissible render={() => "hello"} width="narrow">
										Open
									</Dialog>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Dialog dismissible render={() => "hello"} width="narrow">
											Open
										</Dialog>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Wide</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Dialog dismissible render={() => "hello"} width="wide">
										Open
									</Dialog>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Dialog dismissible render={() => "hello"} width="wide">
											Open
										</Dialog>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Title &amp; Footer</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Dialog dismissible footer="Footer" render={() => "hello"} title="Title" width="narrow">
										Open
									</Dialog>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Dialog
											dismissible
											footer="Footer"
											render={() => "hello"}
											title="Title"
											width="narrow"
										>
											Open
										</Dialog>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Manually Closed</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Dialog render={(closeDialog) => <Button onClick={closeDialog}>Close</Button>}>Open</Dialog>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Dialog render={(closeDialog) => <Button onClick={closeDialog}>Close</Button>}>
											Open
										</Dialog>
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

export default DialogPage;
