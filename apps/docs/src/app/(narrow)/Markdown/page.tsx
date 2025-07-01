"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { HeadingLevelContext } from "@colonydb/anthill/HeadingLevelContext";
import { Markdown } from "@colonydb/anthill/Markdown";
import { Section } from "@colonydb/anthill/Section";
import { SpacingLevelContext } from "@colonydb/anthill/SpacingLevelContext";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import dedent from "dedent";

const js = dedent.withOptions({ escapeSpecialCharacters: true });
const md = dedent;

const MarkdownPage = () => (
	<Card header={<Heading>Markdown</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { Markdown } from "@colonydb/anthill/Markdown";
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
									<SpacingLevelContext.Provider value={3}>
										<HeadingLevelContext.Provider value={1}>
											<Markdown>{md`
												# Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												## Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												### Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												#### Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												##### Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												###### Heading

												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

												---

												Aut et sapiente omnis atque odio sint repellendus adipisci aut velit \`consequatur\` sint voluptatem id ad. Animi **autem et minus praesentium** delectus [dolores fugiat](#example) amet consectetur cumque non voluptas optio. Rem mollitia porro quisquam occaecati iste earum _tempora exercitationem_. Est eos nemo aut nostrum. Harum **soluta _voluptatem_** sit occaecati.

												---

												Sed nulla ea harum quaerat mollitia velit consequatur laboriosam qui et eveniet earum dignissimos atque ut. Mollitia nihil excepturi aut incidunt. Eos fuga culpa et aut explicabo aperiam earum vel laudantium quia ab illo dolores tempore. Odio accusamus quasi voluptatem minima nostrum ut enim eos nobis vero ex optio occaecati vitae est. Quos sint harum deserunt pariatur voluptatum assumenda autem aut. Odio et et totam quae repudiandae dolor excepturi odio excepturi et sit facere libero omnis. Qui facilis laboriosam libero voluptas quas occaecati earum aliquid ad ducimus laudantium qui quos perspiciatis maxime.

												- Item
												- Item
												- Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

												  Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

												  - Item
												  - Item
												  - Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

												    Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

												  - Item
												- Item

												Ut repudiandae delectus et ut in. Perferendis quis voluptas ratione voluptas mollitia tempore qui ut delectus magnam. Sunt nobis unde fugit et et veniam assumenda harum voluptas laudantium asperiores recusandae nihil quo. Voluptas velit et enim laborum non. Et id excepturi repudiandae sequi voluptatibus maiores mollitia est. A ipsa dolore error ducimus inventore consequatur dicta nesciunt. Voluptatum similique eum officiis. Est tenetur eveniet non reprehenderit exercitationem. Deserunt est labore et illo commodi eum ut quo vero voluptatem id unde facilis dolorum.

												1. Item
												2. Item
												3. Item

												---

												\`\`\`js
												console.log("Hello World");
												\`\`\`
											`}</Markdown>
										</HeadingLevelContext.Provider>
									</SpacingLevelContext.Provider>
								</Specimen>
							),
						},
						{
							key: "code",
							label: "Code",
							content: (
								<CodeBlock language="tsx">
									{js`
										<Markdown>{md\`
											# Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											## Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											### Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											#### Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											##### Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											###### Heading

											A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident natus placeat quo sint culpa maiores amet labore id omnis.

											---

											Aut et sapiente omnis atque odio sint repellendus adipisci aut velit ${"\\`"}consequatur${"\\`"} sint voluptatem id ad. Animi **autem et minus praesentium** delectus [dolores fugiat](#example) amet consectetur cumque non voluptas optio. Rem mollitia porro quisquam occaecati iste earum _tempora exercitationem_. Est eos nemo aut nostrum. Harum **soluta _voluptatem_** sit occaecati.

											---

											Sed nulla ea harum quaerat mollitia velit consequatur laboriosam qui et eveniet earum dignissimos atque ut. Mollitia nihil excepturi aut incidunt. Eos fuga culpa et aut explicabo aperiam earum vel laudantium quia ab illo dolores tempore. Odio accusamus quasi voluptatem minima nostrum ut enim eos nobis vero ex optio occaecati vitae est. Quos sint harum deserunt pariatur voluptatum assumenda autem aut. Odio et et totam quae repudiandae dolor excepturi odio excepturi et sit facere libero omnis. Qui facilis laboriosam libero voluptas quas occaecati earum aliquid ad ducimus laudantium qui quos perspiciatis maxime.

											- Item
											- Item
											- Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

											  Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

											  - Item
											  - Item
											  - Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

											    Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur consequatur.

											  - Item
											- Item

											Ut repudiandae delectus et ut in. Perferendis quis voluptas ratione voluptas mollitia tempore qui ut delectus magnam. Sunt nobis unde fugit et et veniam assumenda harum voluptas laudantium asperiores recusandae nihil quo. Voluptas velit et enim laborum non. Et id excepturi repudiandae sequi voluptatibus maiores mollitia est. A ipsa dolore error ducimus inventore consequatur dicta nesciunt. Voluptatum similique eum officiis. Est tenetur eveniet non reprehenderit exercitationem. Deserunt est labore et illo commodi eum ut quo vero voluptatem id unde facilis dolorum.

											1. Item
											2. Item
											3. Item

											---

											${"\\`\\`\\`"}js
											console.log("Hello World");
											${"\\`\\`\\`"}
										\`}</Markdown>
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

export default MarkdownPage;
