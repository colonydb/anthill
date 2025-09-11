import "@haydn/universal/universal.css";

import css from "dedent";
import type { ReactNode } from "react";
import "./Base.css";
import { Block } from "./Block.js";
import * as icons from "./icons/index.js";

type Props = {
  brandTypeface?: string;
  color?: {
    chroma: number;
    grayChroma?: number;
    hue: number;
    lightness: number;
    shadesLightnessCoefficient?: number;
    shadesChromaCoefficient?: number;
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
              --config-brand-color-l: ${color.lightness};
              --config-brand-color-c: ${color.chroma};
              --config-brand-color-h: ${color.hue};
              --config-shades-l: ${color.shadesLightnessCoefficient ?? 0.75};
              --config-shades-c: ${color.shadesChromaCoefficient ?? 0.85};
              --config-tints-l: ${color.tintsLightnessCoefficient ?? 0.75};
              --config-tints-c: ${color.tintsChromaCoefficient ?? 0.7};
              --config-gray-c: ${color.grayChroma ?? 0.0};
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
              --config-brand-typeface: ${brandTypeface};
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
    <Block>{children}</Block>
  </>
);
