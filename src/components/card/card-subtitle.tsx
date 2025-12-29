/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { Header, HeaderProps } from '../header/header'
import { addClassesToBase } from '@components/presentation-logic'

export type CardSubtitleProps = JaxsTypes.Props<HeaderProps>

export const CardSubtitle = ({
  level = 'h6',
  children,
  class: className,
  ...props
}: CardSubtitleProps) => {
  const classes = addClassesToBase('card-subtitle', className)

  return (
    <Header level={level} class={classes} {...props}>
      {children}
    </Header>
  )
}
