/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, HeadingLevel } from '../types'

export type HeaderProps = JaxsTypes.Props<
  {
    level?: HeadingLevel
  } & HTMLAttributes
>

export const Header = ({
  level = 'h1',
  children,
  class: className,
  ...props
}: HeaderProps) => {
  if (level === 'h1') {
    return (
      <h1 class={className} {...props}>
        {children}
      </h1>
    )
  } else if (level === 'h2') {
    return (
      <h2 class={className} {...props}>
        {children}
      </h2>
    )
  } else if (level === 'h3') {
    return (
      <h3 class={className} {...props}>
        {children}
      </h3>
    )
  } else if (level === 'h4') {
    return (
      <h4 class={className} {...props}>
        {children}
      </h4>
    )
  } else if (level === 'h5') {
    return (
      <h5 class={className} {...props}>
        {children}
      </h5>
    )
  } else {
    return (
      <h6 class={className} {...props}>
        {children}
      </h6>
    )
  }
}
