"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { HeadingLevelContext } from "@colonydb/anthill/HeadingLevelContext";
import { Section } from "@colonydb/anthill/Section";
import { SpacingLevelContext } from "@colonydb/anthill/SpacingLevelContext";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const SectionPage = () => (
	<Card header={<Heading>Section</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Section } from "@colonydb/anthill/Section";
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
									<HeadingLevelContext.Provider value={2}>
										<SpacingLevelContext.Provider value={4}>
											<Section title={<Heading>Example</Heading>}>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
												<Heading>Example</Heading>
												<p>
													Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
													laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
												</p>
												<p>
													Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
													laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
												</p>
											</Section>
										</SpacingLevelContext.Provider>
									</HeadingLevelContext.Provider>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section title={<Heading>Example</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut.
												Eligendi autem deleniti ut nemo. Neque consequatur
												deleniti pariatur et sed voluptas iure.
											</p>
											<p>
												Labore et nostrum necessitatibus est sequi aut.
												Eligendi autem deleniti ut nemo. Neque consequatur
												deleniti pariatur et sed voluptas iure.
											</p>
											<Heading>Example</Heading>
											<p>
												Quia non quis est repellat distinctio quibusdam quia
												in iure. Commodi iure dolorem est laboriosam voluptate
												incidunt ab totam harum laudantium harum quia dolor.
											</p>
											<p>
												Quia non quis est repellat distinctio quibusdam quia
												in iure. Commodi iure dolorem est laboriosam voluptate
												incidunt ab totam harum laudantium harum quia dolor.
											</p>
										</Section>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Nested</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<HeadingLevelContext.Provider value={2}>
										<SpacingLevelContext.Provider value={4}>
											<Section title={<Heading>Example</Heading>}>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
												<Section title={<Heading>Example</Heading>}>
													<p>
														Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
														laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
													</p>
													<p>
														Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
														laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
													</p>
												</Section>
											</Section>
										</SpacingLevelContext.Provider>
									</HeadingLevelContext.Provider>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section title={<Heading>Example</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut.
												Eligendi autem deleniti ut nemo. Neque consequatur
												deleniti pariatur et sed voluptas iure.
											</p>
											<p>
												Labore et nostrum necessitatibus est sequi aut.
												Eligendi autem deleniti ut nemo. Neque consequatur
												deleniti pariatur et sed voluptas iure.
											</p>
											<Section title={<Heading>Example</Heading>}>
												<p>
													Quia non quis est repellat distinctio quibusdam quia
													in iure. Commodi iure dolorem est laboriosam
													voluptate incidunt ab totam harum laudantium harum
													quia dolor.
												</p>
												<p>
													Quia non quis est repellat distinctio quibusdam quia
													in iure. Commodi iure dolorem est laboriosam
													voluptate incidunt ab totam harum laudantium harum
													quia dolor.
												</p>
											</Section>
										</Section>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Specifc Heading Level</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Section headingLevel={3} title={<Heading>Heading</Heading>}>
										<p>
											Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
											deleniti pariatur et sed voluptas iure.
										</p>
										<Section title={<Heading>Heading</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
												consequatur deleniti pariatur et sed voluptas iure.
											</p>
										</Section>
									</Section>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section headingLevel={3} title={<Heading>Heading</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi
												autem deleniti ut nemo. Neque consequatur deleniti
												pariatur et sed voluptas iure.
											</p>
											<Section title={<Heading>Heading</Heading>}>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi
													autem deleniti ut nemo. Neque consequatur deleniti
													pariatur et sed voluptas iure.
												</p>
											</Section>
										</Section>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Specifc Spacing</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<HeadingLevelContext.Provider value={2}>
										<Section spacing="00" title={<Heading>Heading</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
												consequatur deleniti pariatur et sed voluptas iure.
											</p>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
												consequatur deleniti pariatur et sed voluptas iure.
											</p>
											<Section title={<Heading>Heading</Heading>}>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
												<p>
													Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
													consequatur deleniti pariatur et sed voluptas iure.
												</p>
											</Section>
										</Section>
									</HeadingLevelContext.Provider>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section spacing="00" title={<Heading>Heading</Heading>}>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi
												autem deleniti ut nemo. Neque consequatur deleniti
												pariatur et sed voluptas iure.
											</p>
											<p>
												Labore et nostrum necessitatibus est sequi aut. Eligendi
												autem deleniti ut nemo. Neque consequatur deleniti
												pariatur et sed voluptas iure.
											</p>
											<Section title={<Heading>Heading</Heading>}>
												<p>
													Labore et nostrum necessitatibus est sequi aut.
													Eligendi autem deleniti ut nemo. Neque consequatur
													deleniti pariatur et sed voluptas iure.
												</p>
												<p>
													Labore et nostrum necessitatibus est sequi aut.
													Eligendi autem deleniti ut nemo. Neque consequatur
													deleniti pariatur et sed voluptas iure.
												</p>
											</Section>
										</Section>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Indent</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Section>
										Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
										deleniti pariatur et sed voluptas iure.
										<Section indent>
											Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
											deleniti pariatur et sed voluptas iure.
											<Section indent>
												Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
												consequatur deleniti pariatur et sed voluptas iure.
											</Section>
										</Section>
									</Section>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section>
											Labore et nostrum necessitatibus est sequi aut. Eligendi
											autem deleniti ut nemo. Neque consequatur deleniti pariatur
											et sed voluptas iure.
											<Section indent>
												Labore et nostrum necessitatibus est sequi aut. Eligendi
												autem deleniti ut nemo. Neque consequatur deleniti
												pariatur et sed voluptas iure.
												<Section indent>
													Labore et nostrum necessitatibus est sequi aut. Eligendi
													autem deleniti ut nemo. Neque consequatur deleniti
													pariatur et sed voluptas iure.
												</Section>
											</Section>
										</Section>
									`}
								</CodeBlock>
							),
						},
					]}
				/>
			</Section>
			<Section title={<Heading>Specifc Tag</Heading>}>
				<TabBlock
					items={[
						{
							key: "specimen",
							label: "Specimen",
							content: (
								<Specimen>
									<Section tagName="div">
										Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
										deleniti pariatur et sed voluptas iure.
									</Section>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Section tagName="div">
											Labore et nostrum necessitatibus est sequi aut. Eligendi
											autem deleniti ut nemo. Neque consequatur deleniti pariatur
											et sed voluptas iure.
										</Section>
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

export default SectionPage;
