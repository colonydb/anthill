import { Card } from "@colonydb/anthill/Card";
import { CardTable } from "@colonydb/anthill/CardTable";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";

const TypographyPage = () => (
	<Section title={<Heading>Typography</Heading>}>
		<Card header={<Heading>Typefaces</Heading>}>
			<CardTable
				cols={{ token: "Token", specimen: "Specimen" }}
				rows={["typeface-system", "typeface-brand", "typeface-monospace"].map((typeface) => ({
					key: typeface,
					values: {
						token: <div style={{ font: "var(--font-tiny-monospace)" }}>{typeface}</div>,
						specimen: (
							<Stack spacing="00">
								<Specimen>
									<p
										style={{
											fontFamily: `var(--${typeface})`,
											fontSize: "var(--size-title-font)",
											lineHeight: "var(--size-title-line)",
										}}
									>
										The quick brown fox jumps over the lazy dog.
									</p>
								</Specimen>
								<Specimen>
									<p style={{ fontFamily: `var(--${typeface})` }}>The quick brown fox jumps over the lazy dog.</p>
								</Specimen>
							</Stack>
						),
					},
				}))}
			/>
		</Card>
		<Card header={<Heading>Fonts</Heading>}>
			<CardTable
				cols={{ token: "Token", specimen: "Specimen" }}
				rows={[
					"font-hero",
					"font-title",
					"font-heading",
					"font-subheading",
					"font-regular",
					"font-regular-bold",
					"font-regular-italic",
					"font-regular-bold-italic",
					"font-regular-monospace",
					"font-small",
					"font-small-bold",
					"font-small-italic",
					"font-small-bold-italic",
					"font-small-monospace",
					"font-tiny",
					"font-tiny-bold",
					"font-tiny-italic",
					"font-tiny-bold-italic",
					"font-tiny-monospace",
				].map((font) => ({
					key: font,
					values: {
						token: <div style={{ font: "var(--font-tiny-monospace)" }}>{font}</div>,
						specimen: (
							<Specimen>
								<p style={{ font: `var(--${font})` }}>
									Aspernatur veniam quasi dolores nulla quaerat libero culpa ipsa enim quia ut magni sint dolor tenetur.
									Consequatur itaque officiis perferendis id vero aspernatur sed autem et harum. Est magnam
									reprehenderit nemo sint quis nam odit aut quod ad rem repellendus eaque et. In rerum et sit quas
									ratione nostrum sed et officia ut. Aperiam eum aut dolores aut rerum ut sit inventore et quidem
									molestias maiores. Enim quam aspernatur aliquid similique qui officiis necessitatibus doloribus
									possimus aut sint totam aut voluptas. Minus excepturi sit odio est. Atque beatae soluta et et est fuga
									officiis vel facere.
								</p>
							</Specimen>
						),
					},
				}))}
			/>
		</Card>
	</Section>
);

export default TypographyPage;
