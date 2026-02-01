declare namespace JSX {
  type Element = import('jaxs').Renderable | undefined
  interface IntrinsicElements {
    [tagName: string]: any
  }
}
