import Chip from "../presentation/Chip";
import DemoIcon from "../icons/Icon";

export default {
  title: "presentation/Chip",
};

export const Default = () => <Chip>Rem Molestiae Quod</Chip>;

export const Icon = () => <Chip icon={DemoIcon}>Rem Molestiae Quod</Chip>;

export const Remove = () => <Chip onRemove={() => {}}>Rem Molestiae Quod</Chip>;

export const Link = () => <Chip href="https://example.com/">Rem Molestiae Quod</Chip>;

export const Full = () => (
  <>
    <Chip icon={DemoIcon} onRemove={() => {}} onClick={() => {}} hue={270}>
      Rem Molestiae Quod
    </Chip>
  </>
);
