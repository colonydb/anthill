import Field from "../../src/presentation/Field.js";

export default {
  title: "presentation/Field",
};

export const Default = () => (
  <Field inputId="input" label="Provident Error Deleniti Dolorem">
    <input id="input" style={{ all: "revert" }} />
  </Field>
);

export const Inline = () => (
  <Field inputId="input" label="Provident Error Deleniti Dolorem" layout="inline">
    <input id="input" type="checkbox" style={{ all: "revert" }} />
  </Field>
);

export const Description = () => (
  <Field
    inputId="input"
    label="Provident Error Deleniti Dolorem"
    description="Neque illo debitis rerum deleniti voluptas dolor provident fugit quidem eum autem hic."
  >
    <input id="input" style={{ all: "revert" }} />
  </Field>
);

export const Error = () => (
  <Field
    inputId="input"
    label="Provident Error Deleniti Dolorem"
    errors={[
      {
        id: "1",
        message: "Quasi eum non illo ut eaque voluptatem voluptatem eaque quo temporibus natus.",
      },
    ]}
  >
    <input id="input" style={{ all: "revert" }} />
  </Field>
);

export const Errors = () => (
  <Field
    inputId="input"
    label="Provident Error Deleniti Dolorem"
    errors={[
      {
        id: "1",
        message: "Quasi eum non illo ut eaque voluptatem voluptatem eaque quo temporibus natus.",
      },
      { id: "2", message: "Qui aliquid id excepturi ipsam temporibus qui voluptatum rerum." },
    ]}
  >
    <input id="input" style={{ all: "revert" }} />
  </Field>
);

export const InlineDescription = () => (
  <Field
    inputId="input"
    label="Provident Error Deleniti Dolorem"
    layout="inline"
    description="Neque illo debitis rerum deleniti voluptas dolor provident fugit quidem eum autem hic."
  >
    <input id="input" type="checkbox" style={{ all: "revert" }} />
  </Field>
);

export const InlineError = () => (
  <Field
    inputId="input"
    label="Provident Error Deleniti Dolorem"
    layout="inline"
    errors={[
      {
        id: "1",
        message: "Quasi eum non illo ut eaque voluptatem voluptatem eaque quo temporibus natus.",
      },
    ]}
  >
    <input id="input" type="checkbox" style={{ all: "revert" }} />
  </Field>
);

export const Nested = () => (
  <Field label="Provident Error Deleniti Dolorem">
    <Field inputId="input1" label="Provident Error Deleniti Dolorem" layout="inline">
      <input id="input1" type="radio" name="input" style={{ all: "revert" }} />
    </Field>
    <Field inputId="input2" label="Provident Error Deleniti Dolorem" layout="inline">
      <input id="input2" type="radio" name="input" style={{ all: "revert" }} />
    </Field>
  </Field>
);
