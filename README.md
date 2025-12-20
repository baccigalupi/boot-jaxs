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
│   ├── Alert/
│   │   └── Alert.tsx
│   ├── Badge/
│   │   └── Badge.tsx
│   ├── Button/
│   │   ├── Button.ts
│   │   └── Button.css
│   └── Card/
│       ├── Card.ts
│       └── Card.css
└── stories/          # Storybook stories
    ├── Alert.stories.ts
    ├── Badge.stories.ts
    ├── Button.stories.ts
    └── Card.stories.ts
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

## Available Components

- **Alert** - Bootstrap alert component with various types and dismissible option
- **Badge** - Bootstrap badge component with pill variant
- **Button** - A customizable button component with size and style variants
- **Card** - A card component for displaying content with optional images

## Development Guidelines

- Use TypeScript for all components
- Use JAXS JSX for component rendering
- Create stories for each component variant
- Use Bootstrap classes for styling
- Document props using TypeScript interfaces with `JaxsTypes.Props`
- Follow component-driven development practices
