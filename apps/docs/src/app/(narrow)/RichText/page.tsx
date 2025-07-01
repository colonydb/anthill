"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { RichText } from "@colonydb/anthill/RichText";
import { Section } from "@colonydb/anthill/Section";
import { SpacingLevelContext } from "@colonydb/anthill/SpacingLevelContext";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const RichTextPage = () => (
	<Card header={<Heading>RichText</Heading>}>
		<CardContent>
			<CodeBlock language="tsx">
				{js`
					import { RichText } from "@colonydb/anthill/RichText";
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
										<RichText>
											<h1>Heading</h1>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<h2>Heading</h2>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<h3>Heading</h3>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<h4>Heading</h4>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<h5>Heading</h5>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<h6>Heading</h6>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero minus sed id nobis dolorem ut laudantium
												error asperiores. Ex provident quae et et et pariatur ea libero ab omnis. Neque quam provident
												natus placeat quo sint culpa maiores amet labore id omnis.
											</p>
											<hr />
											<p>
												Aut et sapiente omnis atque odio sint repellendus adipisci aut velit <code>consequatur</code>{" "}
												sint voluptatem id ad. Animi <strong>autem et minus praesentium</strong> delectus{" "}
												<a href="#example">dolores fugiat</a> amet consectetur cumque non voluptas optio. Rem mollitia
												porro quisquam occaecati iste earum <em>tempora exercitationem</em>. Est eos nemo aut nostrum.
												Harum{" "}
												<strong>
													soluta <em>voluptatem</em>
												</strong>{" "}
												sit occaecati.
											</p>
											<hr />
											<p>
												Sed nulla ea harum quaerat mollitia velit consequatur laboriosam qui et eveniet earum
												dignissimos atque ut. Mollitia nihil excepturi aut incidunt. Eos fuga culpa et aut explicabo
												aperiam earum vel laudantium quia ab illo dolores tempore. Odio accusamus quasi voluptatem
												minima nostrum ut enim eos nobis vero ex optio occaecati vitae est. Quos sint harum deserunt
												pariatur voluptatum assumenda autem aut. Odio et et totam quae repudiandae dolor excepturi odio
												excepturi et sit facere libero omnis. Qui facilis laboriosam libero voluptas quas occaecati
												earum aliquid ad ducimus laudantium qui quos perspiciatis maxime.
											</p>
											<ul>
												<li>Item</li>
												<li>Item</li>
												<li>
													<p>
														Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt
														incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab
														qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum
														et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed
														excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur
														consequatur.
													</p>
													<p>
														Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam sunt
														incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga. Cupiditate ab
														qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi et. Quia dolorum
														et odit fugiat distinctio dolor excepturi aspernatur rerum sequi consequatur non sed
														excepturi tenetur. Odio possimus ut odio est maiores voluptas sit quaerat tenetur
														consequatur.
													</p>
													<ul>
														<li>Item</li>
														<li>Item</li>
														<li>
															<p>
																Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam
																sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga.
																Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi
																et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi
																consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit
																quaerat tenetur consequatur.
															</p>
															<p>
																Quas et delectus ducimus animi. Incidunt qui hic aut expedita vel architecto. Aliquam
																sunt incidunt dolore sed magnam quia tempora impedit ut saepe. Et et animi et fuga.
																Cupiditate ab qui qui eos rerum quam ut dolorem totam cupiditate ea architecto eligendi
																et. Quia dolorum et odit fugiat distinctio dolor excepturi aspernatur rerum sequi
																consequatur non sed excepturi tenetur. Odio possimus ut odio est maiores voluptas sit
																quaerat tenetur consequatur.
															</p>
														</li>
														<li>Item</li>
													</ul>
												</li>
												<li>Item</li>
											</ul>
											<p>
												Ut repudiandae delectus et ut in. Perferendis quis voluptas ratione voluptas mollitia tempore
												qui ut delectus magnam. Sunt nobis unde fugit et et veniam assumenda harum voluptas laudantium
												asperiores recusandae nihil quo. Voluptas velit et enim laborum non. Et id excepturi repudiandae
												sequi voluptatibus maiores mollitia est. A ipsa dolore error ducimus inventore consequatur dicta
												nesciunt. Voluptatum similique eum officiis. Est tenetur eveniet non reprehenderit
												exercitationem. Deserunt est labore et illo commodi eum ut quo vero voluptatem id unde facilis
												dolorum.
											</p>
											<ol>
												<li>Item</li>
												<li>Item</li>
												<li>Item</li>
											</ol>
											<hr />
											<pre>{'console.log("Hello World");'}</pre>
										</RichText>
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
										<RichText>
											<h1>Heading</h1>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<h2>Heading</h2>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<h3>Heading</h3>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<h4>Heading</h4>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<h5>Heading</h5>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<h6>Heading</h6>
											<p>
												A quasi et quis et vero officia totam accusamus. Libero
												minus sed id nobis dolorem ut laudantium error
												asperiores. Ex provident quae et et et pariatur ea
												libero ab omnis. Neque quam provident natus placeat quo
												sint culpa maiores amet labore id omnis.
											</p>
											<hr />
											<p>
												Aut et sapiente omnis atque odio sint repellendus
												adipisci aut velit <code>consequatur</code> sint
												voluptatem id ad. Animi{" "}
												<strong>autem et minus praesentium</strong> delectus{" "}
												<a href="#example">dolores fugiat</a> amet consectetur
												cumque non voluptas optio. Rem mollitia porro quisquam
												occaecati iste earum <em>tempora exercitationem</em>.
												Est eos nemo aut nostrum. Harum{" "}
												<strong>
													soluta <em>voluptatem</em>
												</strong>{" "}
												sit occaecati.
											</p>
											<hr />
											<p>
												Sed nulla ea harum quaerat mollitia velit consequatur
												laboriosam qui et eveniet earum dignissimos atque ut.
												Mollitia nihil excepturi aut incidunt. Eos fuga culpa et
												aut explicabo aperiam earum vel laudantium quia ab illo
												dolores tempore. Odio accusamus quasi voluptatem minima
												nostrum ut enim eos nobis vero ex optio occaecati vitae
												est. Quos sint harum deserunt pariatur voluptatum
												assumenda autem aut. Odio et et totam quae repudiandae
												dolor excepturi odio excepturi et sit facere libero
												omnis. Qui facilis laboriosam libero voluptas quas
												occaecati earum aliquid ad ducimus laudantium qui quos
												perspiciatis maxime.
											</p>
											<ul>
												<li>Item</li>
												<li>Item</li>
												<li>
													<p>
														Quas et delectus ducimus animi. Incidunt qui hic aut
														expedita vel architecto. Aliquam sunt incidunt
														dolore sed magnam quia tempora impedit ut saepe. Et
														et animi et fuga. Cupiditate ab qui qui eos rerum
														quam ut dolorem totam cupiditate ea architecto
														eligendi et. Quia dolorum et odit fugiat distinctio
														dolor excepturi aspernatur rerum sequi consequatur
														non sed excepturi tenetur. Odio possimus ut odio est
														maiores voluptas sit quaerat tenetur consequatur.
													</p>
													<p>
														Quas et delectus ducimus animi. Incidunt qui hic aut
														expedita vel architecto. Aliquam sunt incidunt
														dolore sed magnam quia tempora impedit ut saepe. Et
														et animi et fuga. Cupiditate ab qui qui eos rerum
														quam ut dolorem totam cupiditate ea architecto
														eligendi et. Quia dolorum et odit fugiat distinctio
														dolor excepturi aspernatur rerum sequi consequatur
														non sed excepturi tenetur. Odio possimus ut odio est
														maiores voluptas sit quaerat tenetur consequatur.
													</p>
													<ul>
														<li>Item</li>
														<li>Item</li>
														<li>
															<p>
																Quas et delectus ducimus animi. Incidunt qui hic
																aut expedita vel architecto. Aliquam sunt
																incidunt dolore sed magnam quia tempora impedit
																ut saepe. Et et animi et fuga. Cupiditate ab qui
																qui eos rerum quam ut dolorem totam cupiditate
																ea architecto eligendi et. Quia dolorum et odit
																fugiat distinctio dolor excepturi aspernatur
																rerum sequi consequatur non sed excepturi
																tenetur. Odio possimus ut odio est maiores
																voluptas sit quaerat tenetur consequatur.
															</p>
															<p>
																Quas et delectus ducimus animi. Incidunt qui hic
																aut expedita vel architecto. Aliquam sunt
																incidunt dolore sed magnam quia tempora impedit
																ut saepe. Et et animi et fuga. Cupiditate ab qui
																qui eos rerum quam ut dolorem totam cupiditate
																ea architecto eligendi et. Quia dolorum et odit
																fugiat distinctio dolor excepturi aspernatur
																rerum sequi consequatur non sed excepturi
																tenetur. Odio possimus ut odio est maiores
																voluptas sit quaerat tenetur consequatur.
															</p>
														</li>
														<li>Item</li>
													</ul>
												</li>
												<li>Item</li>
											</ul>
											<p>
												Ut repudiandae delectus et ut in. Perferendis quis
												voluptas ratione voluptas mollitia tempore qui ut
												delectus magnam. Sunt nobis unde fugit et et veniam
												assumenda harum voluptas laudantium asperiores
												recusandae nihil quo. Voluptas velit et enim laborum
												non. Et id excepturi repudiandae sequi voluptatibus
												maiores mollitia est. A ipsa dolore error ducimus
												inventore consequatur dicta nesciunt. Voluptatum
												similique eum officiis. Est tenetur eveniet non
												reprehenderit exercitationem. Deserunt est labore et
												illo commodi eum ut quo vero voluptatem id unde facilis
												dolorum.
											</p>
											<ol>
												<li>Item</li>
												<li>Item</li>
												<li>Item</li>
											</ol>
											<hr />
											<pre>{'console.log("Hello World");'}</pre>
										</RichText>
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

export default RichTextPage;
