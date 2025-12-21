# Boot-JAXS Storybook Component Library

A Bootstrap component library built with [Jaxs](https://github.com/baccigalupi/jaxs), TypeScript, and Storybook.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run Storybook in development mode:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

### Build

Build your Storybook:

```bash
npm run build-storybook
```

## Project Structure

```
src/
├── components/        # Component implementations
|
└── stories/          # Storybook stories
```

## Using JAXS with JSX

Components are built using JAXS, a lightweight JSX library for creating DOM elements. JAXS components are functions that return DOM elements.

### Example Component

```tsx
import { jsx, JaxsTypes } from 'jaxs'

type Props = JaxsTypes.Props<{
  message: string
}>

export const MyComponent = ({ message }: Props) => {
  return <div class="my-component">{message}</div>
}
```

### TypeScript Configuration

The project is configured to use JAXS with JSX:
- `jsx: "react"`
- `jsxFactory: "jsx"`
- `jsxFragmentFactory: "jsx.fragment"`
- `moduleResolution: "bundler"`
- Path alias `@components/*` maps to `./src/components/*`

All `.tsx` files should include JSX pragma comments:
```tsx
/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
```

