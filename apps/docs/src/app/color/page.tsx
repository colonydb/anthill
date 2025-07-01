"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import Config from "../Config";
import styles from "./page.module.css";

const HUES = ["gray", "red", "orange", "yellow", "lime", "green", "teal", "cyan", "blue", "violet", "magenta"];

const SHADES = ["s9", "s8", "s7", "s6", "s5", "s4", "s3", "s2", "s1"];

const TINTS = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];

const ColorPage = () => (
	<Section spacing="p2" title={<Heading>Colour</Heading>}>
		<Card
			header={
				<Header actions={<Config />}>
					<Heading>Palette</Heading>
				</Header>
			}
		>
			<CardContent>
				<div className={styles.swatchContainer}>
					<div
						className={styles.swatch}
						style={{
							background: `var(--color-accent)`,
							color: `var(--color-contrast)`,
							gridColumnEnd: "span 11",
						}}
					>
						accent
					</div>
					<div
						className={styles.swatch}
						style={{
							background: `var(--color-contrast)`,
							color: `oklch(from var(--color-contrast) calc(1 - l) 0 h)`,
							gridColumnEnd: "span 11",
						}}
					>
						contrast
					</div>
				</div>
				<div className={styles.swatchContainer}>
					<div
						className={styles.swatch}
						style={{
							background: `var(--color-black)`,
							color: `var(--color-white)`,
							gridColumn: "1 / -1",
						}}
					>
						black
					</div>
					{SHADES.flatMap((tone) =>
						HUES.flatMap((hue) => (
							<div
								className={styles.swatch}
								key={`${hue}-${tone}`}
								style={{
									background: `var(--color-${hue}-${tone})`,
									color: `var(--color-white)`,
								}}
							>
								{`${hue}-${tone}`}
							</div>
						)),
					)}
					{HUES.flatMap((hue) => (
						<div
							className={styles.swatch}
							key={`${hue}-00`}
							style={{
								background: `var(--color-${hue}-00)`,
								color: `var(--color-contrast)`,
							}}
						>
							{`${hue}-00`}
						</div>
					))}
					{TINTS.flatMap((tone) =>
						HUES.flatMap((hue) => (
							<div
								className={styles.swatch}
								key={`${hue}-${tone}`}
								style={{
									background: `var(--color-${hue}-${tone})`,
									color: `var(--color-black)`,
								}}
							>
								{`${hue}-${tone}`}
							</div>
						)),
					)}
					<div
						className={styles.swatch}
						style={{
							background: `var(--color-white)`,
							color: `var(--color-black)`,
							gridColumn: "1 / -1",
						}}
					>
						white
					</div>
				</div>
			</CardContent>
		</Card>
	</Section>
);

export default ColorPage;
