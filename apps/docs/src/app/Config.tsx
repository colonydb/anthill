"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { Dialog } from "@colonydb/anthill/Dialog";
import { DialogHeader } from "@colonydb/anthill/DialogHeader";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { RegularField } from "@colonydb/anthill/RegularField";
import { useState } from "react";

const Config = () => {
  const [custom, setCustom] = useState(false);
  const [lightness, setLightness] = useState(0.6);
  const [chroma, setChroma] = useState(0.25);
  const [hue, setHue] = useState(154);
  const [shadesLightnessCoefficient, setShadesLightnessCoefficient] = useState(0.75);
  const [shadesChromaCoefficient, setShadesChromaCoefficient] = useState(0.85);
  const [tintsLightnessCoefficient, setTintsLightnessCoefficient] = useState(0.75);
  const [tintsChromaCoefficient, setTintsChromaCoefficient] = useState(0.7);
  const [grayChroma, setGrayChroma] = useState(0);
  return (
    <Dialog
      dismissible
      icon={<Icon symbol="External" />}
      render={(close) => (
        <Card
          header={
            <DialogHeader close={close}>
              <Heading>Configuration</Heading>
            </DialogHeader>
          }
        >
          <CardContent>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(22, 1fr)" }}>
              <div>
                <input
                  style={{ all: "revert" }}
                  type="checkbox"
                  checked={custom}
                  onChange={(e) => setCustom(e.target.checked)}
                />
                <button
                  type="button"
                  style={{ all: "revert" }}
                  onClick={() => {
                    setLightness(0.6);
                    setChroma(0.25);
                    setHue(154);
                    setShadesLightnessCoefficient(0.83);
                    setShadesChromaCoefficient(0.84);
                    setTintsLightnessCoefficient(0.73);
                    setTintsChromaCoefficient(0.66);
                    setGrayChroma(0);
                  }}
                  disabled={!custom}
                >
                  Simple Green
                </button>
                <button
                  type="button"
                  style={{ all: "revert" }}
                  onClick={() => {
                    setLightness(0.84);
                    setChroma(0.148);
                    setHue(252);
                    setShadesLightnessCoefficient(0.826);
                    setShadesChromaCoefficient(0.834);
                    setTintsLightnessCoefficient(0.806);
                    setTintsChromaCoefficient(0.696);
                    setGrayChroma(0);
                  }}
                  disabled={!custom}
                >
                  Pale Blue
                </button>
                <button
                  type="button"
                  style={{ all: "revert" }}
                  onClick={() => {
                    setLightness(0.5891);
                    setChroma(0.2029);
                    setHue(257.86);
                    setShadesLightnessCoefficient(0.85);
                    setShadesChromaCoefficient(0.85);
                    setTintsLightnessCoefficient(0.7);
                    setTintsChromaCoefficient(0.7);
                    setGrayChroma(0);
                  }}
                  disabled={!custom}
                >
                  Facebook Blue
                </button>
                <button
                  type="button"
                  style={{ all: "revert" }}
                  onClick={() => {
                    setLightness(0.607569);
                    setChroma(0.248872);
                    setHue(28.6863);
                    setShadesLightnessCoefficient(0.86);
                    setShadesChromaCoefficient(0.8);
                    setTintsLightnessCoefficient(0.68);
                    setTintsChromaCoefficient(0.7);
                    setGrayChroma(0);
                  }}
                  disabled={!custom}
                >
                  Coca-Cola Red
                </button>
                <button
                  type="button"
                  style={{ all: "revert" }}
                  onClick={() => {
                    setLightness(0.2329);
                    setChroma(0.0934);
                    setHue(18.56);
                    setShadesLightnessCoefficient(0.95);
                    setShadesChromaCoefficient(0.85);
                    setTintsLightnessCoefficient(0.8);
                    setTintsChromaCoefficient(0.78);
                    setGrayChroma(0);
                  }}
                  disabled={!custom}
                >
                  Hershey&apos;s Brown
                </button>
              </div>
              <div
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-contrast)",
                  padding: "0.25lh",
                }}
              >
                color-accent
              </div>
              <div
                style={{
                  background: "var(--color-contrast)",
                  color: "var(--color-accent)",
                  padding: "0.25lh",
                }}
              >
                color-contrast
              </div>
              <div>
                <input
                  style={{ all: "revert" }}
                  type="range"
                  min={0}
                  max={1}
                  step={0.001}
                  value={lightness}
                  onChange={(e) => setLightness(parseFloat(e.target.value))}
                  disabled={!custom}
                />
                <output>{lightness}</output>
                <input
                  style={{ all: "revert" }}
                  type="range"
                  min={0}
                  max={0.37}
                  step={0.001}
                  value={chroma}
                  onChange={(e) => setChroma(parseFloat(e.target.value))}
                  disabled={!custom}
                />
                <output>{chroma}</output>
                <input
                  style={{ all: "revert" }}
                  type="range"
                  min={0}
                  max={360}
                  step={0.01}
                  value={hue}
                  onChange={(e) => setHue(parseFloat(e.target.value))}
                  disabled={!custom}
                />
                <output>{hue}</output>
              </div>
            </div>
            <RegularField label="shadesLightnessCoefficient">
              <input
                style={{ all: "revert" }}
                type="range"
                min={0}
                max={1}
                step={0.001}
                value={shadesLightnessCoefficient}
                onChange={(e) => setShadesLightnessCoefficient(parseFloat(e.target.value))}
                disabled={!custom}
              />
              <output>{shadesLightnessCoefficient}</output>
            </RegularField>
            <RegularField label="shadesChromaCoefficient">
              <input
                style={{ all: "revert" }}
                type="range"
                min={0.5}
                max={1}
                step={0.001}
                value={shadesChromaCoefficient}
                onChange={(e) => setShadesChromaCoefficient(parseFloat(e.target.value))}
                disabled={!custom}
              />
              <output>{shadesChromaCoefficient}</output>
            </RegularField>
            <RegularField label="tintsLightnessCoefficient">
              <input
                style={{ all: "revert" }}
                type="range"
                min={0}
                max={1}
                step={0.001}
                value={tintsLightnessCoefficient}
                onChange={(e) => setTintsLightnessCoefficient(parseFloat(e.target.value))}
                disabled={!custom}
              />
              <output>{tintsLightnessCoefficient}</output>
            </RegularField>
            <RegularField label="tintsChromaCoefficient">
              <input
                style={{ all: "revert" }}
                type="range"
                min={0.5}
                max={1}
                step={0.001}
                value={tintsChromaCoefficient}
                onChange={(e) => setTintsChromaCoefficient(parseFloat(e.target.value))}
                disabled={!custom}
              />
              <output>{tintsChromaCoefficient}</output>
            </RegularField>
            <RegularField label="grayChroma">
              <input
                style={{ all: "revert" }}
                type="range"
                min={0}
                max={0.025}
                step={0.0001}
                value={grayChroma}
                onChange={(e) => setGrayChroma(parseFloat(e.target.value))}
                disabled={!custom}
              />
              <output>{grayChroma}</output>
            </RegularField>
            {custom ? (
              <style
                // biome-ignore lint: we're using this to set CSS variables dynamically
                dangerouslySetInnerHTML={{
                  __html: `
                  :root {
                    --key-color-l: ${lightness};
                    --key-color-c: ${chroma};
                    --key-color-h: ${hue};
                    --shades-l-coefficient: ${shadesLightnessCoefficient};
                    --shades-c-coefficient: ${shadesChromaCoefficient};
                    --tints-l-coefficient: ${tintsLightnessCoefficient};
                    --tints-c-coefficient: ${tintsChromaCoefficient};
                    --gray-c: ${grayChroma};
                  }
                `,
                }}
              />
            ) : null}
          </CardContent>
        </Card>
      )}
      width="narrow"
    >
      Config
    </Dialog>
  );
};

export default Config;
