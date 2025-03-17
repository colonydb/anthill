# Anthill

ColonyDB's design system.

## React Components

- Built for [Next.js](https://nextjs.org/)
- Styled with [styled-jsx](https://github.com/vercel/styled-jsx)
- Supports the latest 2 versions of:
  - Chrome
  - Chrome for Android
  - Safari
  - Safari for iOS
  - Firefox
  - Edge

### Installation

If not already installed, add [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) to your project:

```shell
yarn add react react-dom next
```

Add Anthill to your project:

```shell
yarn add @colonydb/anthill
```

### Usage

1.  [Customize your app](https://nextjs.org/docs/advanced-features/custom-app) to include the `foundation/Global` component at the root of every page:

    ```js
    // pages/_app.js

    import Global from "@colonydb/anthill/foundation/Global";

    const App = ({ Component, pageProps }) => (
      <>
        <Global />
        <Component {...pageProps} />
      </>
    );

    export default App;
    ```

2.  Use components on any [Next.js page](https://nextjs.org/docs/basic-features/pages):

    ```js
    // pages/index.js

    import Button from "@colonydb/anthill/controls/Button";
    import Main from "@colonydb/anthill/layout/Main";

    const Page = () => (
      <Main restricted>
        <Button>Example Button</Button>
      </Main>
    );

    export default Page;
    ```

### Modules

- `controls/Action`
- `controls/Button`
- `controls/ComboBox`
- `controls/ContextualMenu`
- `controls/HuePicker`
- `controls/RadioButton`
- `controls/TextInput`
- `foundation/Global`
- `foundation/Layer`
- `foundation/ScrollContext`
- `icons/ExternalIcon`
- `icons/GanttChartIcon`
- `icons/GanttChartItemIcon`
- `icons/Icon`
- `icons/MailIcon`
- `icons/RemoveIcon`
- `layout/Aside`
- `layout/EditPage`
- `layout/Main`
- `layout/Stack`
- `presentation/Article`
- `presentation/Chip`
- `presentation/Field`
- `presentation/Heading`
- `presentation/PrototypeBadge`
- `presentation/Subheading`
- `presentation/Table`
- `presentation/Title`
- `utils/hueToColor`

## Collateral

### OSS Sponsorship Badge

![](collateral/sponsorship-badge.svg)

Assets (223px × 44px):

- [collateral/sponsorship-badge.svg](collateral/sponsorship-badge.svg)
- [collateral/sponsorship-badge@1x.png](collateral/sponsorship-badge@1x.png)
- [collateral/sponsorship-badge@2x.png](collateral/sponsorship-badge@2x.png)
