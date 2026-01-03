# Agent.md for component development, testing and refactoring

## Goal

To create a component library using the Jaxs JSX rendering and application 
framework and the Bootstrap library.

## Project knowledge
- Low level: Node, Vite, Typescript, Vitest
- Frameworks:
  - [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - [Jaxs](https://github.com/baccigalupi/jaxs)
- File Structure:
  - `/src`: All source code
    - `/src/components`: Component development. Each directory has one component with many parts
    - `/src/demo`: Vite test pages/applications for components
    - `/src/stories`: Storybook stories for each component
    - `/src/styles`: CSS additions mixed into pages and stories
  - `/test`: Vitest specs for both rendered TSX components and pure TS logic 
