/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { Header, HeaderProps } from '../header/header'
import { addClassesToBase } from '@components/presentation-logic'

export type CardTitleProps = JaxsTypes.Props<HeaderProps>

export const CardTitle = ({
  level = 'h5',
  children,
  class: className,
  ...props
}: CardTitleProps) => {
  const classes = addClassesToBase('card-title', className)

  return (
    <Header level={level} class={classes} {...props}>
      {children}
    </Header>
  )
}
