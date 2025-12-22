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
export type ButtonVariant = StyleVariant | 'link'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'sm' | 'lg'
