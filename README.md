# Boot-JAXS Storybook Component Library

A vanilla TypeScript component library built with Storybook and Vite.

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
│   ├── Button/
│   │   ├── Button.ts
│   │   └── Button.css
│   └── Card/
│       ├── Card.ts
│       └── Card.css
└── stories/          # Storybook stories
    ├── Button.stories.ts
    └── Card.stories.ts
```

## Available Components

- **Button** - A customizable button component with size and style variants
- **Card** - A card component for displaying content with optional images

## Development Guidelines

- Write TypeScript for all components
- Create stories for each component variant
- Use CSS modules or separate CSS files for styling
- Document props using TypeScript interfaces
- Follow component-driven development practices
