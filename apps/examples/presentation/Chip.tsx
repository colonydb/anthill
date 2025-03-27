import DemoIcon from "@colonydb/anthill/icons/Icon";
import Chip from "@colonydb/anthill/presentation/Chip";
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
