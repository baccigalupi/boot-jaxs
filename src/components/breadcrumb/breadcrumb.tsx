/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import type { HTMLAttributes } from '../types'

export type BreadcrumbProps = JaxsTypes.Props<HTMLAttributes>

export const Breadcrumb = ({
  class: propClasses,
  children,
  ...rest
}: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" class={propClasses} {...rest}>
      <ol class="breadcrumb">{children}</ol>
    </nav>
  )
}
