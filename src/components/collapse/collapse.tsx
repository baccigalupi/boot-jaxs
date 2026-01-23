/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { HTMLAttributes } from '../types'
import { collapseClasses, isAnimating, isShowing } from './presentation-logic'
import { viewModel, subscriptions, CollapsesState } from './interactions'

export type CollapseProps = JaxsTypes.Props<
  {
    id: string
    horizontal?: boolean
    collapseCollection: CollapsesState
  } & HTMLAttributes
>

export const CollapseTemplate = ({
  id,
  horizontal = false,
  children,
  class: propClasses,
  collapseCollection = [],
  ...props
}: CollapseProps) => {
  const show = isShowing({ collapseCollection, id })
  const animating = isAnimating({ collapseCollection, id })
  const classes = collapseClasses({
    show,
    animating,
    horizontal,
    propClasses,
  })

  return (
    <div id={id} class={classes} {...props}>
      {children}
    </div>
  )
}

export const Collapse = bind({
  Template: CollapseTemplate,
  viewModel,
  subscriptions,
})
