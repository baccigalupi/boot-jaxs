// Global HTML attribute types
type AutoCapitalizeValues =
  | 'off'
  | 'none'
  | 'on'
  | 'sentences'
  | 'words'
  | 'characters'
type Direction = 'ltr' | 'rtl' | 'auto'
type Translate = 'yes' | 'no'

export type HTMLAttributes = {
  id?: string
  class?: string
  disabled?: boolean
  autocapitalize?: AutoCapitalizeValues
  dir?: Direction
  hidden?: boolean
  lang?: string
  tabindex?: number
  spellcheck?: boolean
  title?: string
  translate?: Translate
}

export type StyleVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

// Button specific types
export type ButtonVariant = StyleVariant | 'link' | 'none'
export type ButtonType = 'button' | 'submit' | 'reset'
export type Size = 'sm' | 'lg'
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type CaroselRide = 'carousel' | 'true' | undefined
export type BooleanString = 'true' | 'false'
export type ContentDirection = 'up' | 'down' | 'start' | 'end'
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type PlaceholderSizes = 'xs' | 'sm' | 'lg'
export type PlaceholderAnimations = 'glow' | 'wave'
export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom'
export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left' | 'auto'
