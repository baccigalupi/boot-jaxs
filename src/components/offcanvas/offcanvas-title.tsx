/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HeadingLevel, HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'
import { labelId } from './presentation-logic'
import { Header } from '@components/header/header'

export type OffcanvasTitleProps = JaxsTypes.Props<
  HTMLAttributes & {
    offCanvasId: string
    headingLevel?: HeadingLevel
  }
>

export const OffcanvasTitle = ({
  children,
  offCanvasId,
  headingLevel = 'h5',
  class: className,
  ...props
}: OffcanvasTitleProps) => {
  const classes = addClassesToBase('offcanvas-title', className)

  return (
    <Header
      level={headingLevel}
      class={classes}
      id={labelId(offCanvasId)}
      {...props}
    >
      {children}
    </Header>
  )
}
