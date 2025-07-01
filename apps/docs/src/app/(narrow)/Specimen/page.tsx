import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const SpecimenPage = () => (
	<Card header={<Heading>Specimen</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Specimen } from "@colonydb/anthill/Specimen";
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
									<Specimen transparent>Example</Specimen>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Specimen>Example</Specimen>
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

export default SpecimenPage;
