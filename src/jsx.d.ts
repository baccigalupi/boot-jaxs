declare namespace JSX {
  type Element = import('jaxs').Renderable
  interface IntrinsicElements {
    [tagName: string]: any
  }
}
