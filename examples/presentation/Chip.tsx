import DemoIcon from "../../src/icons/Icon.js";
import Chip from "../../src/presentation/Chip.js";
import { mockAsyncAction } from "../mockAction.js";

export default {
  title: "presentation/Chip",
};

export const Default = () => <Chip>Rem Molestiae Quod</Chip>;

export const Icon = () => <Chip icon={DemoIcon}>Rem Molestiae Quod</Chip>;

export const Remove = () => <Chip onRemove={mockAsyncAction("onRemove")}>Rem Molestiae Quod</Chip>;

export const Link = () => <Chip href="https://example.com/">Rem Molestiae Quod</Chip>;

export const Full = () => (
  <>
    <Chip icon={DemoIcon} onRemove={mockAsyncAction("onRemove")} onClick={() => {}} hue={270}>
      Rem Molestiae Quod
    </Chip>
  </>
);
