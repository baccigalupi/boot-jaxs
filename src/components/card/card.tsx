/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CardProps = JaxsTypes.Props<HTMLAttributes>

export const Card = ({ children, class: className, ...props }: CardProps) => {
  const classes = addClassesToBase('card', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}

export { CardBody } from './card-body'
export { CardFooter } from './card-footer'
export { CardGroup } from './card-group'
export { CardHeader } from './card-header'
export { CardTitle } from './card-title'
export { CardSubtitle } from './card-subtitle'
export { CardText } from './card-text'
