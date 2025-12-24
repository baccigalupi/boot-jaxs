/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '@components/types'

/* NOTE: navigation is built into Jaxs, so the "go-to-href"
      will be correctly navigated by events in the framwork.
*/
export type LinkProps = JaxsTypes.Props<{href: string} & HTMLAttributes>
export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a onClick="go-to-href" {...rest}>
      {children}
    </a>
  )
}
