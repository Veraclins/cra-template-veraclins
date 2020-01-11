# cra-template-typescript

This is an opinionated batteries-included TypeScript template for [Create React App](https://github.com/facebook/create-react-app). It includes my preferred folder structure and a number of packages I find myself using all the time, including:

- [Redux toolkit](https://github.com/reduxjs/redux-toolkit)
- [Styled Components](https://styled-components.com/) and [Styled normalize](https://github.com/sergeysova/styled-normalize)
- [React Router](https://github.com/ReactTraining/react-router#readme)
- Absolute paths

It is based on the official typescript template.

To use this template, add `--template veraclins` when creating a new app.

For example:

```sh
npx create-react-app my-app --template veraclins

# or

yarn create react-app my-app --template veraclins
```

## Linting

This template comes with Eslint and Prettier configurations for linting the application. To use it, you need to install the plugins and config. This you can do by running

`yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks eslint-plugin-react prettier`

**_or_**

`npm install --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks eslint-plugin-react prettier`

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
