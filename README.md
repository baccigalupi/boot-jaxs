# Boot-JAXS Storybook Component Library

A Bootstrap component library built with [Jaxs](https://github.com/baccigalupi/jaxs), TypeScript, and Storybook.

## Components

### Static

These components have no interactivity, and therefore are ready to go without
state setup or other work. Because navigation is built in, components that
navigate require no additional love. For example,
`<Link href="/my-link">Go</Link>`, won't require registering the data
component's store or listeners.

- Badge
- Link
- Button & Button Group
- Breadcrumb
- Card
- Close Button (receives correct onClick event from connected universe)

### Dynamic or interactive

This is the set of components that are interactive. It is the good place where Bootstrap goes beyond a great styling system, require a data store and event
listeners.

How this is easy to register these for a component is still a work in progress,
and I'm hoping through building these components out, it will be easy and clear.

- Accordion: Toggling items is interactive.
- Alert: dynamically created, and allowed to close via a button. Also, decay
  after a period live is also an option.
- Carousel: Clicking to switch between slide, or automatically advancing are
  some of the interactions. Interval customization is not yet configured in, nor
  are some of the other connective data that are only useful with the
  interaction models setup.
- Collapse: Similar to Accordion and Carousel. Parts of the dom are independent
  and need state and events/handlers to connect the logic.

## Installation

```bash
npm install
```

## Development

Run Storybook in development mode:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

## Build

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

## Using JAXS with TS

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
