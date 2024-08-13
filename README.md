# React with Vite On Steroids

A powerful and efficient starter template for building React applications with Vite, TypeScript, and a suite of modern tools.

## Features

- **Vite**: Fast and optimized build tool.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript at any scale.
- **Tailwind CSS**: Utility-first CSS framework.
- **ESLint**: Pluggable JavaScript linter.
- **Prettier**: Opinionated code formatter.
- **Vitest**: A blazing fast unit test framework.
- **Testing Library**: Simple and complete testing utilities.
- **Playwright**: End-to-end testing framework.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 20.x)
- [Yarn](https://yarnpkg.com/) (or npm or pnpm)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RicardoGEsteves/react-with-vite-on-steroids.git
   cd react-with-vite-on-steroids
   ```

2. **Install dependencies:**

   ```sh
   yarn
   ```

### Running the Development Server

To start the development server, run:

```sh
yarn dev
```

### Building for Production

To build the application for production, run:

```sh
yarn build
```

### Running Tests

- To run unit tests with Vitest, use:

```sh
yarn test
```

- To check coverage:

```sh
yarn coverage
```

- To run end-to-end tests with Playwright, use:

> Runs the end-to-end tests.

```sh
yarn playwright test
```

> Starts the interactive UI mode.

```sh
yarn playwright test --ui

```

> Runs the tests only on Desktop Chrome.

```sh
yarn playwright test --project=chromium
```

> Runs the tests in a specific file.

```sh
yarn playwright test example
```

> Runs the tests in debug mode.

```sh
yarn playwright test --debug
```

> Auto generate tests with Codegen.

```sh
yarn playwright codegen
```

### Linting and Formatting

- To lint the code with ESLint, run:

```sh
yarn lint
```

- To fix linting errors, run:

```sh
yarn lint:fix
```

- To format the code with Prettier, run:

```sh
yarn format
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)
