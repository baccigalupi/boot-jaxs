# Agents.md for component development and refactoring

## TSX

### Always keep business logic outside of JSX/TSX

Good example

```typescript
  const className = buttonClass({ variant, outline, size, propClass })

  return (
    <button onClick={onClick} class={className}>
      {children}
    </button>
  )
```

Bad example

```typescript
  return (
    <button
      onClick={onClick}
      class={variant ? `btn btn-${variant}`: `btn btn-primary`}
    >
      {children}
    </button>
  )
```

- Extract presentational logic into a component shared `presentation-logic.ts` file
- Interaction details: event, listeners, data stores should be in component shared
  file `interactions.ts`
- Prefer separate components with guard clauses to conditional logic within a
  functional component
- Don't use an `data-bs-*` attributes

## TS

- Keep complexity low and easy to read for developers
- Functions should be less than 10 lines of code where possible.
- Extract smaller functions out of bigger functions to reduce complexity
- Never use ternaries
- Combine functions in a module with the same arguments into a class initialized
  with that state
- Export and test helper functions that hide the class

Example

```typescript
export class ActiveInfo {
  active: boolean

  constructor(active: boolean) {
    this.active = active
  }

  activeClass() {
    if (!this.active) return ''

    return 'active'
  }

  ariaCurrent() {
    if (!this.active) return undefined

    return 'page'
  }

  useLink(href?: string) {
    return href && !this.active
  }
}

export const getActiveInfo = (active: boolean | undefined) => {
  return new ActiveInfo(!!active)
}
```

## Testing

- Test all exported functions
- Only nest tests in describes when there are more than one for a function.
- Start with only one test and confirm with the user each use case

### Don't test implementation. Test side-effects and return values

Good example

```typescript
it('only calls publish once and removes the listener', () => {
  const publish = vi.fn()

  onDocumentClick(publish)
  document.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  document.dispatchEvent(new MouseEvent('click', { bubbles: true }))

  expect(publish).toHaveBeenCalledOnce()
})
```

Bad example

```typescript
it('only calls publish once and removes the listener', () => {
  const publish = vi.fn()
  vi.spyOn(document, 'removeEventListener')

  onDocumentClick(publish)
  document.dispatchEvent(new MouseEvent('click', { bubbles: true }))

  expect(document.removeEventListener).toHaveBeenCalledOnce()
})
```

### Test each bit of logic independently, not combinations or variations

Test each parameter or logic branch in isolation. Do not write:

1. **Combination tests** - multiple tested features together to verify they work together
2. **Variation tests** - the same logic path with different data variations

Each distinct logic path gets one test, not multiple tests with different input variations.

Good example

```typescript
it('when a variant is passed in, it uses that styling', () => {
  const className = buttonClass({ variant: 'success' })

  expect(className).toBe('btn btn-success')
})

it('when size is passed in, it uses that styling', () => {
  const className = buttonClass({ size: 'lg' })

  expect(className).toBe('btn btn-lg')
})

it('includes custom classes from propClass', () => {
  const className = buttonClass({ propClass: 'my-custom-class' })

  expect(className).toBe('btn btn-primary my-custom-class')
})
```

Bad examples

```typescript
// Don't combine already-tested features just to verify they work together
it('combines all possible options correctly', () => {
  const className = buttonClass({
    variant: 'secondary',
    size: 'lg',
    propClass: 'my-custom-class',
  })

  expect(className).toBe('btn btn-secondary btn-lg my-custom-class')
})

// Don't test the same logic path with different data variations
// (both test that custom classes are included—same code path)
it('includes custom classes from propClass', () => {
  const className = buttonClass({ propClass: 'my-custom-class' })

  expect(className).toBe('btn btn-primary my-custom-class')
})

it('handles multiple custom classes', () => {
  const className = buttonClass({ propClass: 'custom-class another-class' })

  expect(className).toBe('btn btn-primary custom-class another-class')
})
```

### Don't test things implemented elsewhere

Good example

```typescript
it('when a variant is passed in, it uses that styling', () => {
  const className = buttonClass({ variant: 'success' })

  expect(className).toBe('btn btn-success')
})
```

Bad example

```typescript
// This is implemented in `addClassesToBase` not in `buttonClass`
it('handles propClass being undefined', () => {
  const className = buttonClass({propClass: undefined})

  expect(class).toBe(`btn btn-primary`)
})
```

### Testing TXS

- Make sure tsx test files have the right pragma:
  `import { /** @jsx jsx */ jsx } from 'jaxs'`
- Use the test helper `renderToString` for rendering components
- Components can return undefined (typically with guard clausses) instead of
  renderable content. In those cases check for undefined:

```typescript
  it('does not render when dismissible is false', () => {
    const component = <CloseButton dismissible={false} onClick="handle-close" />

    expect(component).toBe(undefined)
  })
```
