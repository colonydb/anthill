import { useRef, useState } from "react";
import {
  Action,
  Article,
  Aside,
  Button,
  Chip,
  ComboBox,
  ContextualMenu,
  EditPage,
  Field,
  GanttChartIcon,
  HuePicker,
  Icon,
  Main,
  PrototypeBadge,
  RadioButton,
  Stack,
  Table,
  TextInput,
} from "../src/index.js";
import { mockAction, mockAsyncAction } from "./mockAction.js";

export default {
  title: "Mockups",
  fullscreen: true,
};

export const Prototype = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hue, setHue] = useState(0);
  const [option, setOption] = useState("a");
  const buttonRef = useRef(null);
  return (
    <EditPage>
      <PrototypeBadge />
      <Main restricted>
        <Stack spacing="xxxxl">
          <Article>
            <h1>Example Prototype</h1>
            <p>
              Similique sit dolor ut sit consequuntur molestias pariatur ut. Neque reprehenderit
              blanditiis non earum totam debitis laboriosam omnis ea laborum aliquam a perferendis
              ipsum voluptates. Nulla porro est doloribus ut est nesciunt consequatur tenetur.
              Repellat necessitatibus ut adipisci sit aspernatur excepturi unde qui dolores nihil
              mollitia. Et ducimus ducimus qui numquam molestiae ipsa nulla vero deserunt et.
              Eveniet repellat ut omnis et praesentium est architecto hic consectetur. Assumenda
              error explicabo sapiente vel cumque id sed cupiditate numquam ad. Voluptas numquam eos
              sit ut nobis non omnis dolor odio.
            </p>
            <ul>
              <li>Eius voluptas cupiditate pariatur distinctio accusamus dolor et labore qui.</li>
              <li>Labore animi dolorem ex velit ratione deleniti est placeat eius animi quia.</li>
              <li>Sint expedita quod ab a quaerat voluptatibus suscipit sit maxime et.</li>
              <li>Optio occaecati saepe dolorum et voluptatibus id vel non est sed nulla eos.</li>
            </ul>
          </Article>
          <Table
            style="striped"
            head={[
              {
                id: 1,
                value: "Column 1",
              },
              {
                id: 2,
                value: "Column 2",
              },
              {
                id: 3,
                value: "Column 3",
              },
            ]}
            foot={[
              {
                id: 1,
                value: 3,
              },
              {
                id: 2,
                value: 6,
              },
              {
                id: 3,
                value: 9,
              },
            ]}
            body={[
              {
                id: 1,
                value: [
                  { id: 1, value: 1 },
                  { id: 2, value: 2 },
                  { id: 3, value: 3 },
                ],
              },
              {
                id: 2,
                value: [
                  { id: 1, value: 1 },
                  { id: 2, value: 2 },
                  { id: 3, value: 3 },
                ],
              },
              {
                id: 3,
                value: [
                  { id: 1, value: 1 },
                  { id: 2, value: 2 },
                  { id: 3, value: 3 },
                ],
              },
            ]}
          />
        </Stack>
      </Main>
      <Aside
        icon={Icon}
        title="Example Prototype"
        actions={
          <div>
            <Action
              ref={buttonRef}
              onClick={() => {
                setShowMenu((current) => !current);
              }}
            >
              Menu
            </Action>
            {showMenu ? (
              <ContextualMenu
                anchorRef={buttonRef}
                items={[
                  {
                    id: "item-1",
                    label: "Item 1",
                  },
                  {
                    id: "item-2",
                    label: "Item 2",
                  },
                  {
                    id: "item-3",
                    label: "Item 3",
                  },
                  {
                    id: "item-4",
                    label: "Item 4",
                  },
                ]}
                onSelect={mockAction("onSelect")}
                onClose={() => {
                  // setShowMenu(false);
                }}
              />
            ) : null}
          </div>
        }
      >
        <form action="https://example.com/">
          <Stack>
            <Field label="Name" inputId="name">
              <TextInput id="name" />
            </Field>
            <Field label="Email" inputId="email">
              <TextInput id="email" type="email" />
            </Field>
            <Field label="Phone number" inputId="phone">
              <TextInput id="phone" type="tel" />
            </Field>
            <Field label="Radio buttons">
              <Field inputId="radio1" label="Sint enim nesciunt" layout="inline">
                <RadioButton
                  id="radio1"
                  name="radio"
                  checked={option === "a"}
                  onChange={() => {
                    setOption("a");
                  }}
                />
              </Field>
              <Field inputId="radio2" label="Qui ipsam vero numquam" layout="inline">
                <RadioButton
                  id="radio2"
                  name="radio"
                  checked={option === "b"}
                  onChange={() => {
                    setOption("b");
                  }}
                />
              </Field>
            </Field>
            <Field label="Hue picker" inputId="hue">
              <HuePicker
                id="hue"
                value={hue}
                onChange={(value) => {
                  setHue(value);
                }}
              />
            </Field>
            <Field label="Combo" inputId="combo">
              <ComboBox
                id="combo"
                items={[
                  { id: "1", label: "Zebra" },
                  { id: "2", label: "Tiger" },
                  { id: "3", label: "Kangaroo" },
                ]}
              />
            </Field>
            <footer>
              <Button type="submit">Submit</Button>
            </footer>
          </Stack>
        </form>
        <Table
          body={[
            {
              id: "1",
              value: [
                {
                  id: "1",
                  value: (
                    <Chip icon={GanttChartIcon} hue={272} onRemove={mockAsyncAction("onRemove")}>
                      Aperiam Dicta Sint
                    </Chip>
                  ),
                },
              ],
            },
            {
              id: "2",
              value: [
                {
                  id: "1",
                  value: (
                    <Chip icon={GanttChartIcon} hue={4} onRemove={mockAsyncAction("onRemove")}>
                      Veniam Inventore Aspernatur Et
                    </Chip>
                  ),
                },
              ],
            },
            {
              id: "3",
              value: [
                {
                  id: "1",
                  value: (
                    <Chip icon={GanttChartIcon} hue={23} onRemove={mockAsyncAction("onRemove")}>
                      Dolores Ipsam Consectetur
                    </Chip>
                  ),
                },
              ],
            },
            {
              id: "4",
              value: [
                {
                  id: "1",
                  value: (
                    <Chip icon={GanttChartIcon} hue={312} onRemove={mockAsyncAction("onRemove")}>
                      Est Pariatur Itaque Nobis Libero Ut Omnis Fugiat Soluta Nam Quibusdam
                    </Chip>
                  ),
                },
              ],
            },
          ]}
        />
      </Aside>
    </EditPage>
  );
};
