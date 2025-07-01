import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const PlainTextPage = () => (
	<Card header={<Heading>PlainText</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { PlainText } from "@colonydb/anthill/PlainText";
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
									<PlainText>Example</PlainText>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<PlainText>Example</PlainText>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Font</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<PlainText font="regular-monospace">Example</PlainText>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<PlainText font="regular-monospace">Example</PlainText>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Coloured</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<PlainText color={["green-s3", "green-t3"]}>Example</PlainText>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<PlainText color={["green-s3", "green-t3"]}>Example</PlainText>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Truncated</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<PlainText truncated>
										Voluptates et facere repudiandae corrupti qui debitis beatae rem sed non accusantium. Rerum
										repudiandae expedita voluptatibus fugiat consequatur non quia iure omnis est nihil eligendi.
										Sapiente alias consequatur iusto occaecati veniam delectus laudantium commodi qui laborum error.
										Debitis consequuntur minima ipsum aperiam omnis nesciunt quia minima corporis laudantium voluptas
										assumenda ut eos. Et tempore ad distinctio exercitationem fugiat repellat. Beatae repudiandae
										voluptatem sint aut eos quibusdam qui omnis consequatur aliquid et sed facere quia.
									</PlainText>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<PlainText truncated>
											Voluptates et facere repudiandae corrupti qui debitis beatae
											rem sed non accusantium. Rerum repudiandae expedita
											voluptatibus fugiat consequatur non quia iure omnis est
											nihil eligendi. Sapiente alias consequatur iusto occaecati
											veniam delectus laudantium commodi qui laborum error.
											Debitis consequuntur minima ipsum aperiam omnis nesciunt
											quia minima corporis laudantium voluptas assumenda ut eos.
											Et tempore ad distinctio exercitationem fugiat repellat.
											Beatae repudiandae voluptatem sint aut eos quibusdam qui
											omnis consequatur aliquid et sed facere quia.
										</PlainText>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Custom Tag</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<PlainText tagName="strong">Example</PlainText>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<PlainText tagName="strong">Example</PlainText>
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

export default PlainTextPage;
