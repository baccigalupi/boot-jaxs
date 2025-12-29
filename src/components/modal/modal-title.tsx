/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { Header, HeaderProps } from '../header/header'
import { addClassesToBase } from '@components/presentation-logic'

export type ModalTitleProps = JaxsTypes.Props<HeaderProps>

export const ModalTitle = ({
  level = 'h5',
  children,
  class: className,
  ...props
}: ModalTitleProps) => {
  const classes = addClassesToBase('modal-title', className)

  return (
    <Header level={level} class={classes} {...props}>
      {children}
    </Header>
  )
}
