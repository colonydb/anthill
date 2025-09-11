"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import Config from "../../Config";
import styles from "./page.module.css";

const HUES = ["gray", "red", "orange", "yellow", "lime", "green", "teal", "cyan", "blue", "violet", "magenta"];

const SHADES = ["s9", "s8", "s7", "s6", "s5", "s4", "s3", "s2", "s1"];

const TINTS = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];

const ColorsPage = () => (
  <Main
    header={
      <Header actions={<Config />}>
        <Heading>Colours</Heading>
      </Header>
    }
  >
    <Card>
      <CardContent>
        <div className={styles.swatchContainer}>
          <div
            className={styles.swatch}
            style={{
              background: `var(--color-accent)`,
              gridColumnEnd: "span 11",
            }}
          >
            <span style={{ color: "var(--color-contrast)", font: "var(--font-tiny-monospace)" }}>accent</span>
          </div>
          <div
            className={styles.swatch}
            style={{
              background: `var(--color-contrast)`,
              color: `oklch(from var(--color-contrast) calc(1 - l) 0 h)`,
              gridColumnEnd: "span 11",
            }}
          >
            <span style={{ font: "var(--font-tiny-monospace)" }}>contrast</span>
          </div>
        </div>
        <div className={styles.swatchContainer}>
          <div
            className={styles.swatch}
            style={{
              background: `var(--color-black)`,
              gridColumn: "1 / -1",
            }}
          >
            <span style={{ color: "var(--color-white)", font: "var(--font-tiny-monospace)" }}>black</span>
          </div>
          {SHADES.flatMap((tone) =>
            HUES.flatMap((hue) => (
              <div
                className={styles.swatch}
                key={`${hue}-${tone}`}
                style={{
                  background: `var(--color-${hue}-${tone})`,
                }}
              >
                <span
                  style={{ color: "var(--color-white)", font: "var(--font-tiny-monospace)" }}
                >{`${hue}-${tone}`}</span>
              </div>
            )),
          )}
          {HUES.flatMap((hue) => (
            <div
              className={styles.swatch}
              key={`${hue}-00`}
              style={{
                background: `var(--color-${hue}-00)`,
              }}
            >
              <span style={{ color: "var(--color-contrast)", font: "var(--font-tiny-monospace)" }}>{`${hue}-00`}</span>
            </div>
          ))}
          {TINTS.flatMap((tone) =>
            HUES.flatMap((hue) => (
              <div
                className={styles.swatch}
                key={`${hue}-${tone}`}
                style={{
                  background: `var(--color-${hue}-${tone})`,
                }}
              >
                <span
                  style={{ color: "var(--color-black)", font: "var(--font-tiny-monospace)" }}
                >{`${hue}-${tone}`}</span>
              </div>
            )),
          )}
          <div
            className={styles.swatch}
            style={{
              background: `var(--color-white)`,
              gridColumn: "1 / -1",
            }}
          >
            <span style={{ color: "var(--color-black)", font: "var(--font-tiny-monospace)" }}>white</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </Main>
);

export default ColorsPage;
