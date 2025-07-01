import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const HeaderPage = () => (
	<Card header={<Heading>Header</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Header } from "@colonydb/anthill/Header";
				`}
			</CodeBlock>
			<Section title={<Heading>Basic</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Header actions="action" description="description">
										Example
									</Header>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Header actions="action" description="description">
											Example
										</Header>
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

export default HeaderPage;
