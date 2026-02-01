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

## Debugging Conventions

- **Use editor tools, not command line, to determine TypeScript type issues**: Use the `get_errors` tool to check for TypeScript compilation errors rather than running build commands in the terminal. This provides immediate, accurate type information from the editor's language server.
- **Use read_file instead of terminal commands**: When you need to examine file contents, always use the `read_file` tool instead of terminal commands like `grep`, `cat`, or similar. The read_file tool provides proper context and doesn't require terminal interaction.

## Testing Conventions

- Keep tests as flat as possible. Avoid clever setup patterns.
- Use AAA (Arrange, Act, Assert) format, but do NOT add comments declaring these sections.
- When there are multiple tests for a method or attribute, create a `describe` group for it.
- When there is only one test for a method or attribute, omit the `describe` group, but include the method/function name in the `it` description.
- Do NOT test initialization (constructor calls).
- Do NOT write unnecessary combination tests that just verify multiple tested pieces work together. The goal is coverage and logic testing, not testing combinations.

## Class Structure Conventions

- Place private methods at the bottom of the class.
- Always export a helper function that wraps the class for end-users of the module, so they can choose to use functions instead of instantiating classes.
