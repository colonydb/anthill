import "@haydn/universal/universal.css";

import css from "dedent";
import type { ReactNode } from "react";
import "./Base.css";
import * as icons from "./icons/index.js";

type Props = {
  brandTypeface?: string;
  color?: {
    chroma: number;
    grayChroma?: number;
    hue: number;
    lightness: number;
    shadesChromaCoefficient?: number;
    shadesLightnessCoefficient?: number;
    tintsChromaCoefficient?: number;
    tintsLightnessCoefficient?: number;
  };
  children: ReactNode;
};

export const Base = ({ color, brandTypeface, children }: Props) => (
  <>
    {color !== undefined ? (
      <style
        // biome-ignore lint: we're using this to set CSS variables dynamically
        dangerouslySetInnerHTML={{
          __html: css`
            :root {
              --key-color-l: ${color.lightness};
              --key-color-c: ${color.chroma};
              --key-color-h: ${color.hue};
              --shades-l-coefficient: ${color.shadesLightnessCoefficient ?? 0.85};
              --shades-c-coefficient: ${color.shadesChromaCoefficient ?? 0.85};
              --tints-l-coefficient: ${color.tintsLightnessCoefficient ?? 0.7};
              --tints-c-coefficient: ${color.tintsChromaCoefficient ?? 0.7};
              --gray-c: ${color.grayChroma ?? 0.0};
            }
          `,
        }}
      />
    ) : null}
    {brandTypeface !== undefined ? (
      <style
        // biome-ignore lint: we're using this to set CSS variables dynamically
        dangerouslySetInnerHTML={{
          __html: css`
            :root {
              --typeface-brand: ${brandTypeface};
            }
          `,
        }}
      />
    ) : null}
    <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {(Object.keys(icons) as Array<keyof typeof icons>).map((name) => {
        // biome-ignore lint: this will be fixed when icons are loaded dynamically — we're loading them all for now
        const Component = icons[name];
        return <Component key={name} id={`icon-${name}`} />;
      })}
    </svg>
    {children}
  </>
);
